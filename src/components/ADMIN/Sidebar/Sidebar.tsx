import style from './Sidebar.module.scss'
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
import {useAppDispatch} from "../../../hooks/redux-hooks";
import {signOut} from "../../../store/features/AdminSlice";


const Sidebar = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return (
        <div className={style.sidebar}>
            <div>
                <img src={logo} alt="/"/>
                <div className={style.items}>
                    <div onClick={() => navigate('/panel')} className={style.item}>
                        <img src={home} alt="/"/>
                        <h2>Панель управления</h2>
                    </div>
                    <div onClick={() => navigate('/panel/users')} className={style.itemNotActive}>
                        <img src={users} alt="/"/>
                        <h2>Пользователи</h2>
                    </div>
                    <div onClick={() => navigate('/panel/categoriesAndProducts')} className={style.itemNotActive}>
                        <img src={bag} alt="/"/>
                        <h2>Категории и товары</h2>
                    </div>
                    <div className={style.itemNotActive} onClick={() => navigate('/panel/orders')}>
                        <img src={orders} alt="/"/>
                        <h2>Заказы</h2>
                    </div>
                    <div className={style.itemNotActive} onClick={() => navigate('/panel/newsletter')}>
                        <img src={rassylka} alt="/"/>
                        <h2>Рассылка</h2>
                    </div>
                </div>
            </div>
            <div className={style.settings}>
                <div onClick={() => navigate('/panel/settings')} className={style.itemSettings}>
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
                        <img onClick={() => {
                            dispatch(signOut())
                            navigate('/login')
                        }} src={logout} alt={"/"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
