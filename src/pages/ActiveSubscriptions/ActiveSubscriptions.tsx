import style from './ActiveSubscriptions.module.scss'
import featured from "../../assets/featured.png";
import spotify64 from "../../assets/spotify64x64.png";
import Button from "../../components/Button/Button";
import React from "react";
import Layout from "../../layouts/Layout";

const ActiveSubscriptions = () => {
    return (
        <div className={style.historyWrapp}>
            <Layout isRightArrow={true}>
                <div className={style.wrapperOfHistory}>
                    <div className={style.historyTitle}>
                        <h2>Активные подписки</h2>
                        <p>Здесь находятся все активные подписки, которые вы <br/> оформили через Shopy.</p>
                    </div>
                    <div className={style.orderItems}>
                        <div className={style.orderWrapper}>
                            <div className={style.orderTitle}>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={32}
                                        height={32}
                                        viewBox="0 0 32 32"
                                        fill="none"
                                    >
                                        <circle cx={16} cy={16} r={14} fill="#1ED760"/>
                                        <path
                                            d="M22.3643 21.623C22.1252 22.0025 21.6149 22.1087 21.2163 21.881C18.075 20.0593 14.1364 19.6494 9.48023 20.6514C9.03375 20.7425 8.58728 20.4844 8.4916 20.0593C8.39593 19.6343 8.667 19.2092 9.11348 19.1181C14.2002 18.0099 18.5693 18.4805 22.0773 20.5299C22.476 20.7576 22.6035 21.2434 22.3643 21.623ZM23.9908 18.1617C23.6878 18.6323 23.05 18.769 22.5557 18.4957C18.9679 16.3856 13.4985 15.7783 9.25699 17.008C8.6989 17.1598 8.12485 16.8714 7.96539 16.3552C7.80594 15.8239 8.1089 15.2774 8.667 15.1256C13.5145 13.7289 19.542 14.3969 23.6719 16.8106C24.1343 17.0839 24.2938 17.6911 23.9908 18.1617ZM24.1343 14.5487C19.829 12.1197 12.7332 11.892 8.61917 13.0761C7.96539 13.2735 7.26378 12.9243 7.05649 12.2867C6.8492 11.6643 7.23189 10.9964 7.88567 10.799C12.6056 9.43274 20.4509 9.70599 25.394 12.4993C25.984 12.8332 26.1754 13.5619 25.8246 14.1236C25.4897 14.7005 24.7243 14.8978 24.1343 14.5487Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <h2>Spotify Premium</h2>
                                </div>
                            </div>
                            <div className={style.productInfo}>
                                <div className={style.status}>
                                    <p>Закончится через 30 дней</p>
                                </div>
                                <div className={style.amount}>
                                    <h2>399₽ </h2><p>в месяц</p>
                                </div>
                                <div className={style.data}>
                                    <p>Действует до 21.03.24</p>
                                </div>
                                <Button text={"Продлить"} height={"40px"} width={"100%"}/>
                            </div>
                        </div>
                        <div className={style.orderWrapper}>
                            <div className={style.orderTitle}>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={32}
                                        height={32}
                                        viewBox="0 0 32 32"
                                        fill="none"
                                    >
                                        <circle cx={16} cy={16} r={14} fill="#1ED760"/>
                                        <path
                                            d="M22.3643 21.623C22.1252 22.0025 21.6149 22.1087 21.2163 21.881C18.075 20.0593 14.1364 19.6494 9.48023 20.6514C9.03375 20.7425 8.58728 20.4844 8.4916 20.0593C8.39593 19.6343 8.667 19.2092 9.11348 19.1181C14.2002 18.0099 18.5693 18.4805 22.0773 20.5299C22.476 20.7576 22.6035 21.2434 22.3643 21.623ZM23.9908 18.1617C23.6878 18.6323 23.05 18.769 22.5557 18.4957C18.9679 16.3856 13.4985 15.7783 9.25699 17.008C8.6989 17.1598 8.12485 16.8714 7.96539 16.3552C7.80594 15.8239 8.1089 15.2774 8.667 15.1256C13.5145 13.7289 19.542 14.3969 23.6719 16.8106C24.1343 17.0839 24.2938 17.6911 23.9908 18.1617ZM24.1343 14.5487C19.829 12.1197 12.7332 11.892 8.61917 13.0761C7.96539 13.2735 7.26378 12.9243 7.05649 12.2867C6.8492 11.6643 7.23189 10.9964 7.88567 10.799C12.6056 9.43274 20.4509 9.70599 25.394 12.4993C25.984 12.8332 26.1754 13.5619 25.8246 14.1236C25.4897 14.7005 24.7243 14.8978 24.1343 14.5487Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <h2>Spotify Premium</h2>
                                </div>
                            </div>
                            <div className={style.productInfo}>
                                <div className={style.statusExpire}>
                                    <p>Закончится через 4 дня</p>
                                </div>
                                <div className={style.amount}>
                                    <h2>399₽ </h2><p>в месяц</p>
                                </div>
                                <div className={style.data}>
                                    <p>Действует до 21.03.24</p>
                                </div>
                                <Button text={"Продлить"} height={"40px"} width={"100%"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default ActiveSubscriptions;
