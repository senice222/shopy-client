import React, {useEffect} from 'react'
import style from './HistoryOfOrders.module.scss'
import Layout from '../../layouts/Layout'
import spotify64 from '../../assets/spotify64x64.png'
import featured from '../../assets/featured.png'
import Button from "../../components/Button/Button";
import {useNavigate} from "react-router-dom";
import {useTelegram} from "../../hooks/useTelegram";

const HistoryOfOrders = () => {
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
            <Layout isRightArrow={true}>
                <div className={style.wrapperOfHistory}>
                    <div className={style.historyTitle}>
                        <h2>История заказов</h2>
                        <p>Здесь находятся все заказы, которые вы <br/> оформили через Shopy.</p>
                    </div>
                    <div className={style.orderItems}>
                        <div className={style.orderWrapper}>
                            <div className={style.orderTitle}>
                                <div>
                                    <img src={featured} alt="/"/>
                                    <h2>Заказ №212343456</h2>
                                </div>
                                <div className={style.statusDivBought}>
                                    <p>Оплачен</p>
                                </div>
                            </div>
                            <div className={style.bottomSide}>
                                <img src={spotify64} alt="/"/>
                                <div>
                                    <p>Сумма:</p>
                                    <h2>399₽</h2>
                                </div>
                                <div className={style.btnDiv}>
                                    <button className={style.repeatOrder}>Повторить заказ</button>
                                    <div style={{width: "100%"}} onClick={() => navigate("/history-of-orders/1")}>
                                        <Button text={"Подробнее"} width={"100%"} height={"40px"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.orderWrapper}>
                            <div className={style.orderTitle}>
                                <div>
                                    <img src={featured} alt="/"/>
                                    <h2>Заказ №212343456</h2>
                                </div>
                                <div className={style.statusDivCancel}>
                                    <p>Отменён</p>
                                </div>
                            </div>
                            <div className={style.bottomSide}>
                                <img src={spotify64} alt="/"/>
                                <div>
                                    <p>Сумма:</p>
                                    <h2>399₽</h2>
                                </div>
                                <div className={style.btnDiv}>
                                    <Button text={"Подробнее"} width={"100%"} height={"40px"}/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Layout>
        </div>
    )
}

export default HistoryOfOrders