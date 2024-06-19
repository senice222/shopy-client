import styles from './Header.module.scss'
import {Link, useNavigate} from "react-router-dom";
import {FC, useContext, useEffect, useState} from "react";
import {SVGHeart} from "../Svgs/Svgs";
import rightArrow from '../../assets/svg/arrow-left.svg'
import {ThemeContext} from "../../context/ThemeContext";
import {Logo} from "./Logo";

interface HeaderI {
    setOpened: () => void;
    isRightArrow?: boolean,
    isCross?: boolean
}

const Header : FC<HeaderI> = ({setOpened, isRightArrow, isCross}) => {
    const navigate = useNavigate()
    const { darkTheme, toggleTheme } = useContext(ThemeContext);
    const [opened, setOpened1] = useState(false)

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
        <nav className={`${styles.navbar} ${styles.navbarSidebar}`}>
            <div className={styles.container}>
                <div className={styles.wrapp}>
                    {
                          isRightArrow && <img className={styles.rghtImg} onClick={() => navigate('/')} src={rightArrow} alt={"/"}/>
                    }
                    <Link to="/" className={styles.navbarBrand}>
                        <Logo />
                    </Link>
                </div>
                <div className={styles.navbarRight}>
                    <div onClick={toggleTheme} className={`${styles.navbarButton} ${styles.roundedBorder}`}>
                        <p>{darkTheme ? "D" : 'L'}</p>
                    </div>
                    <div className={`${styles.navbarButton} ${styles.roundedBorder}`} onClick={() => navigate("/favorite-products")}>
                        <SVGHeart />
                    </div>
                    <div className={`${styles.navbarButton} ${styles.roundedBorder}`} onClick={() => navigate("/basket")}>
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="{styles.svgIcon}"
                        >
                            <path
                                d="M13.3336 7.49999V4.99999C13.3336 3.15904 11.8413 1.66666 10.0003 1.66666C8.15936 1.66666 6.66697 3.15904 6.66697 4.99999V7.49999M2.99364 8.62663L2.49364 13.96C2.35148 15.4764 2.28039 16.2346 2.53201 16.8202C2.75305 17.3347 3.1404 17.76 3.63199 18.0281C4.19158 18.3333 4.95311 18.3333 6.47618 18.3333H13.5244C15.0475 18.3333 15.809 18.3333 16.3686 18.0281C16.8602 17.76 17.2476 17.3347 17.4686 16.8202C17.7202 16.2346 17.6491 15.4764 17.507 13.96L17.007 8.62663C16.8869 7.34611 16.8269 6.70585 16.5389 6.22179C16.2853 5.79548 15.9106 5.45425 15.4625 5.24153C14.9536 4.99999 14.3106 4.99999 13.0244 4.99999L6.97618 4.99999C5.69005 4.99999 5.04698 4.99999 4.53815 5.24153C4.09003 5.45425 3.71531 5.79548 3.46169 6.22179C3.17371 6.70585 3.11369 7.34611 2.99364 8.62663Z"
                                stroke="#0070CC"
                                strokeWidth="1.66667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <button
                        className={`${styles.navbarToggler} ${styles.navbarButton} ${styles.roundedBorder}`}
                        type="button"
                        aria-label="Toggle navigation"
                        onClick={setOpened}
                    >

                            <div className={styles.burgerButton} onClick={setOpened}>
                                <div className={`${styles.line} ${styles.line1} ${opened ? styles.line1Active : ''}`}></div>
                                <div className={`${styles.line} ${styles.line2} ${opened ? styles.line2Active : ''}`}></div>
                                <div className={`${styles.line} ${styles.line3} ${opened ? styles.line3Active : ''}`}></div>
                            </div>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header