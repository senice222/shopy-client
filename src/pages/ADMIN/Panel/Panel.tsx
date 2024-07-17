import AdminLayout from "../../../layouts/AdminLayout";
import style from './Panel.module.scss'
import FastMoves from "../../../components/ADMIN/FastMoves/FastMoves";
import Button from "../../../components/Button/Button";
import reverse from '../../../assets/reverse-left.png'
import info from '../../../assets/info-circle.png'
import edit from '../../../assets/edit-02.png'

const Panel = () => {
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
    const ordersData = [
        {orderId: '1001', product: 'Hoodie', status: '✔ Paid'},
        {orderId: '1002', product: 'T-shirt', status: '✔ Paid'},
        {orderId: '1003', product: 'Pants', status: '✔ Paid'},
        {orderId: '1004', product: 'Dress', status: '✔ Paid'},
        {orderId: '1005', product: 'Shoes', status: '✔ Paid'},
        {orderId: '1006', product: 'Hat', status: '✔ Paid'},
        {orderId: '1006', product: 'Hat', status: '✔ Paid'},
        {orderId: '1006', product: 'Hat', status: '✔ Paid'},
        {orderId: '1006', product: 'Hat', status: '✔ Paid'},
        {orderId: '1006', product: 'Hat', status: '✔ Paid'},
        {orderId: '1006', product: 'Hat', status: '✔ Paid'},
        {orderId: '1006', product: 'Hat', status: '✔ Paid'},
        {orderId: '1006', product: 'Hat', status: '✔ Paid'},
        {orderId: '1006', product: 'Hat', status: '✔ Paid'},
    ];

    return (

            <div className={style.panelWrapper}>
                <div className={style.header}>
                    <h2>Панель управления</h2>
                </div>
                <div className={style.totalInfo}>
                    <div className={style.info}>
                        <div>
                            <p>Всего пользователей</p>
                            <h2>4,862</h2>
                        </div>
                        <div>
                            <p>Активных пользователей</p>
                            <h2>2,671</h2>
                        </div>
                        <div>
                            <p>Заказов за месяц</p>
                            <h2>1,322</h2>
                        </div>
                    </div>
                    <FastMoves/>
                </div>
                <div className={style.wrapper}>
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
                    <div className={style.lastOrders}>
                        <div className={style.orderHeader}>
                            <h2>Последние пользователи</h2>
                            <Button text={"Перейти"} height={"40px"} width={"92px"} fontSize={"14px"}/>
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
                                    {ordersData.map((order, index) => (
                                        <tr key={index}>
                                            <td className={style.id}>{order.orderId}</td>
                                            <td>{order.product}</td>
                                            <td className={style.status}>
                                                <div className={style.wrapperPaid}>
                                                    <div className={style.paid}>{order.status}</div>
                                                </div>
                                            </td>
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
            </div>
    );
};

export default Panel;
