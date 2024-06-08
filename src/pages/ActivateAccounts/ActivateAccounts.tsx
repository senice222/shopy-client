import style from './ActivateAccounts.module.scss'
import Layout from "../../layouts/Layout";
import lock from '../../assets/lock-02.png'
import nothing from '../../assets/Illustrationnothing.png'
import Button from "../../components/Button/Button";
import {useState} from "react";
import AddAccount from "../../components/Modals/AddAccount/AddAccount";

const ActivateAccounts = () => {
    const [addAccount, setAddAccount] = useState(false)

    return (
        <Layout>
            <AddAccount addAccount={addAccount} onClose={() => setAddAccount(false)}/>
            <div className={style.subscrContainer}>
                <div className={style.titleHeader}>
                    <h2 className={style.activateh2Text}>Сохраненные аккаунты</h2>
                    <div className={style.security}>
                        <img src={lock} alt="/"/>
                        <p>Все данные надёжно защищены</p>
                    </div>
                </div>
                <div className={style.nothingYet}>
                    <img src={nothing} alt="/"/>
                    <h2>Пока что тут ничего нет</h2>
                    <p>Нажмите на кнопку ниже, чтобы добавить данные от аккаунтов или сохраняйте их при покупке в корзине.</p>
                    <div onClick={() => setAddAccount(true)}>
                        <Button text={"Добавить аккаунт"} height={"48px"} width={"100%"} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ActivateAccounts;
