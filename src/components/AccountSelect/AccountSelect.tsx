import {FC, useEffect, useState} from "react";
import s from './AccountSelect.module.scss'
import {Account} from "../../interfaces/AccountsProps";
import {url} from "../../core/fetch";
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import {chooseAccount} from "../../store/features/accountSlice";


interface SelectI {
    items: Account[],
    setSelected: (email: string) => void
}


export const AccountSelect: FC<SelectI> = ({items, setSelected}) => {
    const dispatch = useAppDispatch();

    const initialActiveItem = items && items.length > 0 ? items[0].email : '';
    const [activeItem, setActiveItem] = useState(initialActiveItem);

    useEffect(() => {
        if (items[0]?.email) {
            setSelected(items[0]?.email);
        }
    }, [activeItem, setSelected]);

    if (!items || items.length === 0) return null;

    return (
        <div className={s.select}>
            {items?.map((item: Account, i) => <div key={i} onClick={() => {
                dispatch(chooseAccount({
                    service: item.service,
                    email: item.email,
                    password: item.password
                }))
                setActiveItem(item.email)
            }} className={`${s.item} ${activeItem === item.email ? s.active : ''}`}>
                <div className={s.leftDiv}>
                    <img src={`${url}/api/uploads/${item.image}`} className={s.img} alt={'/'}/>
                    <div>
                        <p className={s.name}>
                            {item.service}
                        </p>
                        <p className={s.text}>{item.email}</p>
                    </div>
                </div>
                <div className={s.circle}>
                    <div className={s.checked}></div>
                </div>
            </div>)}
        </div>
    )
}