import {AdminModal} from "../../AdminModal/AdminModal";
import React, {FC, useState} from "react";
import s from './AddCategory.module.scss'
import {CategoryI} from "../../../../interfaces/Category";
import axios from "axios";
import {url} from "../../../../core/fetch";
import {a} from "react-spring";
import useSWR, {useSWRConfig} from "swr";

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
    const {mutate} = useSWRConfig()

    const addCategory = async () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5MTMwYTFjNmJlMDkwYjJiOTk5NWYiLCJpYXQiOjE3MjIzMjU1OTYsImV4cCI6MTcyMzYyMTU5Nn0.4eYfUtwwwZCd2hgioIzpIq4MHUVUnWQAXTcoCV6keQE'
        try {
            if (value) {
                const {data} = await axios.post(`${url}/api/category/create`,
                    {name: value},
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
            )
                if (data) {
                    await mutate(`${url}/api/categories`)
                    setOpen()
                    setValue('')
                }
            }
        } catch (e) {
            console.log(e)
        }
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
                <button onClick={addCategory} className={s.blueBtn}>Добавить</button>
            </div>
        </AdminModal>
    )
}