import s from './SubscribeActivate.module.scss'
import Layout from "../../layouts/Layout";
import lock from "../../assets/lock-02.png";
import {useState} from "react";
import {OwnSelect} from "../../components/OwnSelect/OwnSelect";
import {CheckBox} from "../../components/CheckBox/CheckBox";

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
    return (
        <div className={s.background}>
            <Layout isRightArrow={true}>
                <div className={s.activationWrapper}>
                    <div className={s.firstBlock}>
                        <h2>Активация подписки</h2>
                        <div className={s.security}>
                            <img src={lock} alt="/"/>
                            <p>Все данные надёжно защищены</p>
                        </div>
                    </div>
                    <div className={s.selectBlock}>
                        <p className={s.headingText}>У Вас есть существующий аккаунт от необходимого сервиса или его требуется зарегистрировать?</p>
                        <div className={s.select}>
                            <OwnSelect items={items} setSelected={setSelected}/>
                        </div>
                    </div>
                    <div className={s.loginBlock}>
                        <p className={s.headingText}>Логин для входа в необходимый сервис</p>
                        <input placeholder={'olivia@untitledui.com'}/>
                        <p className={s.descr}>
                            Введите почту, на которую зарегистрирован / необходимо зарегистрировать аккаунт в необходимом сервисе.
                        </p>
                    </div>
                    <div className={s.loginBlock}>
                        <p className={s.headingText}>Пароль для входа в необходимый сервис</p>
                        <input type={'password'} placeholder={'****'}/>
                        <p className={s.descr}>
                            Введите пароль от аккаунта / для регистрации аккаунта в необходимом сервисе.                         </p>
                    </div>
                    <div className={s.loginBlock}>
                        <p className={s.headingText}>
                            Укажите дополнительную информацию, которая нам может быть необходима для активации подписки
                        </p>
                        <input placeholder={'Вход через Apple, Google и т.д.'}/>
                        <p className={s.descr}>
                            К примеру, вход в аккаунт сервиса выполняется через определённую соц.сеть. Если же доп.информация не нужна, оставьте поле пустым.</p>
                    </div>
                    <div className={s.saveDataBlock}>
                        <div className={s.topDiv}>
                            <CheckBox setChecked={setIsSave}/>
                            <h3>Cохранить данные</h3>
                        </div>
                        <p>Мы сохраним эти данные в вашем профиле, чтобы в следующий раз вам не приходилось их вводить</p>
                    </div>
                    <button className={s.blueBtn}>Активировать аккаунт</button>
                </div>
            </Layout>
        </div>
    )
}