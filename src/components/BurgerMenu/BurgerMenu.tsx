import {FC, useEffect, useState} from "react";
import s from './BurgerMenu.module.scss'
import Header from "../Header/Header";
import {BurgerMenuI} from "../../interfaces/BurgerI";
import Footer from "../Footer/Footer";
import {PromoModal} from "../Modals/PromoModal/PromoModal";
import {DoDepModal} from "../Modals/DoDepModal/DoDepModal";
import {NotFindModal} from "../Modals/NotFindModal/NotFindModal";
import {useNavigate} from "react-router-dom";
import CashBackModal from "../Modals/CashBackModal/CashBackModal";
import { Emoji, Sale, Bookmark, Calendar, Clock, Users, HelpCircle, Message, Search } from "./Svgs";

const BurgerMenu: FC<BurgerMenuI> = ({isOpened, setOpened}) => {
        
    useEffect(() => {
        if (isOpened) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpened]);

    const [isPromo, setPromo] = useState<boolean>(false)
    const [topUp, setTopUp] = useState<boolean>(false)
    const [notFind, setNotFind] = useState<boolean>(false)
    const [cashback, setCashback] = useState<boolean>(false)
    const navigate = useNavigate()

    return (
        isOpened ? <div className={`${s.burger} 'openned`}>
            <NotFindModal setBurger={setOpened} isOpen={notFind} onClose={() => setNotFind(false)}/>
            <DoDepModal setBurger={setOpened} isOpen={topUp} onClose={() => setTopUp(false)}/>
            <PromoModal setBurger={setOpened} promoActive={isPromo} onClose={() => setPromo(false)}/>
            <CashBackModal cashback={cashback} onClose={() => setCashback(!cashback)}/>
            <div className={s.header1Div}><Header isCross={true} setOpened={setOpened}/></div>
            <div className={s.contentWrapper}>
                <div className={s.content}>
                    <div className={s.headerDiv}>
                        <div className={s.svg}><Emoji /></div>
                        <h3>Доброе утро, Иван!</h3>
                    </div>
                    <div className={s.popolnit}>
                        <div className={s.leftDiv}>
                            <p>Баланс</p>
                            <h3>399$</h3>
                        </div>
                        <button onClick={() => setTopUp(true)}>+ Пополнить</button>
                    </div>
                    <div className={s.cashbackDiv} onClick={() => setCashback(true)}>
                        <div>
                            <p>Процент кэшбека</p>
                        </div>
                        <p>
                            0%
                        </p>
                    </div>
                    <div onClick={() => setPromo(!isPromo)} className={s.block}>
                        <div className={s.icon}>
                            <div className={s.svg1}><Sale /></div>
                        </div>
                        <p>Активировать промокод </p>
                    </div>

                    <div className={s.hrDiv}>
                        <h2>Личный кабинет</h2>
                    </div>

                    <div className={s.block} onClick={() => navigate("/active-accounts")}>
                        <div className={s.icon}>
                        <div className={s.svg1}><Bookmark /></div>
                        </div>
                        <p>Сохраненные аккаунты</p>
                    </div>
                    <div className={s.block}>
                        <div className={s.icon}>
                            <div className={s.svg1}><Calendar /></div>
                        </div>
                        <p>Активные подписки</p>
                    </div>
                    <div className={s.block}>
                        <div className={s.icon}>
                        <div className={s.svg1}><Clock /></div>
                        </div>
                        <p onClick={() => navigate("/history-of-orders")}>История заказов</p>
                    </div>
                    <div className={s.block}>
                        <div className={s.icon}>
                            <div className={s.svg1}><Users /></div>
                        </div>
                        <p>Реферальная система </p>
                    </div>
                    <div className={s.hrDiv}>
                        <h2>Помощь</h2>
                    </div>
                    <div className={s.block}>
                        <div className={s.icon}>
                            <div className={s.svg1}><HelpCircle /></div>
                        </div>
                        <p>Справочный центр</p>
                    </div>
                    <div className={s.block}>
                        <div className={s.icon}>
                            <div className={s.svg1}><Message /></div>
                        </div>
                        <p>Обратится в поддержку</p>
                    </div>
                    <div onClick={() => setNotFind(!notFind)} className={s.block}>
                        <div className={s.icon}>
                            <div className={s.svg1}><Search /></div>
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