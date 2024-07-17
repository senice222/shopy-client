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

    return (

            <div className={style.wrapper}>
                <BackTick title={"Пользователи"} to={"/panel"} nestedTitle={"@sasha"} nestedTo={"/panel/users/@sasha"} />
                <div className={style.userHeader}>
                    <h2 className={style.username}>@sasha</h2>
                    <div className={style.btns}>
                        <button className={style.blockBtn}>
                            <img src={lock} alt={'/'} />
                            <p>Заблокировать</p>
                        </button>
                        <button className={style.editBtn}>
                            Изменить баланс
                        </button>
                        <BlueButton text={"Написать сообщение"} height={"40px"} width={"181px"} fontSize={"14px"} />
                    </div>
                </div>
                <div className={style.statsContainer}>
                    <div className={style.statItem}>
                        <h3>Баланс пользователя</h3>
                        <p>0₽</p>
                    </div>
                    <div className={style.statItem}>
                        <h3>Всего заказов</h3>
                        <p>2</p>
                    </div>
                    <div className={style.statItem}>
                        <h3>Покупок на сумму</h3>
                        <p>2,671₽</p>
                    </div>
                    <div className={style.statItem}>
                        <h3>Процент кэшбека</h3>
                        <p>0₽</p>
                    </div>
                    <div className={style.statItem}>
                        <h3>Реферальный процент</h3>
                        <p>5%</p>
                    </div>
                </div>
                <UserInfo />
                <ProfileActions />
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
