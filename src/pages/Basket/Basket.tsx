import style from './Basket.module.scss'
import Layout from "../../layouts/Layout";
import BasketItem, { BasketProps } from "./BasketItem/BasketItem";
import PromoInput from "../../components/PromoInput/PromoInput";
import Button from "../../components/Button/Button";
import TopItem from "../../components/TopItem/TopItem";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from '../../hooks/redux-hooks';
import styles from "../FavoriteProducts/FavoriteProducts.module.scss";
import nothing from "../../assets/Illustrationnothing.png";
import BlueButton from "../../components/Button/Button";
import { useMemo } from 'react';
import { CartItem } from '../../store/features/cartSlice';

const Basket = () => {
    const items = useAppSelector((state: any) => state.cart.items)
    const totalAmount = useMemo(() => {
        return items?.reduce((acc: number, curr: CartItem) => acc + (curr.main?.price || 0), 0)
    }, [items])
    const originalAmount = useMemo(() => {
        return items?.reduce((acc: number, curr: CartItem) => acc + (curr.main?.originalPrice || curr.main?.price || 0), 0)
    }, [items])
    const totalDiscount = useMemo(() => originalAmount - totalAmount, [originalAmount, totalAmount])
    const navigate = useNavigate()

    const handlePayment = async () => {
        navigate(`/activation/${items[0].main.id}/${items[0].variantId}`)
    }

    return (
        <div className={style.wrapp}>
            <Layout>
                <div className={style.basketContainer}>
                    <TopItem text={"Корзина"} />
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
                            <div className={styles.nothingYet}>
                                <img src={nothing} alt="/" />
                                <h2>Пока что тут ничего нет</h2>
                                <p>Нажимайте на кнопку "Добавить в корзину" в товаре. Он отобразится здесь.</p>
                                <div onClick={() => navigate('/')}>
                                    <BlueButton text={"Перейти в каталог"} height={"48px"} width={"100%"} />
                                </div>
                            </div>
                        )}
                    </div>
                    {
                        items?.length > 0 && (
                            <>
                                <PromoInput />
                                <div className={style.bonusRubles}>
                                    <h2>После оплаты заказа вы получите 30 бонусных рублей</h2>
                                    <p>Они начислятся на баланс и ими можно будет оплатить до 100% суммы следующих заказов.</p>
                                </div>
                                <div>
                                    <div className={style.totalItems}>
                                        <p>Стоимость товаров</p>
                                        <h2>{originalAmount}₽</h2>
                                    </div>
                                    {totalDiscount > 0 && (
                                        <div className={style.skidka}>
                                            <p>Скидка</p>
                                            <h2>-{totalDiscount}₽</h2>
                                        </div>
                                    )}
                                    <div className={style.toPay}>
                                        <p>Итого к оплате:</p>
                                        <h2>{totalAmount}₽</h2>
                                    </div>
                                </div>
                                <div className={style.paymentButton}>
                                    <div style={{ width: "100%" }} onClick={handlePayment}>
                                        <Button height={"48px"} width={"100%"} fontSize={"18px"} text={"Перейти к оплате"} letterSpacing={"0.4px"} />
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
