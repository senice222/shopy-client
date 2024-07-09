import React, { FC, useEffect } from 'react'
import style from './HistoryOfOrders.module.scss'
import Layout from '../../layouts/Layout'
import { useNavigate } from "react-router-dom";
import { useTelegram } from "../../hooks/useTelegram";
import { UserProps } from '../../interfaces/User'
import HistoryItem from './HistoryItem'

const HistoryOfOrders: FC<UserProps> = ({ user }) => {
    const navigate = useNavigate()
    const { onBackButtonClick } = useTelegram();

    useEffect(() => {
        onBackButtonClick(() => navigate('/'));

        return () => {
            onBackButtonClick(null);
        };
    }, [onBackButtonClick, navigate]);

    return (    
        <div className={style.historyWrapp}>
            <Layout>
                <div className={style.wrapperOfHistory}>
                    <div className={style.historyTitle}>
                        <h2>История заказов</h2>
                        <p>Здесь находятся все заказы, которые вы <br /> оформили через Shopy.</p>
                    </div>
                    <div className={style.orderItems}>
                        {user?.orderIds.length > 0 ? (
                            user.orderIds.map((order, i) => (
                                <HistoryItem key={i} order={order} />
                            ))
                        ) : (
                            <p>No orders found.</p>
                        )}
                    </div>

                </div>
            </Layout>
        </div>
    )
}

export default HistoryOfOrders