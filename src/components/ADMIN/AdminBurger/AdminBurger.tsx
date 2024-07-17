import style from './AdminBurger.module.scss'
import logo from '../../../assets/Logomark.png'
import home from '../../../assets/home-line.png'
import users from '../../../assets/users-01.png'
import user from '../../../assets/user-01.png'
import bag from '../../../assets/shopping-bag-02.png'
import orders from '../../../assets/receipt.png'
import rassylka from '../../../assets/message-text-square-01.png'
import settings from '../../../assets/settings-01.png'
import logout from '../../../assets/log-out-01.png'
import {useNavigate} from "react-router-dom";
import {FC} from "react";
import {Cross} from "../../Modals/AdminModal/Svgs";

interface AdminBurgerI {
    isActive: boolean,
    setActive: () => void
}
const AdminBurger : FC<AdminBurgerI> = ({isActive, setActive}) => {
    const navigate = useNavigate()
    return (
        <>
            <div onClick={setActive} className={`${style.bg} ${isActive ? style.bgActive : ""}`}>
                <Cross />
            </div>
            <div className={`${style.sidebar} ${isActive ? style.sideActive : ""}`}>
                <div>
                    <img src={logo} alt="/"/>
                    <div className={style.items}>
                        <div onClick={() => {
                            setActive()
                            navigate('/panel')
                        }} className={style.item}>
                            <img src={home} alt="/"/>
                            <h2>Панель управления</h2>
                        </div>
                        <div onClick={() => {
                            setActive()
                            navigate('/panel/users')

                        }} className={style.itemNotActive}>
                            <img src={users} alt="/"/>
                            <h2>Пользователи</h2>
                        </div>
                        <div onClick={() => {
                            setActive()
                            navigate('/panel/categoriesAndProducts')
                        }} className={style.itemNotActive}>
                            <img src={bag} alt="/"/>
                            <h2>Категории и товары</h2>
                        </div>
                        <div className={style.itemNotActive} onClick={() => {
                            setActive()
                            navigate('/panel/orders')
                        }}>
                            <img src={orders} alt="/"/>
                            <h2>Заказы</h2>
                        </div>
                        <div className={style.itemNotActive} onClick={() => {
                            setActive()
                            navigate('/panel/newsletter')
                        }}>
                            <img src={rassylka} alt="/"/>
                            <h2>Рассылка</h2>
                        </div>
                    </div>
                </div>
                <div className={style.settings}>
                    <div className={style.itemSettings}>
                        <img src={settings} alt={"/"}/>
                        <p>Настройки</p>
                    </div>
                    <div className={style.admin}>
                        <div className={style.circle}>
                            <img src={user} alt="/"/>
                        </div>
                        <div className={style.info}>
                            <div>
                                <h2>Admin</h2>
                                <p>@mshopybot</p>
                            </div>
                            <img src={logout} alt={"/"}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminBurger;
