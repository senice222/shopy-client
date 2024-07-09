import spotify64 from '../../assets/spotify64x64.png'
import featured from '../../assets/featured.png'
import Button from "../../components/Button/Button";
import style from './HistoryOfOrders.module.scss'
import { useNavigate } from "react-router-dom";
import { FC } from 'react';
import { OrderProps } from '../../interfaces/User';

const HistoryItem:FC<OrderProps> = ({order}) => {
    const navigate = useNavigate()
    console.log(order)

    const statuses = {
        "payed": {
            style: style.statusDivBought,
            text: "Оплачен"
        },
        "cancelled": {
            style: style.statusDivCancel,
            text: "Отменен"
        },
        "in work": {
            style: style.statusDivWork,
            text: "В работе"
        },
        "refund": {
            style: style.statusDivBought,
            text: "Возврат"
        }
    }
    const currentStatus = statuses[order.status]
    
    return (
        <div className={style.orderWrapper}>
            <div className={style.orderTitle}>
                <div>
                    <img src={featured} alt="/" />
                    <h2>Заказ №212343456</h2>
                </div>
                <div className={style.statusDivBought}>
                    <p>Оплачен</p>
                </div>
            </div>
            <div className={style.bottomSide}>
                <img src={spotify64} alt="/" />
                <div>
                    <p>Сумма:</p>
                    <h2>399₽</h2>
                </div>
                <div className={style.btnDiv}>
                    <button className={style.repeatOrder}>Повторить заказ</button>
                    <div style={{ width: "100%" }} onClick={() => navigate("/history-of-orders/1")}>
                        <Button text={"Подробнее"} width={"100%"} height={"40px"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HistoryItem