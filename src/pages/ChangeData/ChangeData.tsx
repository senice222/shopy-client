import s from './ChangeData.module.scss'
import Layout from '../../layouts/Layout'
import BlueButton from '../../components/Button/Button'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {Input} from "antd";
import {useNavigate} from "react-router-dom";
import {useTelegram} from "../../hooks/useTelegram";
import {useEffect} from "react";

const ChangeData = () => {
    const navigate = useNavigate()
    const { onBackButtonClick } = useTelegram();

    useEffect(() => {
        onBackButtonClick(() => navigate('/'));

        return () => {
            onBackButtonClick(null);
        };
    }, [onBackButtonClick, navigate]);

    return (
        <div className={s.background}>
            <Layout isRightArrow={true}>
                <div className={s.wrapper}>
                    <div className={s.content}>
                        <div className={s.firstBlock}>
                            <h2>Изменение данных от аккаунта Spotify</h2>
                            <p className={s.desk}>Заказ №212343456</p>
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
                                            <rect width={12} height={12} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p>Все данные надёжно защищены</p>
                            </div>
                        </div>
                        <div className={s.steps}>
                            <div className={s.stepBlock}>
                                <div className={s.left}>
                                    <div className={s.circle}>
                                        <div className={s.circleCont}></div>
                                    </div>
                                    <div className={s.vertLine}></div>
                                </div>
                                <div className={s.rightDiv}>
                                    <h2>Включите VPN любого региона</h2>
                                    <p>Это потребуется для входа на сайт Spotify</p>
                                </div>
                            </div>
                            <div className={s.stepBlock}>
                                <div className={s.left}>
                                    <div className={s.circle}>
                                        <div className={s.circleCont}></div>
                                    </div>
                                    <div className={s.vertLine}></div>
                                </div>
                                <div className={s.rightDiv}>
                                    <h2>Перейдите на сайт Spotify для смены пароля</h2>
                                    <button>Открыть в браузере</button>
                                    <p>Если перейти не получается, вставьте ссылку <span>https://accounts.spotify.com/en/password-reset</span> в адресную строку вашего браузера</p>
                                </div>
                            </div>
                            <div className={s.stepBlock}>
                                <div className={s.left}>
                                    <div className={s.circle}>
                                        <div className={s.circleCont}></div>
                                    </div>
                                    <div className={s.vertLine}></div>
                                </div>
                                <div className={s.rightDiv}>
                                    <h2>В открывешмся окне введите вашу почту от аккаунта</h2>
                                    <div className={s.copyDiv}>
                                        <div className={s.data}>me@mshopy.ru</div>
                                        <div className={s.copyBtn}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={20}
                                                height={20}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M4.16675 12.5003C3.39018 12.5003 3.00189 12.5003 2.69561 12.3735C2.28723 12.2043 1.96277 11.8798 1.79362 11.4715C1.66675 11.1652 1.66675 10.7769 1.66675 10.0003V4.33366C1.66675 3.40024 1.66675 2.93353 1.8484 2.57701C2.00819 2.2634 2.26316 2.00844 2.57676 1.84865C2.93328 1.66699 3.39999 1.66699 4.33341 1.66699H10.0001C10.7767 1.66699 11.1649 1.66699 11.4712 1.79386C11.8796 1.96302 12.2041 2.28747 12.3732 2.69585C12.5001 3.00214 12.5001 3.39042 12.5001 4.16699M10.1667 18.3337H15.6667C16.6002 18.3337 17.0669 18.3337 17.4234 18.152C17.737 17.9922 17.992 17.7372 18.1518 17.4236C18.3334 17.0671 18.3334 16.6004 18.3334 15.667V10.167C18.3334 9.23357 18.3334 8.76686 18.1518 8.41034C17.992 8.09674 17.737 7.84177 17.4234 7.68198C17.0669 7.50033 16.6002 7.50033 15.6667 7.50033H10.1667C9.23333 7.50033 8.76662 7.50033 8.4101 7.68198C8.09649 7.84177 7.84153 8.09674 7.68174 8.41034C7.50008 8.76686 7.50008 9.23357 7.50008 10.167V15.667C7.50008 16.6004 7.50008 17.0671 7.68174 17.4236C7.84153 17.7372 8.09649 17.9922 8.4101 18.152C8.76662 18.3337 9.23333 18.3337 10.1667 18.3337Z"
                                                    stroke="#475467"
                                                    strokeWidth="1.66667"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>

                                        </div>
                                    </div>
                                    <p>Если перейти не получается, вставьте ссылку <span>https://accounts.spotify.com/en/password-reset</span> в адресную строку вашего браузера</p>
                                </div>
                            </div>
                            <div className={s.stepBlock}>
                                <div className={s.left}>
                                    <div className={s.circle}>
                                        <div className={s.circleCont}></div>
                                    </div>
                                    <div className={s.vertLine}></div>
                                </div>
                                <div className={s.rightDiv}>
                                    <h2>Перейдите в почту и откройте ссылку из письма от Spotify</h2>
                                    <p>Если письмо не пришло, проверьте папку СПАМ.</p>
                                </div>
                            </div>
                            <div className={s.stepBlock}>
                                <div className={s.left}>
                                    <div className={s.circle}>
                                        <div className={s.circleCont}></div>
                                    </div>
                                    <div className={s.vertLine}></div>
                                </div>
                                <div className={s.rightDiv}>
                                    <h2>Установите новый пароль на аккаунт</h2>
                                </div>
                            </div>
                            <div className={s.stepBlock}>
                                <div className={s.left}>
                                    <div className={s.circle}>
                                        <div className={s.circleCont}></div>
                                    </div>
                                </div>
                                <div className={s.rightDiv}>
                                    <h2>Введите новые данные в поле ниже</h2>
                                </div>
                            </div>
                            <div className={s.loginBlock}>
                                <p className={s.headingText}>Пароль для входа в необходимый сервис</p>
                                {/* <input type={'password'} placeholder={'****'} /> */}
                                <Input.Password
                                    className={s.input}
                                    value={"your password"}
                                    placeholder="****"
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                                <p className={s.descr}>
                                    Введите пароль от аккаунта / для регистрации аккаунта в необходимом сервисе.                         </p>
                            </div>
                            <div className={s.btns}>
                                <BlueButton fontSize='16px' width='100%' height={'44px'} text='Изменить пароль' />
                                <button className={s.second}>Написать в поддержку</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default ChangeData