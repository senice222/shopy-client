import style from './DetailedOrder.module.scss'
import Layout from "../../../layouts/Layout";
import React from "react";
import spotify from "../../../assets/svg/Spotify.svg";
import Button from "../../../components/Button/Button";

const DetailedOrder = () => {

    return (
        <div className={style.historyWrapp}>
            <Layout isRightArrow={true}>
                <div className={style.wrappedOrder}>
                    <div className={style.historyTitle}>
                        <h2>Заказ №212343456</h2>
                    </div>
                    <div className={style.detailedInfo}>
                        <p className={style.date}>Создан 12.12.2003 в 21:32</p>
                        <div className={style.status}>
                            <p>Статус:</p>
                            <div>
                                <p>В работе</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.subscriptionContainer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={32}
                            viewBox="0 0 32 32"
                            fill="none"
                        >
                            <circle cx={16} cy={16} r={14} fill="#1ED760" />
                            <path
                                d="M22.3643 21.623C22.1252 22.0025 21.6149 22.1087 21.2163 21.881C18.075 20.0593 14.1364 19.6494 9.48023 20.6514C9.03375 20.7425 8.58728 20.4844 8.4916 20.0593C8.39593 19.6343 8.667 19.2092 9.11348 19.1181C14.2002 18.0099 18.5693 18.4805 22.0773 20.5299C22.476 20.7576 22.6035 21.2434 22.3643 21.623ZM23.9908 18.1617C23.6878 18.6323 23.05 18.769 22.5557 18.4957C18.9679 16.3856 13.4985 15.7783 9.25699 17.008C8.6989 17.1598 8.12485 16.8714 7.96539 16.3552C7.80594 15.8239 8.1089 15.2774 8.667 15.1256C13.5145 13.7289 19.542 14.3969 23.6719 16.8106C24.1343 17.0839 24.2938 17.6911 23.9908 18.1617ZM24.1343 14.5487C19.829 12.1197 12.7332 11.892 8.61917 13.0761C7.96539 13.2735 7.26378 12.9243 7.05649 12.2867C6.8492 11.6643 7.23189 10.9964 7.88567 10.799C12.6056 9.43274 20.4509 9.70599 25.394 12.4993C25.984 12.8332 26.1754 13.5619 25.8246 14.1236C25.4897 14.7005 24.7243 14.8978 24.1343 14.5487Z"
                                fill="white"
                            />
                        </svg>
                        <div>
                            <h2>Подписка будет активирована на аккаунт</h2>
                            <p>mail@mshopy.ru</p>
                        </div>
                    </div>
                    <div className={style.changeDataText}>
                        <p>Изменить данные для активации можно <span>через поддержку</span></p>
                    </div>
                    <div className={style.item}>
                        <img src={spotify} alt="/" />
                        <div className={style.container}>
                            <div className={style.infoWrapper}>
                                <h2>Spotify Premium</h2>
                                <div>
                                    <p>План: Индивидуальный</p>
                                    <p>Длительность: 1 месяц</p>
                                </div>
                                <h2>399₽</h2>
                            </div>
                        </div>
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
                    <div style={{width: "100%", marginTop: "25px"}}>
                        <Button text={"Написать в поддержку"} width={"100%"} height={"48px"} />
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default DetailedOrder;
