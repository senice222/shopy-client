import {FC, useEffect, useState} from "react";
import s from './BurgerMenu.module.scss'
import Header from "../Navbar/Navbar";
import {BurgerMenuI} from "../../interfaces/BurgerI";
import Footer from "../Footer/Footer";
import {PromoModal} from "../Modals/PromoModal/PromoModal";
import {DoDepModal} from "../Modals/DoDepModal/DoDepModal";
import {NotFindModal} from "../Modals/NotFindModal/NotFindModal";
import {useNavigate} from "react-router-dom";
import CashBackModal from "../Modals/CashBackModal/CashBackModal";
import {Emoji, Sale, Bookmark, Calendar, Clock, Users, HelpCircle, Message, Search} from "./Svgs";
import {useTelegram} from "../../hooks/useTelegram";
import IsActiveOrder from "./IsActiveOrder/IsActiveOrder";
import {useCurrentUser} from "../../context/UserContext";
import Loader from "../Loader/Loader";
import useSWR from "swr";
import {fetcher, url} from "../../core/fetch";
import {Order} from "../../interfaces/User";

const BurgerMenu: FC<BurgerMenuI> = ({isOpened, setOpened}) => {
    const [isPromo, setPromo] = useState<boolean>(false)
    const [topUp, setTopUp] = useState<boolean>(false)
    const [notFind, setNotFind] = useState<boolean>(false)
    const [cashback, setCashback] = useState<boolean>(false)
    const navigate = useNavigate()
    const {id} = useTelegram()
    const currentUser = useCurrentUser() as any;
    const {data} = useSWR(`${url}/api/active-orders/878990615`, fetcher)

    useEffect(() => {
        if (isOpened) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpened]);

    if (!currentUser || !data) return <Loader />
    const activeAccounts = data.filter((item: Order) => item.status === "in work")

    return (
        isOpened ? <div className={`${s.burger} 'openned`}>
            <NotFindModal setBurger={setOpened} isOpen={notFind} onClose={() => setNotFind(false)}/>
            <DoDepModal setBurger={setOpened} isOpen={topUp} onClose={() => setTopUp(false)}/>
            <PromoModal setBurger={setOpened} promoActive={isPromo} onClose={
                () => {
                    setPromo(false)
                }
            }/>
            <CashBackModal cashback={cashback} onClose={() => setCashback(!cashback)}/>
            <div className={s.header1Div}>
                <Header isCross={isOpened} setOpened={setOpened}/>
            </div>
            <div className={s.contentWrapper}>
                <div className={s.content}>
                    <div className={s.headerDiv}>
                        <div className={s.svg}><Emoji/></div>
                        <h3>Доброе утро, {currentUser?.username}!</h3>
                    </div>
                    {activeAccounts[0] && <IsActiveOrder order={activeAccounts[0]} />}
                    <div className={s.popolnit}>
                        <div className={s.leftDiv}>
                            <p>Баланс</p>
                            <h3>{currentUser?.balance} ₽</h3>
                        </div>
                        <button onClick={() => setTopUp(true)}>+ Пополнить</button>
                    </div>
                    <div className={s.cashbackDiv} onClick={() => setCashback(true)}>
                        <div>
                            <p>Процент кэшбека</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={17}
                                viewBox="0 0 16 17"
                                fill="none"
                            >
                                <path
                                    d="M6.05998 6.49992C6.21672 6.05436 6.52608 5.67866 6.93328 5.43934C7.34048 5.20002 7.81924 5.11254 8.28476 5.19239C8.75028 5.27224 9.17252 5.51427 9.4767 5.8756C9.78087 6.23694 9.94735 6.69427 9.94665 7.16659C9.94665 8.49992 7.94665 9.16659 7.94665 9.16659M7.99998 11.8333H8.00665M14.6666 8.49992C14.6666 12.1818 11.6819 15.1666 7.99998 15.1666C4.31808 15.1666 1.33331 12.1818 1.33331 8.49992C1.33331 4.81802 4.31808 1.83325 7.99998 1.83325C11.6819 1.83325 14.6666 4.81802 14.6666 8.49992Z"
                                    stroke="#98A2B3"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <p>
                            0%
                        </p>
                    </div>
                    <div onClick={() => setPromo(!isPromo)} className={s.block}>
                        <div className={s.icon}>
                            <div className={s.svg1}><Sale/></div>
                        </div>
                        <p>Активировать промокод </p>
                    </div>

                    <div className={s.hrDiv}>
                        <h2>Личный кабинет</h2>
                    </div>

                    <div className={s.block} onClick={() => navigate("/active-accounts")}>
                        <div className={s.icon}>
                            <div className={s.svg1}><Bookmark/></div>
                        </div>
                        <p>Сохраненные аккаунты</p>
                    </div>
                    <div className={s.block} onClick={() => navigate("/active-subscriptions")}>
                        <div className={s.icon}>
                            <div className={s.svg1}><Calendar/></div>
                        </div>
                        <p>Активные подписки</p>
                    </div>
                    <div className={s.block} onClick={() => navigate("/history-of-orders")}>
                        <div className={s.icon}>
                            <div className={s.svg1}><Clock/></div>
                        </div>
                        <p >История заказов</p>
                    </div>
                    <div className={s.block} onClick={() => navigate("/referral")}>
                        <div className={s.icon}>
                            <div className={s.svg1}><Users/></div>
                        </div>
                        <p>Реферальная система</p>
                    </div>
                    <div className={s.hrDiv}>
                        <h2>Помощь</h2>
                    </div>
                    <div className={s.block}>
                        <div className={s.icon}>
                            <div className={s.svg1}><HelpCircle/></div>
                        </div>
                        <p>Справочный центр</p>
                    </div>
                    <div className={s.block}>
                        <div className={s.icon}>
                            <div className={s.svg1}><Message/></div>
                        </div>
                        <p>Обратится в поддержку</p>
                    </div>
                    <div onClick={() => setNotFind(!notFind)} className={s.block}>
                        <div className={s.icon}>
                            <div className={s.svg1}><Search/></div>
                        </div>
                        <p>Не нашли, то что искали?</p>
                    </div>

                </div>
            </div>
            <Footer/>
        </div> : null
    )
}

export default BurgerMenu