import {FC, ReactElement, ReactNode, useEffect, useState} from "react";
import s from './AccountSelect.module.scss'

interface Account {
    img: ReactElement,
    name: string,
    email: string

}
interface SelectI {
    items: Account[],
    setSelected : (email: string) => void
}


export const AccountSelect : FC<SelectI> = ({items, setSelected}) => {
    const [activeItem, setActiveItem] = useState('iror200895@gmail.com')
    useEffect(() => {
        setSelected(activeItem)
    }, [activeItem])

    return (
        <div className={s.select}>
            {items.map((item) => <div onClick={() => setActiveItem(item.email)} className={`${s.item} ${activeItem === item.email ? s.active : ''}`}>
                <div className={s.leftDiv}>
                    <div className={s.img}>{item.img}</div>
                    <div>
                        <p className={s.name}>
                            {item.name}
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