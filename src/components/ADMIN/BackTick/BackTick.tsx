import React from 'react';
import style from "./BackTick.module.scss";
import home from "../../../assets/home-line.png";
import right from "../../../assets/chevron-right.png";
import {useNavigate} from "react-router-dom";

interface BackTickProps {
    title: string;
    to: string;
    nestedTitle?: string;
    nestedTo?: string;
}

const BackTick = ({title, to, nestedTitle, nestedTo}: BackTickProps) => {
    const navigate = useNavigate()

    return (
        <div className={style.backTick}>
            <img onClick={() => navigate(to)} src={home} alt={"/"}/>
            <img onClick={() => navigate(to)} src={right} alt={"/"}/>
            <div>
                <p>{title}</p>
            </div>
            {
                nestedTitle && nestedTo && (
                    <>
                        <img onClick={() => navigate(nestedTo)} src={right} alt={"/"}/>
                        <div>
                            <p>{nestedTitle}</p>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default BackTick;
