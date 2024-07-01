import style from './BasketItem.module.scss'
import spotify from "../../../assets/svg/Spotify.svg";
import cross from "../../../assets/svg/x-close.svg";
import { FC } from "react";
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { removeFromCart } from '../../../store/features/cartSlice';

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
    id: string,
}

const BasketItem: FC<BasketProps> = ({ main, optional, id }) => {
    const dispatch = useAppDispatch()
    
    const handleDelete = (itemId: string) => {
        dispatch(removeFromCart(itemId));
    };

    return (
        <div className={style.item}>
            <img src={spotify} alt="/" />
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
                    <img onClick={() => handleDelete(id)} src={cross} alt="/" />
                </div>
            </div>
        </div>
    );
};

export default BasketItem;
