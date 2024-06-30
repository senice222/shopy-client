import style from './BasketItem.module.scss'
import spotify from "../../../assets/svg/Spotify.svg";
import cross from "../../../assets/svg/x-close.svg";
import {FC} from "react";
import {useTelegram} from "../../../hooks/useTelegram";
import {fetcher, url} from "../../../core/fetch";
import {useSWRConfig} from "swr/dist/core";

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
    _id: string,
}

const BasketItem: FC<BasketProps> = ({main, optional, _id}) => {
    const {id} = useTelegram()
    const {mutate} = useSWRConfig()
    alert(_id)

    const handleDelete = () => {
        mutate(`${url}/api/user/cart/${id}`, fetcher(`${url}/api/user/cart/${id}`, {
            method: "DELETE",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                "_id" : _id
            })
        }))
    }

    return (
        <div className={style.item}>
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
                    <img onClick={handleDelete} src={cross} alt="/"/>
                </div>
            </div>
        </div>
    );
};

export default BasketItem;
