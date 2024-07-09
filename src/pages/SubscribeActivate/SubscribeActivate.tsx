import s from './SubscribeActivate.module.scss'
import Layout from "../../layouts/Layout";
import React, {useEffect, useState} from "react";
import {OwnSelect} from "../../components/OwnSelect/OwnSelect";
import {CheckBox} from "../../components/CheckBox/CheckBox";
import Button from "../../components/Button/Button";
import {Spotify} from "./Svgs";
import {SelectAccount} from "../../components/Modals/SelectAccount/SelectAccount";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {useTelegram} from "../../hooks/useTelegram";
import useSWR from "swr";
import {fetcher, url} from "../../core/fetch";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import {Account} from "../../interfaces/AccountsProps";
import {chooseAccount} from "../../store/features/accountSlice";
import {clearCart} from "../../store/features/cartSlice";

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

export const SubscribeActivate = () => {
    const [selected, setSelected] = useState('')
    const [isSave, setIsSave] = useState(false)
    const [isOpened, setOpened] = useState(false)
    const [step, setStep] = useState(1)
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate()

    const {id, onBackButtonClick} = useTelegram()
    const {data} = useSWR(`${url}/api/user/${id}`, fetcher)

    const dispatch = useAppDispatch()
    const cartItems = useAppSelector((state) => state.cart.items);
    const currentAccount = useAppSelector(state => state.account.account)
    const isAccountIncomplete = !currentAccount.service || !currentAccount.email || !currentAccount.password;

    const totalAmount = cartItems?.reduce((acc: number, curr: any) => acc += curr.main.price, 0)
    const cartItem = cartItems[0].main.name
    const [showAccountBlock, setShowAccountBlock] = useState(false);

    useEffect(() => {
        onBackButtonClick(() => navigate('/'));

        return () => {
            onBackButtonClick(null);
        };
    }, [onBackButtonClick, navigate]);

    useEffect(() => {
        if (data?.savedAccounts) {
            setShowAccountBlock(data?.savedAccounts.some((item: Account) => item.service === cartItem))
        }
    }, [data, cartItem]);

    const matchingAccounts = data?.savedAccounts.filter((item: Account) => item.service === cartItem) || []

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        const { email, password } = values;

        let additionalInfo = values.additionalInfo;

        if (!values.additionalInfo && data.additionalInfo) {
            additionalInfo = data.additionalInfo;
        }

        try {
            if (data.balance >= totalAmount) {
                const body = {
                    customerId: id,
                    email: email || currentAccount.email,
                    password: password || currentAccount.password,
                    totalAmount,
                    items: cartItems,
                    status: "payed",
                    existedAcc: selected,
                    additionalInfo
                };

                const { data: orderData } = await axios.post(`${url}/api/order/create`, body);

                if (orderData) {
                    navigate('/success-actived');
                    dispatch(clearCart())
                }
            } else {
                const { data: paymentData } = await axios.get(`${url}/api/payment/create-link?amount=${totalAmount}&invoiceId=${id}&description=Пополнение баланса на сумму ${totalAmount}`);

                if (paymentData && paymentData.paymentLink) {
                    navigate('/proceed-payment');
                    window.scrollTo({top: 0});
                    window.location.href = paymentData.paymentLink;
                } else {
                    console.error('Failed to fetch payment link.');
                }
            }
        } catch (error) {
            console.error('Error processing order or payment:', error);
        }
    };

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
                        <div className={s.selectBlock}>
                            <p className={s.headingText}>У Вас есть существующий аккаунт от необходимого
                                сервиса или его требуется зарегистрировать?</p>
                            <div className={s.select}>
                                <OwnSelect items={items} setSelected={setSelected}/>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {isAccountIncomplete && (
                                <>
                                    <div className={s.loginBlock}>
                                        <p className={s.headingText}>Логин для входа в необходимый сервис</p>
                                        <input
                                            {...register('email', { required: true })}
                                            type="text"
                                            placeholder="olivia@untitledui.com"
                                        />
                                        {errors.email && <p className={s.error}>Почта обязательна</p>}
                                        <p className={s.descr}>
                                            Введите почту, на которую зарегистрирован / необходимо зарегистрировать
                                            аккаунт в необходимом сервисе.
                                        </p>
                                    </div>
                                    <div className={s.loginBlock}>
                                        <p className={s.headingText}>Пароль для входа в необходимый сервис</p>
                                        <input
                                            {...register('password', { required: true })}
                                            type="password"
                                            placeholder="****"
                                        />
                                        {errors.password && <p className={s.error}>Пароль обязателен</p>}
                                        <p className={s.descr}>
                                            Введите пароль от аккаунта / для регистрации аккаунта в необходимом
                                            сервисе.
                                        </p>
                                    </div>
                                </>
                            )}
                            <div className={s.loginBlock}>
                                <p className={s.headingText}>
                                    Укажите дополнительную информацию, которая нам может быть необходима для
                                    активации подписки
                                </p>
                                <input {...register('additionalInfo')} placeholder="Вход через Apple, Google и т.д."/>
                                <p className={s.descr}>
                                    К примеру, вход в аккаунт сервиса выполняется через определённую соц.сеть.
                                    Если же доп.информация не нужна, оставьте поле пустым.
                                </p>
                            </div>
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