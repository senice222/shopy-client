import style from './ActivateAccounts.module.scss'
import Layout from "../../layouts/Layout";
import lock from '../../assets/lock-02.png'
import nothing from '../../assets/Illustrationnothing.png'
import spotify48 from '../../assets/spotify48x48.png'
import dots from '../../assets/dots-vertical.png'
import Button from "../../components/Button/Button";
import {useState} from "react";
import AddAccountModal from "../../components/Modals/Accounts/AddAccountModal/AddAccountModal";
import EditAccountModal from "../../components/Modals/Accounts/EditAccountModal/EditAccountModal";

const ActivateAccounts = () => {
    const [addAccount, setAddAccount] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <Layout>
            <EditAccountModal active={isOpen} onClose={() => setIsOpen(false)} />
            <AddAccountModal addAccount={addAccount} onClose={() => setAddAccount(false)}/>
            <div className={style.subscrContainer}>
                <div className={style.titleHeader}>
                    <h2 className={style.activateh2Text}>Сохранённые данные</h2>
                    <div className={style.security}>
                        <img src={lock} alt="/"/>
                        <p>Все данные надёжно защищены</p>
                    </div>
                </div>
                <div className={style.nothingYet}>
                    {/*IF NO ACCOUNTS HERE*/}
                    {/*    <img src={nothing} alt="/"/>*/}
                    {/*    <h2>Пока что тут ничего нет</h2>*/}
                    {/*    <p>Нажмите на кнопку ниже, чтобы добавить данные от аккаунтов или сохраняйте их при покупке в корзине.</p>*/}
                    <div className={style.item}>
                        <div className={style.itemInfo}>
                            <img src={spotify48} alt="/"/>
                            <div>
                                <h2>Spotify</h2>
                                <p>mail@mshopy.ru</p>
                            </div>
                        </div>
                        <div onClick={() => setIsOpen(true)}>
                            <img className={style.imgDots} src={dots} alt=""/>
                        </div>
                    </div>
                    <div className={style.btnDiv} onClick={() => setAddAccount(true)}>
                        <Button text={"Добавить аккаунт"} height={"48px"} width={"100%"}/>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ActivateAccounts;
