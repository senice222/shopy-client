import style from './Sidebar.module.scss'
import logo from '../../../assets/Logomark.png'
import home from '../../../assets/home-line.png'
import users from '../../../assets/users-01.png'
import bag from '../../../assets/shopping-bag-02.png'
import orders from '../../../assets/receipt.png'
import rassylka from '../../../assets/message-text-square-01.png'


const Sidebar = () => {

    return (
        <div className={style.sidebar}>
            <img src={logo} alt="/"/>
            <div className={style.items}>
                <div className={style.item}>
                    <img src={home} alt="/"/>
                    <h2>Панель управления</h2>
                </div>
                <div className={style.itemNotActive}>
                    <img src={users} alt="/"/>
                    <h2>Пользователи</h2>
                </div>
                <div className={style.itemNotActive}>
                    <img src={bag} alt="/"/>
                    <h2>Категории и товары</h2>
                </div>
                <div className={style.itemNotActive}>
                    <img src={orders} alt="/"/>
                    <h2>Заказы</h2>
                </div>
                <div className={style.itemNotActive}>
                    <img src={rassylka} alt="/"/>
                    <h2>Рассылка</h2>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
