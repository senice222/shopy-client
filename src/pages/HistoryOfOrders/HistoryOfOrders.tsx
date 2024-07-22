import React, { FC, useEffect } from 'react'
import style from './HistoryOfOrders.module.scss'
import Layout from '../../layouts/Layout'
import { useNavigate } from "react-router-dom";
import { useTelegram } from "../../hooks/useTelegram";
import { UserProps } from '../../interfaces/User'
import HistoryItem from './HistoryItem'
import nothing from "../../assets/Illustrationnothing.png";
import BlueButton from "../../components/Button/Button";

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
                            <div className={style.nothingYet}>
                                <img src={nothing} alt="/"/>
                                <h2>Пока что тут ничего нет</h2>
                                <p>Как только вы оформите заказ, он отобразится здесь. Если заказ не отобразился, обратитесь в поддержку.</p>
                                <div>
                                    <BlueButton text={"Написать в поддержку"} height={"48px"} width={"100%"} />
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </Layout>
        </div>
    )
}

export default HistoryOfOrders