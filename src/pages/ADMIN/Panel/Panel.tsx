import AdminLayout from "../../../layouts/AdminLayout";
import style from './Panel.module.scss'
import FastMoves from "../../../components/ADMIN/FastMoves/FastMoves";
import Button from "../../../components/Button/Button";
import reverse from '../../../assets/reverse-left.png'
import info from '../../../assets/info-circle.png'
import edit from '../../../assets/edit-02.png'
import useSWR from "swr";
import { fetcher, url } from "../../../core/fetch";
import { Order, User } from "../../../interfaces/User";
import Loader from "../../../components/Loader/Loader";

const Panel = () => {
    const { data: lastUsers } = useSWR(`${url}/api/users`, fetcher)
    const {data: lastOrders} = useSWR(`${url}/api/order`, fetcher)

    if (!lastOrders && !lastUsers) return <Loader />

    return (
        <div className={style.panelWrapper}>
            <div className={style.header}>
                <h2>Панель управления</h2>
            </div>
            <div className={style.totalInfo}>
                <div className={style.info}>
                    <div>
                        <p>Всего пользователей</p>
                        <h2>{lastUsers?.length}</h2>
                    </div>
                    <div>
                        <p>Активных пользователей</p>
                        <h2>{lastUsers?.filter((item: User) => item.status === "Активен").length}</h2>
                    </div>
                    <div>
                        <p>Заказов за месяц</p>
                        <h2>{lastOrders?.length}</h2>
                    </div>
                </div>
                <FastMoves />
            </div>
            <div className={style.wrapper}>
                <div className={style.lastOrders}>
                    <div className={style.orderHeader}>
                        <h2>Последние заказы</h2>
                        <Button text={"Перейти"} height={"40px"} width={"92px"} fontSize={"14px"} />
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
                                    {lastOrders?.map((order: Order, index: number) => (
                                        <tr key={index}>
                                            <td className={style.id}>{order.normalOrderId}</td>
                                            <td className={style.id}>{order.items[0].main.name}</td>
                                            <td className={style.status}>
                                                <div className={style.wrapperPaid}>
                                                    <div className={style.paid}>{order.status}</div>
                                                </div>
                                            </td>
                                            <td className={style.actions}>
                                                <div>
                                                    <span className={style.info}>
                                                        <img src={info} alt={'/'} />
                                                    </span>
                                                    <span className={style.edit}>
                                                        <img src={edit} alt={"/"} />
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
                <div className={style.lastOrders}>
                    <div className={style.orderHeader}>
                        <h2>Последние пользователи</h2>
                        <Button text={"Перейти"} height={"40px"} width={"92px"} fontSize={"14px"} />
                    </div>
                    <div className={style.container}>
                        <div className={style.scrollContainer}>
                            <table className={style.ordersTable}>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Статус</th>
                                        <th>Id</th>
                                        <th>Действия</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {lastUsers?.map((user: User, index: number) => (
                                        <tr key={index}>
                                            <td className={style.id}>{user.username}</td>
                                            <td className={style.status}>
                                                <div className={style.wrapperPaid}>
                                                    <div className={style.paid}>{user.status}</div>
                                                </div>
                                            </td>
                                            <td>{user._id}</td>
                                            <td className={style.actions}>
                                                <div>
                                                    <span className={style.info}>
                                                        <img src={info} alt={'/'} />
                                                    </span>
                                                    <span className={style.edit}>
                                                        <img src={edit} alt={"/"} />
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
        </div>
    );
};

export default Panel;
