import s from './SubscribeActivate.module.scss'
import Layout from "../../layouts/Layout";
import {FC, useCallback, useEffect, useMemo, useState} from "react";
import {OwnSelect} from "../../components/OwnSelect/OwnSelect";
import {CheckBox} from "../../components/CheckBox/CheckBox";
import Button from "../../components/Button/Button";
import {SelectAccount} from "../../components/Modals/SelectAccount/SelectAccount";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {useTelegram} from "../../hooks/useTelegram";
import {url} from "../../core/fetch";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import {Account} from "../../interfaces/AccountsProps";
import {chooseAccount} from "../../store/features/accountSlice";
import {clearCart} from "../../store/features/cartSlice";
import {getServiceImage} from "../../utils/imgs";
import {UserDataProps} from "../../interfaces/User";
import Loader from "../../components/Loader/Loader";
import {FeedbackBlock, FeedBackI} from "../../interfaces/Feedback";

const items = [
    {
        text: 'Есть существующий аккаунт',
        value: 'have'
    },
    {
        text: 'Не помню пароль от аккаунта',
        value: 'forget'
    },
    {
        text: 'Необходимо зарегистрировать',
        value: 'need'
    }
]

const SubscribeActivate: FC<UserDataProps> = ({data}) => {
    const [selected, setSelected] = useState('');
    const [isSave, setIsSave] = useState(false);
    const [isOpened, setOpened] = useState(false);
    const {id : product, variant} = useParams()
    const [step, setStep] = useState(1);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [showAccountBlock, setShowAccountBlock] = useState(false);
    const { id } = useTelegram();
    const [loading, setLoading] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state) => state.cart.items);
    const currentAccount = useAppSelector(state => state.account.account);

    const isAccountIncomplete = useMemo(() => !currentAccount.service || !currentAccount.email || !currentAccount.password, [currentAccount]);
    const totalAmount = useMemo(() => cartItems.reduce((acc, curr) => acc + (curr.main?.price || 0), 0), [cartItems]);
    const cartItem = useMemo(() => cartItems[0]?.main?.name, [cartItems]);
    const [feedback, setFeedBack] = useState<FeedBackI | null>(null)

    console.log(feedback)
    // const {data: feedback} = useSWR(`${url}/api/feedback/${id}`, fetcher);

    const getFeedBack = async () => {
        try {
            const {data} = await axios.get(`${url}/api/feedback/${product}/${variant}`)
            setFeedBack(data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getFeedBack()
    }, [])

    useEffect(() => {
        if (data?.savedAccounts) {
            setShowAccountBlock(data.savedAccounts.some((item: Account) => item.service === cartItem));
        }
    }, [data, cartItem]);

    const matchingAccounts = useMemo(() => data?.savedAccounts.filter((item: Account) => item.service === cartItem) || [], [data, cartItem]);

    const handleOrder = async (email: string, password: string, additionalInfo: string) => {
        const orderData = {
            customerId: id,
            email: email || currentAccount.email,
            password: password || currentAccount.password,
            totalAmount,
            items: cartItems,
            status: "Оплачен",
            existedAcc: selected,
            additionalInfo
        };

        try {
            const { data: response } = await axios.post(`${url}/api/order/create`, orderData);
            if (response) {
                navigate('/success-actived');
                dispatch(clearCart());
            }

            if (isSave) {
                const accountData = {
                    service: cartItems[0].main.name,
                    email,
                    password,
                    image: getServiceImage(cartItems[0].main.name)
                };
                await axios.post(`${url}/api/user/account/${id}`, accountData);
            }
        } catch (error) {
            console.error('Error processing order:', error);
        }
    }

    const handlePayment = useCallback(async (amount: number) => {
        try {
            setLoading(true);
            const { data: paymentData } = await axios.get(`${url}/api/payment/create-link?amount=${amount}&invoiceId=${id}&description=Пополнение баланса на сумму ${amount}`);
            if (paymentData?.paymentLink) {
                navigate('/proceed-payment');
                window.scrollTo({ top: 0 });
                window.location.href = paymentData.paymentLink;
            }
        } catch (error) {
            console.error('Failed to fetch payment link:', error);
        } finally {
            setLoading(false);
        }
    }, [id, navigate]);

    const onSubmit: SubmitHandler<FieldValues> = useCallback(async (values) => {
        const { email, password, additionalInfo: formAdditionalInfo } = values;

        if (data.balance >= totalAmount) {
            await handleOrder(email, password, formAdditionalInfo);
        } else {
            await handlePayment(totalAmount);
        }
    }, [totalAmount, handleOrder, handlePayment]);

    if (!data || loading || !feedback) return <Loader />;

    return (
        <>
            <SelectAccount
                nextStep={() => setStep(2)}
                promoActive={isOpened}
                matchingAccounts={matchingAccounts}
                onClose={() => setOpened((prev) => !prev)}
            />
            <div className={s.background}>
                <Layout>
                    <div className={s.activationWrapper}>
                        <div className={s.firstBlock}>
                            <h2>Активация подписки</h2>
                            <div className={s.security}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={12}
                                    height={12}
                                    viewBox="0 0 12 12"
                                    fill="none"
                                >
                                    <g clipPath="url(#clip0_807_14661)">
                                        <path
                                            d="M8.5 5.5V4C8.5 2.61929 7.38071 1.5 6 1.5C4.61929 1.5 3.5 2.61929 3.5 4V5.5M3.9 10.5H8.1C8.94008 10.5 9.36012 10.5 9.68099 10.3365C9.96323 10.1927 10.1927 9.96323 10.3365 9.68099C10.5 9.36012 10.5 8.94008 10.5 8.1V7.9C10.5 7.05992 10.5 6.63988 10.3365 6.31901C10.1927 6.03677 9.96323 5.8073 9.68099 5.66349C9.36012 5.5 8.94008 5.5 8.1 5.5H3.9C3.05992 5.5 2.63988 5.5 2.31901 5.66349C2.03677 5.8073 1.8073 6.03677 1.66349 6.31901C1.5 6.63988 1.5 7.05992 1.5 7.9V8.1C1.5 8.94008 1.5 9.36012 1.66349 9.68099C1.8073 9.96323 2.03677 10.1927 2.31901 10.3365C2.63988 10.5 3.05992 10.5 3.9 10.5Z"
                                            stroke="#17B26A"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_807_14661">
                                            <rect width={12} height={12} fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p>Все данные надёжно защищены</p>
                            </div>
                        </div>
                        {showAccountBlock && (
                            <div className={s.haveAccBlock}>
                                <img
                                    src={`${url}/api/uploads/${matchingAccounts[0].image}`}
                                    style={{ width: '30px', height: '30px' }}
                                    alt='/'
                                />
                                <div className={s.rightDiv}>
                                    <p className={s.headingText}>
                                        Активировать подписку на сохранённый аккаунт?
                                    </p>
                                    <p className={s.descr}>
                                        {matchingAccounts[0].email}
                                    </p>
                                    <div className={s.variants}>
                                        {step !== 2 && (
                                            <p
                                                className={s.blue}
                                                onClick={() => {
                                                    dispatch(chooseAccount({
                                                        service: matchingAccounts[0].service,
                                                        email: matchingAccounts[0].email,
                                                        password: matchingAccounts[0].password
                                                    }));
                                                    setShowAccountBlock(false);
                                                }}
                                            >
                                                Да
                                            </p>
                                        )}
                                        <p onClick={() => setOpened(true)}>Выбрать другой</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/*<div className={s.selectBlock}>*/}
                            {/*    <p className={s.headingText}>У Вас есть существующий аккаунт от необходимого*/}
                            {/*        сервиса или его требуется зарегистрировать?</p>*/}
                            {/*    <div className={s.select}>*/}
                            {/*        <OwnSelect items={items} setSelected={setSelected}/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*{isAccountIncomplete && (*/}
                            {/*    <>*/}

                            {/*        <div className={s.loginBlock}>*/}
                            {/*            <p className={s.headingText}>Пароль для входа в необходимый сервис</p>*/}
                            {/*            <input*/}
                            {/*                {...register('password', { required: true })}*/}
                            {/*                type="password"*/}
                            {/*                placeholder="****"*/}
                            {/*            />*/}
                            {/*            {errors.password && <p className={s.error}>Пароль обязателен</p>}*/}
                            {/*            <p className={s.descr}>*/}
                            {/*                Введите пароль от аккаунта / для регистрации аккаунта в необходимом*/}
                            {/*                сервисе.*/}
                            {/*            </p>*/}
                            {/*        </div>*/}
                            {/*    </>*/}
                            {/*)}*/}
                            {/*<div className={s.loginBlock}>*/}
                            {/*    <p className={s.headingText}>*/}
                            {/*        Укажите дополнительную информацию, которая нам может быть необходима для*/}
                            {/*        активации подписки*/}
                            {/*    </p>*/}
                            {/*    <input {...register('additionalInfo')} placeholder="Вход через Apple, Google и т.д."/>*/}
                            {/*    <p className={s.descr}>*/}
                            {/*        К примеру, вход в аккаунт сервиса выполняется через определённую соц.сеть.*/}
                            {/*        Если же доп.информация не нужна, оставьте поле пустым.*/}
                            {/*    </p>*/}
                            {/*</div>*/}
                            {feedback.blocks.map((item : FeedbackBlock) => {
                                if (item.inputType === 'radio') {
                                    return (
                                        <div className={s.selectBlock}>
                                            <p className={s.headingText}>{item.name}</p>
                                            <div className={s.select}>
                                                {item.variants ? <OwnSelect items={item.variants} setSelected={setSelected}/> : null}
                                            </div>
                                        </div>
                                    )
                                } else if (item.inputType === "input") {
                                    return (
                                        <div className={s.loginBlock}>
                                            <p className={s.headingText}>{item.name}</p>
                                            <input
                                                {...register(item.name, { required: true })}
                                                type="text"
                                                placeholder={item.placeholder}
                                                />
                                            {errors.email && <p className={s.error}>Поле обязательно</p>}
                                            <p className={s.descr}>
                                                {item.description}
                                            </p>
                                        </div>
                                    )
                                } else if (item.inputType === "textarea") {
                                    return (
                                        <div className={s.loginBlock}>
                                            <p className={s.headingText}>{item.name}</p>
                                            <textarea
                                                {...register(item.name, { required: true })}
                                                placeholder={item.placeholder}
                                            />
                                            {errors.email && <p className={s.error}>Поле обязательно</p>}
                                            <p className={s.descr}>
                                                {item.description}
                                            </p>
                                        </div>
                                    )
                                }
                            })}
                            <div className={s.saveDataBlock}>
                                <div className={s.topDiv}>
                                    <CheckBox setChecked={setIsSave}/>
                                    <h3>Cохранить данные</h3>
                                </div>
                                <p>Мы сохраним эти данные в вашем профиле, чтобы в следующий раз вам не
                                    приходилось их вводить
                                </p>
                            </div>
                            <div className={s.saveDataBlock}>
                                <Button text="Активировать аккаунт" width="100%" height="40px"/>
                            </div>
                        </form>
                    </div>
                </Layout>
            </div>
        </>
    )
}

export default SubscribeActivate