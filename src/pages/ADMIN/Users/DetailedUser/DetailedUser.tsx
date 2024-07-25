import React, {useState} from 'react';
import AdminLayout from "../../../../layouts/AdminLayout";
import BackTick from "../../../../components/ADMIN/BackTick/BackTick";
import style from './DetailedUser.module.scss'
import lock from '../../../../assets/lock-01232.png'
import BlueButton from "../../../../components/Button/Button";
import UserInfo from "../../../../components/ADMIN/UserInfo/UserInfo";
import ProfileActions from "../../../../components/ADMIN/ProfileActions/ProfileActions";
import Button from "../../../../components/Button/Button";
import info from "../../../../assets/info-circle.png";
import edit from "../../../../assets/edit-02.png";
import {useParams} from "react-router-dom";
import useSWR from "swr";
import {fetcher, url} from "../../../../core/fetch";
import Loader from "../../../../components/Loader/Loader";
import {User} from "../../../../interfaces/User";
import {UserMessageModal} from "../../../../components/Modals/AdminModals/UserMessage/UserMessageModal";
import {AddBalance} from "../../../../components/Modals/AdminModals/AddBalance/AddBalance";
import ChangeCashbackModal from "../../../../components/Modals/AdminModals/Change/ChangeCashbackModal/ChangeCashbackModal";
import ChangeReferralModal
    from "../../../../components/Modals/AdminModals/Change/ChangeReferralModal/ChangeReferralModal";

const DetailedUser = () => {
    const lastUsers = [
        {name: 'Olivia Rhye', status: '✔ Paid', id: '1000103230'},
        {name: 'Olivia Rhye', status: '✔ Paid', id: '1000103230'},
        {name: 'Olivia Rhye', status: '✔ Paid', id: '1000103230'},
        {name: 'Olivia Rhye', status: '✔ Paid', id: '1000103230'},
        {name: 'Olivia Rhye', status: '✔ Paid', id: '1000103230'},
        {name: 'Olivia Rhye', status: '✔ Paid', id: '1000103230'},
        {name: 'Olivia Rhye', status: '✔ Paid', id: '1000103230'},
        {name: 'Olivia Rhye', status: '✔ Paid', id: '1000103230'},
        {name: 'Olivia Rhye', status: '✔ Paid', id: '1000103230'},
        {name: 'Olivia Rhye', status: '✔ Paid', id: '1000103230'},
        {name: 'Olivia Rhye', status: '✔ Paid', id: '1000103230'},
        {name: 'Olivia Rhye', status: '✔ Paid', id: '1000103230'},
        {name: 'Olivia Rhye', status: '✔ Paid', id: '1000103230'},
        {name: 'Olivia Rhye', status: '✔ Paid', id: '1000103230'},
        {name: 'Olivia Rhye', status: '✔ Paid', id: '1000103230'},
        {name: 'Olivia Rhye', status: '✔ Paid', id: '1000103230'},
        {name: 'Olivia Rhye', status: '✔ Paid', id: '1000103230'},
    ];
    const [active, setActive] = useState<boolean>(false)
    const [isAddBalance, setAddBalance] = useState<boolean>(false)
    const [cashback, setCashBack] = useState<boolean>(false)
    const [referral, setReferral] = useState<boolean>(false)
    const {username} = useParams()
    const {data: user} = useSWR<User>(`${url}/api/user/username/${username}`, fetcher)
    const totalAmount = user?.orderIds.reduce((acc, curr) => acc += curr.totalAmount, 0)

    if (!user) return <Loader />

    return (
            <div className={style.wrapper}>
                <UserMessageModal id={user.id} isOpen={active} setOpen={() => setActive((prev) => !prev)}/>
                <AddBalance id={user.id} setOpen={() => setAddBalance((prev) => !prev)} isOpened={isAddBalance} />
                <ChangeCashbackModal id={user.id} username={username} cashback={cashback} setCashBack={() => setCashBack((prev) => !prev)} />
                <ChangeReferralModal id={user.id} username={username} referral={referral} setReferral={() => setReferral((prev) => !prev)} />

                <BackTick title={"Пользователи"} to={"/panel"} nestedTitle={`@${user.username}`} nestedTo={`/panel/users/@${user.username}`} />
                <div className={style.userHeader}>
                    <h2 className={style.username}>@{user.username}</h2>
                    <div className={style.btns}>
                        <button className={style.blockBtn}>
                            <img src={lock} alt={'/'} />
                            <p>Заблокировать</p>
                        </button>
                        <button className={style.editBtn} onClick={() => setAddBalance(true)}>
                            Изменить баланс
                        </button>
                        <div onClick={() => setActive(true)}>
                            <BlueButton text={"Написать сообщение"} height={"40px"} width={"181px"} fontSize={"14px"} />
                        </div>
                    </div>
                </div>
                <div className={style.statsContainer}>
                    <div className={style.statItem}>
                        <h3>Баланс пользователя</h3>
                        <p>{user.balance}₽</p>
                    </div>
                    <div className={style.statItem}>
                        <h3>Всего заказов</h3>
                        <p>{user.orderIds.length}</p>
                    </div>
                    <div className={style.statItem}>
                        <h3>Покупок на сумму</h3>
                        <p>{totalAmount}₽</p>
                    </div>
                    <div className={style.statItem}>
                        <h3>Процент кэшбека</h3>
                        <p>{user.cashbackPercent}%</p>
                    </div>
                    <div className={style.statItem}>
                        <h3>Реферальный процент</h3>
                        <p>{user.refPercent}%</p>
                    </div>
                </div>
                <UserInfo user={user} />
                <ProfileActions
                    setMessage={setActive}
                    setAddBalance={setAddBalance}
                    setCashBack={setCashBack}
                    setReferral={setReferral}
                />
                <div className={style.lastOrders}>
                    <div className={style.orderHeader}>
                        <h2>Последние заказы</h2>
                        <Button text={"Перейти"} height={"40px"} width={"92px"} fontSize={"14px"}/>
                    </div>
                    <div className={style.container}>
                        <div className={style.scrollContainer}>
                            <table className={style.ordersTable}>
                                <thead>
                                <tr>
                                    <th>Заказ</th>
                                    <th>Товар</th>
                                    <th>Статус</th>
                                    <th>Действия</th>
                                </tr>
                                </thead>
                                <tbody>
                                {lastUsers.map((order, index) => (
                                    <tr key={index}>
                                        <td className={style.id}>{order.name}</td>
                                        <td className={style.status}>
                                            <div className={style.wrapperPaid}>
                                                <div className={style.paid}>{order.status}</div>
                                            </div>
                                        </td>
                                        <td>{order.id}</td>
                                        <td className={style.actions}>
                                            <div>
                                                        <span className={style.info}>
                                                            <img src={info} alt={'/'}/>
                                                        </span>
                                                <span className={style.edit}>
                                                            <img src={edit} alt={"/"}/>
                                                        </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default DetailedUser;
