import s from './OwnSelect.module.scss'
import {FC, useEffect, useState} from "react";

export interface Item {
    text: string,
    value: string,
}

interface SelectI {
    items: Item[],
    setSelected : (el : string) => void
}


export const OwnSelect : FC<SelectI> = ({items, setSelected}) => {
    const [activeItem, setActiveItem] = useState('have')

    useEffect(() => {
        setSelected(activeItem)
    }, [activeItem])

    return (
        <div className={s.select}>
            {items.map((item, i) => <div key={i} onClick={() => setActiveItem(item.value)} className={`${s.item} ${activeItem === item.value ? s.active : ''}`}>
                <div className={s.circle}>
                    <div className={s.checked}></div>
                </div>
                <p className={s.text}>
                    {item.text}
                </p>
            </div>)}
        </div>
    )
}