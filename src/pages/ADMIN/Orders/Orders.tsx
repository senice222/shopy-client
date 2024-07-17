import React, {useState} from 'react';
import AdminLayout from "../../../layouts/AdminLayout";
import style from '../Users/Users.module.scss'
import BackTick from "../../../components/ADMIN/BackTick/BackTick";
import {AdminModal} from "../../../components/Modals/AdminModal/AdminModal";
import {UserMessageModal} from "../../../components/Modals/AdminModals/UserMessageModal/UserMessageModal";
import {AddBalance} from "../../../components/Modals/AdminModals/AddBalance/AddBalance";

const Orders = () => {
    const [active, setActive] = useState(false)
    const [isAddBalance, setAddBalance] = useState(false)
    const [users, setUsers] = useState([
        {id: 3066, name: 'Иван', nick: '@shopymg', product: 'Product', date: "21.12.23 13:44", statusClass: 'inactive'},
        {id: 3065, name: 'Иван', nick: '@shopymg', product: 'Product', date: "21.12.23 13:44", statusClass: 'active'},
        {id: 3064, name: 'Иван', nick: '@shopymg', product: 'Product', date: "21.12.23 13:44", statusClass: 'active'},
        {id: 3063, name: 'Иван', nick: '@shopymg', product: 'Product', date: "21.12.23 13:44", statusClass: 'active'},
        {id: 3062, name: 'Иван', nick: '@shopymg', product: 'Product', date: "21.12.23 13:44", statusClass: 'blocked'},
        {id: 3061, name: 'Иван', nick: '@shopymg', product: 'Product', date: "21.12.23 13:44", statusClass: 'active'},
        {id: 3061, name: 'Иван', nick: '@shopymg', product: 'Product', date: "21.12.23 13:44", statusClass: 'active'},
        {id: 3061, name: 'Иван', nick: '@shopymg', product: 'Product', date: "21.12.23 13:44", statusClass: 'active'},
        {id: 3061, name: 'Иван', nick: '@shopymg', product: 'Product', date: "21.12.23 13:44", statusClass: 'active'},
        {id: 3061, name: 'Иван', nick: '@shopymg', product: 'Product', date: "21.12.23 13:44", statusClass: 'active'},
    ]);

    return (

            <div className={style.users}>
                <UserMessageModal isOpen={active} setOpen={() => setActive((prev) => !prev)}/>
                <AddBalance setOpen={() => setAddBalance((prev) => !prev)} isOpened={isAddBalance}/>
                {/*<SendMessage promoActive={active} onClose={() => setActive(!active)} />*/}
                <BackTick title={"Заказы"} to={"/panel"}/>
                <h2 className={style.title}>Заказы</h2>
                <div className={style.listOfUsers}>
                    <div>
                        <p>Всего заказов</p>
                        <div className={style.wrapp}>
                            <h2>4,862</h2>
                            <p className={style.amount}>5,444,315₽</p>
                        </div>
                    </div>
                    <div>
                        <p>Заказов за месяц</p>
                        <div className={style.wrapp}>
                            <h2>2,671</h2>
                            <p className={style.amount}>5,444,315₽</p>
                        </div>
                    </div>
                    <div>
                        <p>Заказов за сегодня</p>
                        <div className={style.wrapp}>
                            <h2>132</h2>
                            <p className={style.amount}>5,444,315₽</p>
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
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>#{user.id}</td>
                                <td>{user.name} <br/> <p>{user.nick}</p></td>
                                <td>{user.product}</td>
                                <td>{user.date}</td>
                                <td><span className={style[user.statusClass]}>{user.statusClass}</span></td>
                                <td>
                                    <span className={style.icon}>👤</span>
                                    <span onClick={() => setActive(true)} className={style.icon}>💬</span>
                                    <span onClick={() => setAddBalance(true)} className={style.icon}>➕</span>
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
