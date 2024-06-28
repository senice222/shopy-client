import React from 'react';
import styles from './UserInfo.module.scss';

const UserInfo = () => {
    return (
        <div className={styles.userInfoContainer}>
            <h2>Основная информация</h2>
            <div className={styles.wrapp}>
                <div className={styles.infoItem}>
                    <span>ID пользователя</span>
                    <p>436746248</p>
                </div>
                <div className={styles.infoItem}>
                    <span>Количество рефералов</span>
                    <p>12</p>
                </div>
                <div className={styles.infoItem}>
                    <span>Статус</span>
                    <div className={styles.statusActive}>Активен</div>
                </div>
                <div className={styles.infoItem}>
                    <span>Реферальная ссылка</span>
                    <p><a href="https://t.me/mshopybot?start=r_21081585">https://t.me/mshopybot?start=r_21081585</a></p>
                </div>
                <div className={styles.items}>
                    <div className={styles.infoItem}>
                        <span>Время регистрации</span>
                        <p>21.12.2023 в 12:40 (30 дней назад)</p>
                    </div>
                    <div className={styles.infoItem}>
                        <span>Дата последнего заказа</span>
                        <p>21.12.2023 в 12:40 (30 дней назад)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
