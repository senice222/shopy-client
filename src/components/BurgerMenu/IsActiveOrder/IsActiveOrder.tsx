import style from './IsActiveOrder.module.scss'
import detailed from '../../../assets/detailed.png'

const IsActiveOrder = () => {
    return (
        <div className={style.activeOrder}>
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