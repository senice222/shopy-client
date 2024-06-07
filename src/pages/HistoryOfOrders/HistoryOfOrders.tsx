import React from 'react'
import style from './HistoryOfOrders.module.scss'
import Layout from '../../layouts/Layout'

const HistoryOfOrders = () => {
    return (
        <Layout isRightArrow={true}>
            <div className={style.wrapperOfHistory}>
                <div className={style.historyTitle}>
                    <h2>История заказов</h2>
                    <p></p>
                </div>
            </div>
        </Layout>
    )
}

export default HistoryOfOrders