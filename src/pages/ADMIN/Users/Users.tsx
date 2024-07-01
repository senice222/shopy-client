import React, {useState} from 'react';
import AdminLayout from "../../../layouts/AdminLayout";
import style from './Users.module.scss'
import BackTick from "../../../components/ADMIN/BackTick/BackTick";
import {AdminModal} from "../../../components/Modals/AdminModal/AdminModal";
import {UserMessageModal} from "../../../components/Modals/AdminModals/UserMessageModal/UserMessageModal";

const Users = () => {
    const [active, setActive] = useState(false)
    const [users, setUsers] = useState([
        { id: 3066, name: 'Иван', nick: '@shopymg', status: 'Неактивен', balance: 399, statusClass: 'inactive' },
        { id: 3065, name: 'Иван', nick: '@shopymg', status: 'Активен', balance: 399, statusClass: 'active' },
        { id: 3064, name: 'Иван', nick: '@shopymg', status: 'Активен', balance: 399, statusClass: 'active' },
        { id: 3063, name: 'Иван', nick: '@shopymg', status: 'Активен', balance: 399, statusClass: 'active' },
        { id: 3062, name: 'Иван', nick: '@shopymg', status: 'Заблокирован', balance: 399, statusClass: 'blocked' },
        { id: 3061, name: 'Иван', nick: '@shopymg', status: 'Активен', balance: 399, statusClass: 'active' },
        { id: 3061, name: 'Иван', nick: '@shopymg', status: 'Активен', balance: 399, statusClass: 'active' },
        { id: 3061, name: 'Иван', nick: '@shopymg', status: 'Активен', balance: 399, statusClass: 'active' },
        { id: 3061, name: 'Иван', nick: '@shopymg', status: 'Активен', balance: 399, statusClass: 'active' },
        { id: 3061, name: 'Иван', nick: '@shopymg', status: 'Активен', balance: 399, statusClass: 'active' },
    ]);

    return (
        <AdminLayout>
            <div className={style.users}>
                <UserMessageModal isOpen={active} setOpen={() => setActive((prev) => !prev)}/>
                {/*<SendMessage promoActive={active} onClose={() => setActive(!active)} />*/}
                <BackTick title={"Пользователи"} to={"/panel"} />
                <h2 className={style.title}>Пользователи</h2>
                <div className={style.listOfUsers}>
                    <div>
                        <p>Всего пользователей</p>
                        <h2>4,862</h2>
                    </div>
                    <div>
                        <p>Активных пользователей</p>
                        <h2>2,671</h2>
                    </div>
                    <div>
                        <p>Пользователей за сегодня</p>
                        <h2>132</h2>
                    </div>
                </div>
                <div className={style.container}>
                    <div className={style.topWrapper}>
                        <h2>Пользователи</h2>
                        <div className={style.searchBar}>
                            <input type="text" placeholder="Поиск по нику" />
                        </div>
                    </div>
                    <table className={style.usersTable}>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ник</th>
                            <th>Статус</th>
                            <th>Баланс</th>
                            <th>Действия</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>#{user.id}</td>
                                <td>{user.name} <br /> <p>{user.nick}</p></td>
                                <td><span className={style[user.statusClass]}>{user.status}</span></td>
                                <td>{user.balance}₽</td>
                                <td>
                                    <span className={style.icon}>👤</span>
                                    <span onClick={() => setActive(true)} className={style.icon}>💬</span>
                                    <span className={style.icon}>➕</span>
                                    <span className={style.icon}>🔒</span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Users;
