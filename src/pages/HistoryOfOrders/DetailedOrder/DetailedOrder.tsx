import style from './DetailedOrder.module.scss'
import Layout from "../../../layouts/Layout";
import React from "react";

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
                </div>
            </Layout>
        </div>
    );
};

export default DetailedOrder;
