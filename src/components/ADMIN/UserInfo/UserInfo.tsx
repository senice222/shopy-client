import React, {FC} from 'react';
import styles from './UserInfo.module.scss';
import {User, UserProps} from "../../../interfaces/User";
import { format, formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';
import Loader from "../../Loader/Loader";

const UserInfo:FC<UserProps> = ({user}) => {

    if (!user) return <Loader />;

    const validateDate = (dateString: Date) => {
        const date = new Date(dateString);
        return !isNaN(date.getTime()) ? date : null;
    };

    const lastOrderDate = user.orderIds.length > 0
        ? validateDate(new Date(Math.max(...user.orderIds.map(order => new Date(order.date).getTime()))))
        : null;

    const userRegisterDate = validateDate(user.registered);

    const formattedLastOrderDate = lastOrderDate
        ? `${format(lastOrderDate, 'dd.MM.yyyy в HH:mm', { locale: ru })} (${formatDistanceToNow(lastOrderDate, { addSuffix: true, locale: ru })})`
        : 'Заказов нет';

    const formattedUserRegisterDate = userRegisterDate
        ? `${format(userRegisterDate, 'dd.MM.yyyy в HH:mm', { locale: ru })} (${formatDistanceToNow(userRegisterDate, { addSuffix: true, locale: ru })})`
        : 'Дата не указана';

    return (
        <div className={styles.userInfoContainer}>
            <h2>Основная информация</h2>
            <div className={styles.wrapp}>
                <div className={styles.infoItem}>
                    <span>ID пользователя</span>
                    <p>{user.id}</p>
                </div>
                <div className={styles.infoItem}>
                    <span>Количество рефералов</span>
                    <p>{user.amountRefs.length}</p>
                </div>
                <div className={styles.infoItem}>
                    <span>Статус</span>
                    <div className={styles.statusActive}>{user.status}</div>
                </div>
                <div className={styles.infoItem}>
                    <span>Реферальная ссылка</span>
                    <p><a href={user.refLink}>{user.refLink}</a></p>
                </div>
                <div className={styles.items}>
                    <div className={styles.infoItem}>
                        <span>Время регистрации</span>
                        <p>{formattedUserRegisterDate}</p>
                    </div>
                    <div className={styles.infoItem}>
                        <span>Дата последнего заказа</span>
                        <p>{formattedLastOrderDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
