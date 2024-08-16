import React, { FC, useState } from 'react';
import styles from './UserInfo.module.scss';
import { User, UserProps } from "../../../interfaces/User";
import { format, formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';
import Loader from "../../Loader/Loader";
import { Popover, Button, Menu } from 'antd';

enum UserStatus {
    Active = 'Активен',
    Blocked = 'Заблокирован',
    Inactive = 'Неактивен',
}

const UserInfo: FC<UserProps> = ({ user }) => {
    const [visible, setVisible] = useState(false);

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

    const handleVisibleChange = (newVisible: boolean) => {
        setVisible(newVisible);
    };

    const handleStatusChange = (status: any) => {
        console.log(status)
        setVisible(false);
    };

    const menu = (
        <Menu>
            {Object.values(UserStatus).map((status) => (
                <Menu.Item key={status} onClick={() => handleStatusChange(status)}>
                    {status}
                </Menu.Item>
            ))}
        </Menu>
    );


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
                    <Popover
                        content={menu}
                        placement="bottom"
                        trigger="hover"
                        visible={visible}
                        onVisibleChange={handleVisibleChange}
                    >
                        <div className={styles.statusActive} >
                            {user.status}
                        </div>
                    </Popover>
                    {/* <div className={styles.statusActive}>{user.status}</div> */}
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
