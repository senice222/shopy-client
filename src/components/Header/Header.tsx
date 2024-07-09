import styles from './Header.module.scss'
import {Link, useLocation, useNavigate} from "react-router-dom";
import {FC, useContext, useEffect, useState} from "react";
import {Cart, Home, Profile, SVGHeart} from "../Svgs/Svgs";
import rightArrow from '../../assets/svg/arrow-left.svg'
import {ThemeContext} from "../../context/ThemeContext";
import {Logo} from "./Logo";
import s from './Header2.module.scss'

interface HeaderI {
    setOpened: (bol : boolean) => void;
    isCross?: boolean,
    // opened:
}

const Header : FC<HeaderI> = ({setOpened, isCross}) => {
    const navigate = useNavigate()
    const { darkTheme, toggleTheme } = useContext(ThemeContext);
    const [opened, setOpened1] = useState(false)
    const {pathname} = useLocation()
    const isBasket = pathname === "/basket" && !isCross && styles.basketActive
    const isFavorite = pathname === "/favorite-products" && !isCross && styles.favoriteActive
    const isHome = pathname === "/" && !isCross && styles.favoriteActive
    // const profile = pathname === "/" && styles.favoriteActive


    useEffect(() => {
        if (!isCross) {
            setOpened1(true)
            setTimeout(() => {
                setOpened1(false)
            }, 10)
        } else {
            setOpened1(false)
            setTimeout(() => {
                setOpened1(true)
            }, 10)
        }
    }, [isCross])
    return (
        <div className={s.header}>
            <div onClick={() => {
                setOpened(false)
                navigate('/')

            }} className={`${s.item} ${isHome ? s.active : ""}`}>
                <Home />
                Главная
            </div>
            <div onClick={() => {
                setOpened(false)
                navigate('/favorite-products')
            }} className={`${s.item} ${isFavorite ? s.active : ""}`}>
                <SVGHeart />
                Избранное
            </div>
            <div onClick={() => {
                setOpened(false)
                navigate('/basket')
            }} className={`${s.item} ${isBasket ? s.active : ""}`}>
                <Cart />
                Корзина
            </div>
            <div onClick={() => setOpened(true)}  className={`${s.item} ${isCross ? s.active : ""}`}>
                <Profile />
                Профиль
            </div>
        </div>
    )
    // return (
    //     <nav className={`${styles.navbar} ${styles.navbarSidebar}`}>
    //         <div className={styles.container}>
    //             <div className={styles.wrapp}>
    //                 <Link to="/" className={styles.navbarBrand}>
    //                     <Logo />
    //                 </Link>
    //             </div>
    //             <div className={styles.navbarRight}>
    //                 <div onClick={toggleTheme} className={`${styles.navbarButton} ${styles.roundedBorder}`}>
    //                     <p>{darkTheme ? "D" : 'L'}</p>
    //                 </div>
    //                 <div className={`${styles.navbarButton} ${styles.roundedBorder} ${isFavorite}`} onClick={() => {
    //                     navigate("/favorite-products")
    //                     setOpened()
    //                 }}>
    //                     <SVGHeart />
    //                 </div>
    //                 <div className={`${styles.navbarButton} ${styles.roundedBorder} ${isBasket}`} onClick={() => {
    //                     navigate("/basket")
    //                     setOpened()
    //                 }}>
    //                     <Cart />
    //                 </div>
    //                 <button
    //                     className={`${styles.navbarToggler} ${styles.navbarButton} ${styles.roundedBorder}`}
    //                     type="button"
    //                     aria-label="Toggle navigation"
    //                     onClick={setOpened}
    //                 >
    //
    //                         <div className={styles.burgerButton} onClick={setOpened}>
    //                             <div className={`${styles.line} ${styles.line1} ${opened ? styles.line1Active : ''}`}></div>
    //                             <div className={`${styles.line} ${styles.line2} ${opened ? styles.line2Active : ''}`}></div>
    //                             <div className={`${styles.line} ${styles.line3} ${opened ? styles.line3Active : ''}`}></div>
    //                         </div>
    //                 </button>
    //             </div>
    //         </div>
    //     </nav>
    // )
}

export default Header