import React, {FC} from 'react';
import style from './LeftArrow.module.scss'
import back from "../../assets/svg/arrow-left.svg";
import styles from "../Categories/Categories.module.scss";
import {useNavigate} from "react-router-dom";

interface TitleArrow {
    title?: string,
    isCategory: boolean;
    marginLeft?: string;
}

const LeftArrow: FC<TitleArrow> = ({title, isCategory, marginLeft}) => {
    const navigate = useNavigate()

    return (
        <div className={style.titleCategory} style={{marginLeft}}>
            <div className={style.backHome} onClick={() => navigate('/')}>
                <img src={back} alt="/"/>
            </div>
            {
                isCategory && (
                    <h1 className={`${styles['category-title']} ${styles.title}`} style={{marginTop: "20px", marginLeft: "10px"}}>
                        {title}
                    </h1>
                )
            }
        </div>
    );
};

export default LeftArrow;
