import style from './AddAccountModal.module.scss'
import './antd.scss'
import BootstrapModal from "../../BootstrapModal/BootstrapModal";
import spotify from '../../../../assets/spotify.png'
import yt from '../../../../assets/youtube.png'
import netflix from '../../../../assets/netflix.png'
import {Input, Select} from "antd";
import {useEffect, useRef, useState} from "react";
import BlueButton from "../../../Button/Button";
import lock from "../../../../assets/lock-02.png";
import {useForm, Controller, SubmitHandler, FieldValues} from 'react-hook-form';
import {useSWRConfig} from "swr";
import {fetcher, url} from "../../../../core/fetch";
import {useTelegram} from "../../../../hooks/useTelegram";
import {imgs} from "../../../../utils/imgs";
import MobileDetect from "mobile-detect";
import useFocusAnimation from '../../../../hooks/useFocusAnimation';

interface AccountProps {
    addAccount: boolean;
    onClose: () => void;
}

const { Option } = Select;

const AddAccountModal = ({addAccount, onClose}: AccountProps) => {
    const [selected, setSelected] = useState<string>('');
    const { control, handleSubmit, formState: { errors } } = useForm();
    const {mutate} = useSWRConfig()
    const {id} = useTelegram()
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const md = new MobileDetect(window.navigator.userAgent);
    const inputRef = useRef<HTMLFormElement | null>(null);
    const isMobileDevice = md.mobile();
    useFocusAnimation(inputRef, ".AddAccountModal_input__s1CqQ", isMobileDevice, setIsFocused)

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const img = imgs[data.service]
        const withImg = {
            ...data,
            image: img
        }
        try {
            mutate(`${url}/api/user/account/${id}`, fetcher(`${url}/api/user/account/${id}`, {
                method: "POST",
                body: JSON.stringify(withImg),
                headers: {
                    'Content-Type': 'application/json'
                }
            }));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (value: string) => {
        setSelected(value);
    };

    return (
        <BootstrapModal Y={-60} isFocused={isFocused} onClose={onClose} active={addAccount}>
            <div className={style.modalWinPopupHead}>
                <h3>Добавить аккаунт</h3>
                <svg
                    onClick={onClose}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ cursor: 'pointer' }}
                >
                    <path
                        d="M18 6L6 18M6 6L18 18"
                        stroke="#98A2B3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <form className={style.form} onSubmit={handleSubmit(onSubmit)} ref={inputRef}>
                <div className={style.item}>
                    <p className={style.title}>Сервис</p>
                    <Controller
                        name="service"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Выберите сервис' }}
                        render={({ field }) => (
                            <Select
                                {...field}
                                className={style.select}
                                onChange={(value) => field.onChange(value)}
                            >
                                <Option value={'Spotify'} className={style.option}>
                                    <div className={style.selectItem}>
                                        <img src={spotify} alt="/" />
                                        <p>Spotify</p>
                                    </div>
                                </Option>
                                <Option value={'Netflix'} className={style.option}>
                                    <div className={style.selectItem}>
                                        <img src={netflix} alt="/" />
                                        <p>Netflix</p>
                                    </div>
                                </Option>
                            </Select>
                        )}
                    />
                    {errors.service && <p className={style.error}>{(errors.service.message as string) || 'Error'}</p>}
                </div>

                <div className={style.item}>
                    <p className={style.title}>Почта или логин</p>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Введите почту или логин' }}
                        render={({ field }) => (
                            <Input
                                {...field}
                                className={style.input}
                                placeholder="olivia@mshopy.ru"
                            />
                        )}
                    />
                    {errors.email && <p className={style.error}>{(errors.email.message as string) || 'Error'}</p>}
                </div>

                <div className={style.item}>
                    <p className={style.title}>Пароль</p>
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Введите пароль' }}
                        render={({ field }) => (
                            <Input
                                {...field}
                                className={style.input}
                                placeholder="*******"
                                type="password"
                            />
                        )}
                    />
                    {errors.password && <p className={style.error}>{(errors.password.message as string) || 'Error'}</p>}
                </div>

                <div style={{ width: "100%", marginTop: "20px" }}>
                    <BlueButton text={"Добавить"} height={"44px"} width={"100%"} />
                </div>
            </form>
            <div className={style.securityDiv}>
                <div className={style.security}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                    >
                        <g clipPath="url(#clip0_1227_23788)">
                            <path
                                d="M8.5 5.5V4C8.5 2.61929 7.38071 1.5 6 1.5C4.61929 1.5 3.5 2.61929 3.5 4V5.5M3.9 10.5H8.1C8.94008 10.5 9.36012 10.5 9.68099 10.3365C9.96323 10.1927 10.1927 9.96323 10.3365 9.68099C10.5 9.36012 10.5 8.94008 10.5 8.1V7.9C10.5 7.05992 10.5 6.63988 10.3365 6.31901C10.1927 6.03677 9.96323 5.8073 9.68099 5.66349C9.36012 5.5 8.94008 5.5 8.1 5.5H3.9C3.05992 5.5 2.63988 5.5 2.31901 5.66349C2.03677 5.8073 1.8073 6.03677 1.66349 6.31901C1.5 6.63988 1.5 7.05992 1.5 7.9V8.1C1.5 8.94008 1.5 9.36012 1.66349 9.68099C1.8073 9.96323 2.03677 10.1927 2.31901 10.3365C2.63988 10.5 3.05992 10.5 3.9 10.5Z"
                                stroke="#17B26A"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_1227_23788">
                                <rect width={12} height={12} fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <p>Все данные надёжно защищены</p>
                </div>
            </div>
        </BootstrapModal>
    );
};

export default AddAccountModal;
