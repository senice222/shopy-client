import style from './FastMoves.module.scss'
import users from "../../../assets/users-01.png";
import bag from "../../../assets/shopping-bag-02.png";
import orders from "../../../assets/receipt.png";
import rassylka from "../../../assets/message-text-square-01.png";
import {useNavigate} from "react-router-dom";

const FastMoves = () => {
    const navigate = useNavigate()

    return (
        <div className={style.fastMoves}>
            <h2 className={style.title}>Быстрые действия</h2>
            <div className={style.items}>
                <div className={style.item} onClick={() => navigate('/panel/users')}>
                    <div className={style.icon}>
                        <img src={users} alt="/"/>
                    </div>
                    <div className={style.users}>
                        <h2>Пользователи</h2>
                        <p>Список и управление пользователями</p>
                    </div>
                </div>
                {/*/*/}
                <div className={style.item} onClick={() => navigate('/panel/categoriesAndProducts')}>
                    <div className={style.icon}>
                        <img src={bag} alt="/"/>
                    </div>
                    <div className={style.users}>
                        <h2>Категории товаров</h2>
                        <p>Изменяйте и добавляйте товары</p>
                    </div>
                </div>
                {/*/*/}
                <div className={style.item} onClick={() => navigate('/panel/orders')}>
                    <div className={style.icon}>
                        <img src={orders} alt="/"/>
                    </div>
                    <div className={style.users}>
                        <h2>Заказы</h2>
                        <p>Список и управление заказами</p>
                    </div>
                </div>
                {/*/*/}
                <div className={style.item} onClick={() => navigate('/panel/newsletter')}>
                    <div className={style.icon}>
                        <img src={rassylka} alt="/"/>
                    </div>
                    <div className={style.users}>
                        <h2>Рассылки</h2>
                        <p>Создавайте и рассылайте сообщения</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FastMoves;
