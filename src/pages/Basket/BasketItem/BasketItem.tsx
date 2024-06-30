import style from './BasketItem.module.scss'
import spotify from "../../../assets/svg/Spotify.svg";
import cross from "../../../assets/svg/x-close.svg";
import {FC} from "react";

export interface BasketProps {
    name: string;
    price: number;
    plan: string;
    duration: string;
}

const BasketItem: FC<BasketProps> = ({name, price, plan, duration}) => {

    return (
        <div className={style.item}>
            <img src={spotify} alt="/"/>
            <div className={style.container}>
                <div className={style.infoWrapper}>
                    <h2>{name}</h2>
                    {/*<div>*/}
                    {/*<p>План: Индивидуальный</p>*/}
                    {/*<p>Длительность: 1 месяц</p>*/}
                    {/*</div>*/}
                    <h2>{price}₽</h2>
                </div>
                <div className={style.cross}>
                    <img src={cross} alt="/"/>
                </div>
            </div>
        </div>
    );
};

export default BasketItem;
