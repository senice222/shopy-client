import style from './Basket.module.scss'
import Layout from "../../layouts/Layout";
import BasketItem, {BasketProps} from "./BasketItem/BasketItem";
import PromoInput from "../../components/PromoInput/PromoInput";
import Button from "../../components/Button/Button";
import TopItem from "../../components/TopItem/TopItem";
import {useNavigate} from "react-router-dom";
import { useAppSelector } from '../../hooks/redux-hooks';
import {useTelegram} from "../../hooks/useTelegram";
import useSWR from "swr";
import {fetcher, url} from "../../core/fetch";
import axios from "axios";

const Basket = () => {
    const navigate = useNavigate()
    const items = useAppSelector((state: any) => state.cart.items);
    const totalAmount = items?.reduce((acc: number, curr: any) => acc += curr.main.price ,0)
    const {id} = useTelegram()
    const {data} = useSWR(`${url}/api/user/${id}`, fetcher)

    const handlePayment = async () => {
        if (data.balance >= totalAmount) {
            const body = {
                customerId: id,
                items,
                status: "payed"
            }
            const {data} = await axios.post(`${url}/api/order/create`, body)
            if (data) {
                navigate('/success')
            }
        } else {
            navigate("/proceed-payment")
            const {data} = await axios.get(`${url}/api/payment/create-link?amount=${totalAmount}&invoiceId=${id}&description=Пополнение баланса на сумму ${totalAmount}`)
            if (!data) return null;
            window.scrollTo({ top: 0});
            window.location.href = data.paymentLink;
        }
    }

    return (
        <div className={style.wrapp}>
            <Layout isRightArrow={true}>
                <div className={style.basketContainer}>
                    <TopItem text={"Корзина"}/>
                    <div className={style.items}>
                        {items?.length > 0 ? (
                            items.map((item: BasketProps, i: number) => (
                                <BasketItem
                                    key={i}
                                    id={item.id}
                                    main={item.main}
                                    optional={item.optional}
                                />
                            ))
                        ) : (
                            <div>pusto</div>
                        )}
                    </div>
                    {
                        items?.length > 0 && (
                            <>
                                <PromoInput/>
                                <div className={style.bonusRubles}>
                                    <h2>После оплаты заказа вы получите 30 бонусных рублей</h2>
                                    <p>Они начислятся на баланс и ими можно будет оплатить до 100% суммы следующих заказов.</p>
                                </div>
                                <div>
                                    <div className={style.totalItems}>
                                        <p>Стоимость товаров</p>
                                        <h2>{totalAmount}₽</h2>
                                    </div>
                                    <div className={style.skidka}>
                                        <p>Скидка (-20%):</p>
                                        <h2>-39₽</h2>
                                    </div>
                                    <div className={style.toPay}>
                                        <p>Итого к оплате: </p>
                                        <h2>{totalAmount}₽</h2>
                                    </div>
                                </div>
                                <div className={style.paymentButton}>
                                    <div style={{width: "100%"}} onClick={handlePayment}>
                                        <Button height={"48px"} width={"100%"} fontSize={"18px"} text={"Перейти к оплате"} letterSpacing={"0.4px"}/>
                                    </div>
                                    <div className={style.activateInfo}>
                                        <p>Активировать аккаунт вы сможете сразу после оплаты</p>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </Layout>
        </div>
    );
};

export default Basket;
