import style from './ActivateAccounts.module.scss'
import Layout from "../../layouts/Layout";
import lock from '../../assets/lock-02.png'
import nothing from '../../assets/Illustrationnothing.png'
import dots from '../../assets/dots-vertical.png'
import Button from "../../components/Button/Button";
import {useState} from "react";
import AddAccountModal from "../../components/Modals/Accounts/AddAccountModal/AddAccountModal";
import EditAccountModal from "../../components/Modals/Accounts/EditAccountModal/EditAccountModal";
import useSWR from "swr";
import {fetcher, url} from "../../core/fetch";
import {useTelegram} from "../../hooks/useTelegram";
import {SavedAccount} from "../../interfaces/User";

const ActivateAccounts = () => {
    const [addAccount, setAddAccount] = useState<boolean>(false)
    const [editAccount, setEditAccount] = useState<boolean>(false)
    const {id} = useTelegram()
    const [selectedAccountId, setSelectedAccountId] = useState<string>('');
    const {data} = useSWR(`${url}/api/user/account/878990615`, fetcher)

    return (
        <div className={style.wrapp}>
            <Layout>
                <AddAccountModal addAccount={addAccount} onClose={() => setAddAccount(false)}/>
                <EditAccountModal active={editAccount} onClose={() => setEditAccount(false)} selectedAccountId={selectedAccountId} account={data} />
                <div className={style.subscrContainer}>
                    <div className={style.titleHeader}>
                        <h2 className={style.activateh2Text}>Сохранённые данные</h2>
                        <p className={style.descr}>Сохраняйте данные от ваших аккаунтов здесь, чтобы не заполнять их каждый раз при продлении.</p>
                        <div className={style.security}>
                            <img src={lock} alt="/"/>
                            <p className={style.securityP}>Все данные надёжно защищены</p>
                        </div>
                    </div>
                    <div className={style.nothingYet}>
                        {
                            (data && data?.length > 0) ? (
                                data.map((item: SavedAccount) => (
                                    <div className={style.item} onClick={() => {
                                        setSelectedAccountId(item.id);
                                        setEditAccount(true)
                                    }} key={item.id}>
                                        <div className={style.itemInfo}>
                                            <img src={`${url}/api/uploads/${item.image}`} alt=""/>
                                            <div>
                                                <h2>{item.service}</h2>
                                                <p>{item.email}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <img className={style.imgDots} src={dots} alt=""/>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <>
                                    <img src={nothing} alt="/"/>
                                    <h2>Пока что тут ничего нет</h2>
                                    <p>Нажмите на кнопку ниже, чтобы добавить данные от аккаунтов или сохраняйте их при покупке в корзине.</p>
                                </>
                            )
                        }
                        <div className={style.btnDiv} onClick={() => setAddAccount(true)}>
                            <Button letterSpacing={"0.5px"} text={"Добавить аккаунт"} height={"48px"} width={"100%"}/>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default ActivateAccounts;
