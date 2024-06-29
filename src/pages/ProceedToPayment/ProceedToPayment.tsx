import React from 'react';
import style from './ProceedToPayment.module.scss'
import TopItem from "../../components/TopItem/TopItem";
import Layout from "../../layouts/Layout";

const ProceedToPayment = () => {
    return (
        <div className={style.wrapp}>
            <Layout>
                <div className={style.proceedContainer}>
                    <TopItem text={"Оформление заказа"} />
                    <div className={style.textDiv}>
                        <div className={style.border}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                <path d="M11.5 5V11L15.5 13M21.5 11C21.5 16.5228 17.0228 21 11.5 21C5.97715 21 1.5 16.5228 1.5 11C1.5 5.47715 5.97715 1 11.5 1C17.0228 1 21.5 5.47715 21.5 11Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className={style.wrapp}>
                            <h2>Переходим к оплате...</h2>
                            <p>Сейчас вы будете перенаправлены на страницу платежной системы.</p>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default ProceedToPayment;
