import React, {useState} from 'react';
import style from './Users.module.scss'
import BackTick from "../../../components/ADMIN/BackTick/BackTick";
import {UserMessageModal} from "../../../components/Modals/AdminModals/UserMessage/UserMessageModal";
import {AddBalance} from "../../../components/Modals/AdminModals/AddBalance/AddBalance";
import useSWR from "swr";
import {fetcher, url} from "../../../core/fetch";
import Loader from "../../../components/Loader/Loader";
import {User} from "../../../interfaces/User";
import {useNavigate} from "react-router-dom";

const Users = () => {
    const [active, setActive] = useState(false)
    const [isAddBalance, setAddBalance] = useState(false)
    const {data: users} = useSWR(`${url}/api/users`, fetcher)
    const [id, setId] = useState<number>()
    const navigate = useNavigate()

    if (!users) return <Loader />

    return (

            <div className={style.users}>
                {id && <UserMessageModal id={id} isOpen={active} setOpen={() => setActive((prev) => !prev)}/>}
                {id && <AddBalance id={id} setOpen={() => setAddBalance((prev) => !prev)} isOpened={isAddBalance} />}
                {/*<SendMessage promoActive={active} onClose={() => setActive(!active)} />*/}
                <BackTick title={"Пользователи"} to={"/panel"} />
                <h2 className={style.title}>Пользователи</h2>
                <div className={style.listOfUsers}>
                    <div>
                        <p>Всего пользователей</p>
                        <h2>{users.length}</h2>
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
                        {!users ? (
                            <Loader />
                        ) : (
                            users.map((user: User) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td><span className={style[user.status]}>{user.status}</span></td>
                                    <td>{user.balance}₽</td>
                                    <td className={style.lastTd}>
                                        <span className={style.icon} onClick={() => navigate(`/panel/users/${user.username}`)}>👤</span>
                                        <span onClick={() => {
                                            setId(user.id);
                                            setActive(true);
                                        }} className={style.icon}>💬</span>
                                        <span onClick={() => {
                                            setId(user.id);
                                            setAddBalance(true);
                                        }} className={style.icon}>➕</span>
                                        <span className={style.icon}>🔒</span>
                                    </td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </div>
            </div>

    );
};

export default Users;
