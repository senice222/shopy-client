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
import {Emoji, Sale, Bookmark, Calendar, Clock, Users, HelpCircle, Message, Search, Percent} from "./Svgs";
import IsActiveOrder from "./IsActiveOrder/IsActiveOrder";
import {useCurrentUser} from "../../context/UserContext";
import Loader from "../Loader/Loader";
import useSWR from "swr";
import {fetcher, url} from "../../core/fetch";
import {Order, User} from "../../interfaces/User";
import {feedbackManager} from "../../utils/feedbackManager";
import { useTelegram } from "../../hooks/useTelegram";

const BurgerMenu: FC<BurgerMenuI> = ({isOpened, setOpened}) => {
    const [isPromo, setPromo] = useState<boolean>(false)
    const [topUp, setTopUp] = useState<boolean>(false)
    const [notFind, setNotFind] = useState<boolean>(false)
    const [cashback, setCashback] = useState<boolean>(false)
    const navigate = useNavigate()
    const currentUser = useCurrentUser() as User;
    const {id} = useTelegram()
    const {data} = useSWR(`${url}/api/active-orders/878990615`, fetcher)

    useEffect(() => {
        if (isOpened) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpened]);

    if (!currentUser && !data) return <Loader />
    const activeAccounts = data ? data.filter((item: Order) => item.status === "in work") : []

    return (
        isOpened ? <div className={`${s.burger} 'openned`}>
            <NotFindModal setBurger={setOpened} isOpen={notFind} onClose={() => setNotFind(false)}/>
            <DoDepModal setBurger={setOpened} isOpen={topUp} onClose={() => setTopUp(false)}/>
            <PromoModal setBurger={setOpened} promoActive={isPromo} onClose={
                () => {
                    setPromo(false)
                }
            }/>
            <CashBackModal user={currentUser} cashback={cashback} onClose={() => setCashback(!cashback)}/>
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
                            <Percent />
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

                    <div className={s.block} onClick={() => {
                        navigate("/active-accounts")
                        setOpened()
                    }}>
                        <div className={s.icon}>
                            <div className={s.svg1}><Bookmark/></div>
                        </div>
                        <p>Сохраненные аккаунты</p>
                    </div>
                    <div className={s.block} onClick={() => {
                        navigate("/active-subscriptions")
                        setOpened()
                    }}>
                        <div className={s.icon}>
                            <div className={s.svg1}><Calendar/></div>
                        </div>
                        <p>Активные подписки</p>
                    </div>
                    <div className={s.block} onClick={() => {
                        navigate("/history-of-orders")
                        setOpened()
                    }}>
                        <div className={s.icon}>
                            <div className={s.svg1}><Clock/></div>
                        </div>
                        <p >История заказов</p>
                    </div>
                    <div className={s.block} onClick={() => {
                        navigate("/referral")
                        setOpened()
                    }}>
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
                    <div className={s.block} onClick={feedbackManager}>
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