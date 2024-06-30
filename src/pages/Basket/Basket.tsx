import React from 'react';
import style from './Basket.module.scss'
import Layout from "../../layouts/Layout";
import BasketItem, {BasketProps} from "./BasketItem/BasketItem";
import PromoInput from "../../components/PromoInput/PromoInput";
import Button from "../../components/Button/Button";
import TopItem from "../../components/TopItem/TopItem";
import {useNavigate} from "react-router-dom";
import useSWR from "swr";
import {fetcher, url} from "../../core/fetch";
import {useTelegram} from "../../hooks/useTelegram";

const Basket = () => {
    const navigate = useNavigate()
    const {id} = useTelegram()
    const { data, error } = useSWR(`${url}/api/user/cart/${id}`, fetcher);
    alert(data.toString())
    return (
        <div className={style.wrapp}>
            <Layout isRightArrow={true}>
                <div className={style.basketContainer}>
                    <TopItem text={"Корзина"}/>
                    {id ? id : "НЕТУ НАХУЙ"}
                    <div className={style.items}>
                        {data?.length > 0 ? (
                            data.map((item: BasketProps, i: number) => (
                                <BasketItem
                                    key={i}
                                    main={item.main}
                                    optional={item.optional}
                                />
                            ))
                        ) : (
                            <div>pusto</div>
                        )}
                    </div>
                    <PromoInput/>
                    <div className={style.bonusRubles}>
                        <h2>После оплаты заказа вы получите 30 бонусных рублей</h2>
                        <p>Они начислятся на баланс и ими можно будет оплатить до 100% суммы следующих заказов.</p>
                    </div>
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
                            <Button height={"48px"} width={"100%"} fontSize={"18px"} text={"Перейти к оплате"} letterSpacing={"0.4px"}/>
                        </div>
                        <div className={style.activateInfo}>
                            <p>Активировать аккаунт вы сможете сразу после оплаты</p>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Basket;
