import style from './Header.module.scss'
import logo from '../../assets/svg/logo.svg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {useNavigate} from "react-router-dom";
import {LOGO} from "../BurgerMenu/Svgs";

const Header = () => {
    const navigate = useNavigate()

    return (
        <div className={style.headerTop}>
            <div className={style.wrapper}>
                <div className={style.logo} onClick={() => navigate('/')}>
                    <LOGO />
                </div>
                <div className={style.searchBody}>
                    <label className={style.label} htmlFor="search">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </label>
                    <input type="text" id="search" placeholder="Найти подписку или игру" className={style.searchInput} />
                </div>
            </div>
        </div>
    );
};

export default Header;
