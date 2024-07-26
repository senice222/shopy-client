import React from 'react';
import style from '../DetailedUser.module.scss';
import {Order} from "../../../../../interfaces/User";
import UserStatusPopover from "../UserPopover/UserPopover";
import info from "../../../../../assets/info-circle.png";
import edit from "../../../../../assets/edit-02.png";

interface OrderTableProps {
    orders: Order[];
    onStatusChange: (orderId: string, newStatus: string) => void;
}

const OrderTable: React.FC<OrderTableProps> = ({ orders, onStatusChange }) => {
    return (
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
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td className={style.id}>{order._id}</td>
                            <td className={style.id}>{order.items[0].main.name}</td>
                            <td className={style.status}>
                                <UserStatusPopover
                                    status={order.status}
                                    onStatusChange={(newStatus) => onStatusChange(order._id, newStatus)}
                                />
                            </td>
                            <td className={style.actions}>
                                <div>
                                        <span className={style.info}>
                                            <img src={info} alt="info" />
                                        </span>
                                    <span className={style.edit}>
                                            <img src={edit} alt="edit" />
                                        </span>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderTable;
