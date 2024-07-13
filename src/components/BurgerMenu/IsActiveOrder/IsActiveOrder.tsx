import style from './IsActiveOrder.module.scss'
import detailed from '../../../assets/detailed.png'
import {FC} from "react";
import {OrderProps} from "../../../interfaces/User";
import {useNavigate} from "react-router-dom";

const IsActiveOrder:FC<OrderProps> = ({order}) => {
    const navigate = useNavigate()

    return (
        <div className={style.activeOrder} onClick={() => navigate(`/history-of-orders/${order._id}`)}>
            <div className={style.block}>
                <div className={style.textBlock}>
                    <p>У вас есть активный заказ</p>
                    <div className={style.inWork}>
                        <p>В работе</p>
                    </div>
                </div>
                <img src={detailed} alt="/" />
            </div>
        </div>
    )
}

export default IsActiveOrder