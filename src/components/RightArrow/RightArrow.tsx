import React, {FC} from 'react';
import style from '../LeftArrow/LeftArrow.module.scss'
import right from "../../assets/svg/arrow-right.svg";
import {useNavigate} from "react-router-dom";


const RightArrow: FC = () => {
    const navigate = useNavigate()

    return (
        <div className={style.titleCategory}>
            <div className={style.backHome} onClick={() => navigate('/')}>
                <img src={right} alt="/"/>
            </div>
        </div>
    );
};

export default RightArrow;
