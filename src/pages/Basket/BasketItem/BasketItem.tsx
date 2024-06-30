import style from './BasketItem.module.scss'
import spotify from "../../../assets/svg/Spotify.svg";
import cross from "../../../assets/svg/x-close.svg";
import {FC} from "react";
import {useTelegram} from "../../../hooks/useTelegram";

interface OptionalI {
    name: string,
    value: string
}
export interface BasketProps {
    main: {
        name: string;
        price: string;
    },
    optional: OptionalI[]

}

const BasketItem: FC<BasketProps> = ({main, optional}) => {
    const {id} = useTelegram()
    return (
        <div className={style.item}>
            {id ? id : "НЕТУ НАХУЙ"}
            <img src={spotify} alt="/"/>
            <div className={style.container}>
                <div className={style.infoWrapper}>
                    <h2>{main.name}</h2>
                    <div>
                        {
                            optional.map((item, i) => (
                                <>
                                    <p>{item.name}: {item.value}</p>
                                </>
                            ))
                        }
                    </div>
                    <h2>{main.price}₽</h2>
                </div>
                <div className={style.cross}>
                    <img src={cross} alt="/"/>
                </div>
            </div>
        </div>
    );
};

export default BasketItem;
