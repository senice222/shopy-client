import s from './ChangeData.module.scss'
import Layout from '../../layouts/Layout'
import BlueButton from '../../components/Button/Button'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from "antd";
import { Lock, Mail } from '../../components/Svgs/Svgs';

const ChangeData = () => {

    return (
        <div className={s.background}>
            <Layout>
                <div className={s.wrapper}>
                    <div className={s.content}>
                        <div className={s.firstBlock}>
                            <h2>Изменение данных от аккаунта Spotify</h2>
                            <p className={s.desk}>Заказ №212343456</p>
                            <div className={s.security}>
                                <Lock />
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
                                            <Mail />
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
                                <Input.Password
                                    className={s.input}
                                    value={"your password"}
                                    placeholder="****"
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                                <p className={s.descr}>
                                    Введите пароль от аккаунта / для регистрации аккаунта в необходимом сервисе.
                                </p>
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