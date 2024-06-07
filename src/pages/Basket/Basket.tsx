import React from 'react';
import style from './Basket.module.scss'
import Layout from "../../layouts/Layout";
import BasketItem from "./BasketItem/BasketItem";
import PromoInput from "../../components/PromoInput/PromoInput";
import Button from "../../components/Button/Button";
import TopItem from "../../components/TopItem/TopItem";
import {useNavigate} from "react-router-dom";

const Basket = () => {
    const navigate = useNavigate()

    return (
        <Layout isRightArrow={true}>
            <div className={style.basketContainer}>
                <TopItem text={"Корзина"}/>
                <div className={style.items}>
                    <BasketItem/>
                    <BasketItem/>
                    <BasketItem/>
                    <BasketItem/>
                </div>
                <PromoInput/>
                <div>
                    <div className={style.totalItems}>
                        <p>Стоимость товаров</p>
                        <h2>399₽</h2>
                    </div>
                    <div className={style.skidka}>
                        <p>Скидка (-20%):</p>
                        <h2>-39₽</h2>
                    </div>
                    <div className={style.toPay}>
                        <p>Итого к оплате: </p>
                        <h2>399₽</h2>
                    </div>
                </div>
                <div className={style.paymentButton}>
                    <div style={{width: "100%"}} onClick={() => navigate('/proceed-payment')}>
                        <Button height={"48px"} width={"100%"} fontSize={"18px"} text={"Оплатить заказ"}/>
                    </div>
                    <div className={style.activateInfo}>
                        <p>Активировать аккаунт вы сможете сразу после оплаты</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Basket;
