import {AdminModal} from "../../AdminModal/AdminModal";
import React, {FC, useState} from "react";
import s from './AddCategory.module.scss'
import {CategoryI} from "../../../../interfaces/Category";

interface AddCategoryI {
    active: boolean,
    setOpen: () => void,
    categories: CategoryI[]
}

export const AddCategory : FC<AddCategoryI> = ({active, setOpen}) => {
    const [value, setValue] = useState<string>('')
    const handleClose = () => {
        setOpen()
        setValue('')
    }

    return (
        <AdminModal setOpen={setOpen} isOpened={active}>
            <h2>Добавить категорию</h2>
            <p>Введите имя необходимой категории</p>
            <div className={s.blocks}>
                <div className={s.block}>
                    <h3>Новая категория</h3>
                    <input value={value} onChange={(e) => setValue(e.target.value)} placeholder={'Например, музыка'}/>
                </div>
            </div>
            <div className={s.lastbtns}>
                <button onClick={handleClose} className={s.grayBtn}>Закрыть</button>
                <button className={s.blueBtn}>Добавить</button>
            </div>
        </AdminModal>
    )
}