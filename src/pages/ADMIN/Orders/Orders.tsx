import React, {useState} from 'react';
import AdminLayout from "../../../layouts/AdminLayout";
import style from '../Users/Users.module.scss'
import BackTick from "../../../components/ADMIN/BackTick/BackTick";
import {AdminModal} from "../../../components/Modals/AdminModal/AdminModal";
import {UserMessageModal} from "../../../components/Modals/AdminModals/UserMessage/UserMessageModal";
import {AddBalance} from "../../../components/Modals/AdminModals/AddBalance/AddBalance";
import useSWR from "swr";
import {fetcher, url} from "../../../core/fetch";
import Loader from "../../../components/Loader/Loader";
import {Order} from "../../../interfaces/User";
import {format} from "date-fns";

const Orders = () => {
    const [active, setActive] = useState(false)
    const [isAddBalance, setAddBalance] = useState(false)
    const [id, setId] = useState<number>()
    const {data} = useSWR(`${url}/api/order`, fetcher)
    const totalAmount = data ? data.reduce((acc: number, curr: Order) => acc += curr.totalAmount, 0) : 0;

    if (!data) return <Loader />

    return (
        <div className={style.users}>
            {id && <UserMessageModal id={id} isOpen={active} setOpen={() => setActive((prev) => !prev)}/>}
            {id && <AddBalance id={id} setOpen={() => setAddBalance((prev) => !prev)} isOpened={isAddBalance}/>}
            {/*<SendMessage promoActive={active} onClose={() => setActive(!active)} />*/}
            <BackTick title={"Заказы"} to={"/panel"}/>
            <h2 className={style.title}>Заказы</h2>
            <div className={style.listOfUsers}>
                <div>
                    <p>Всего заказов</p>
                    <div className={style.wrapp}>
                        <h2>{data.length}</h2>
                        <p className={style.amount}>{totalAmount}₽</p>
                    </div>
                </div>
                <div>
                    <p>Заказов за месяц</p>
                    <div className={style.wrapp}>
                        <h2>2,671</h2>
                        <p className={style.amount}>{totalAmount}₽</p>
                    </div>
                </div>
                <div>
                    <p>Заказов за сегодня</p>
                    <div className={style.wrapp}>
                        <h2>132</h2>
                        <p className={style.amount}>{totalAmount}₽</p>
                    </div>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.topWrapper}>
                    <h2>Последние заказы</h2>
                    <div className={style.searchBar}>
                        <input type="text" placeholder="Поиск по номеру заказа"/>
                    </div>
                </div>
                <table className={style.usersTable}>
                    <thead>
                    <tr>
                        <th>Заказ</th>
                        <th>Покупатель</th>
                        <th>Товар</th>
                        <th>Дата покупки</th>
                        <th>Статус</th>
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((order: Order) => (
                        <tr key={order.customerId}>
                            <td>#{order._id}</td>
                            <td>{order.customerId}</td>
                            <td>{order.items[0].main.name}</td>
                            <td>{format(new Date(order.date), 'dd.MM.yyyy')}</td>
                            <td><span className={style[order.status]}>{order.status}</span></td>
                            <td>
                                <span className={style.icon} onClick={() => {
                                        setId(+order.customerId)
                                    }}>👤</span>
                                <span onClick={() => {
                                    setActive(true)
                                    setId(+order.customerId)
                                }} className={style.icon}>💬</span>
                                <span onClick={() => {
                                    setId(+order.customerId)
                                    setAddBalance(true)
                                }} className={style.icon}>➕</span>
                                <span className={style.icon}>🔒</span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Orders;
