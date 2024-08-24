import s from './OwnSelect.module.scss'
import {FC, useEffect, useState} from "react";

export interface Item {
    name: string,
    _id: string,
}

interface SelectI {
    items: Item[],
    setSelected : (el : string) => void
}


export const OwnSelect : FC<SelectI> = ({items, setSelected}) => {
    const [activeItem, setActiveItem] = useState<{value: string, id: string}>({value: '', id: ''})

    useEffect(() => {
        setSelected(activeItem.value)
    }, [activeItem])

    return (
        <div className={s.select}>
            {items.map((item, i) => <div key={i} onClick={() => setActiveItem({id: item._id, value: item.name})} className={`${s.item} ${activeItem.id === item._id ? s.active : ''}`}>
                <div className={s.circle}>
                    <div className={s.checked}></div>
                </div>
                <p className={s.text}>
                    {item.name}
                </p>
            </div>)}
        </div>
    )
}