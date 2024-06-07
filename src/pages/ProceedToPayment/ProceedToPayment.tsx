import React from 'react';
import style from './ProceedToPayment.module.scss'
import TopItem from "../../components/TopItem/TopItem";
import Layout from "../../layouts/Layout";
import clock from '../../assets/svg/Featured icon.svg'
import Button from "../../components/Button/Button";

const ProceedToPayment = () => {
    return (
        <Layout>
            <div className={style.proceedContainer}>
                <TopItem text={"Оформление заказа"} />
                <div className={style.textDiv}>
                    <img src={clock} alt={'/'}/>
                    <div className={style.wrapp}>
                        <h2>Переходим к оплате...</h2>
                        <p>Сейчас вы будете перенаправлены на страницу платежной системы.</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProceedToPayment;
