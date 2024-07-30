import React, {FC, useState} from "react";
import {AdminModal} from "../../AdminModal/AdminModal";
import s from './AddSubCategory.module.scss'
import {Select} from "antd";
import {CategoryI} from "../../../../interfaces/Category";
import axios from "axios";
import {url} from "../../../../core/fetch";
import useSWR, {useSWRConfig} from "swr";


interface AddSubCategoryI {
    isActive: boolean,
    setActive: () => void,
    categories: CategoryI[]
}

const { Option } = Select;

export const AddSubCategory : FC<AddSubCategoryI> = ({isActive, setActive, categories}) => {
    const [value, setValue] = useState<string>('')
    const [selectValue, setSelectValue] = useState<string>('')

    const handleClose = () => {
        setActive()
        setValue('')
    }
    const {mutate} = useSWRConfig()
    const addCategory = async () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5MTMwYTFjNmJlMDkwYjJiOTk5NWYiLCJpYXQiOjE3MjIzMjU1OTYsImV4cCI6MTcyMzYyMTU5Nn0.4eYfUtwwwZCd2hgioIzpIq4MHUVUnWQAXTcoCV6keQE'
        try {
            if (value) {
                const {data} = await axios.post(`${url}/api/category/sub/create/${selectValue}`,
                    {subCategoryName: value},
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
                )
                if (data) {
                    await mutate(`${url}/api/categories`)
                    setActive()
                    setValue('')
                }
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <AdminModal isOpened={isActive} setOpen={setActive}>
            <h2>Добавить подкатегорию</h2>
            <p>Введите имя новой подкатегории</p>
            <div className={s.blocks}>
                <div className={s.block}>
                    <h3>Новая категория</h3>
                    <input value={value} onChange={(e) => setValue(e.target.value)} placeholder={'Например, музыка'}/>
                </div>
            </div>
            <div style={{marginTop: '25px'}} className={s.block}>
                <div className={'custom1'}>
                    <h3>Родительская категория</h3>
                    <Select
                        placeholder={'Выберите нужный вариант'}
                        className={s.select}
                        onChange={(value) => setSelectValue(value)}
                    >
                        {categories ? categories.map((item => <Option value={item._id} className={s.option}>
                            <div className={s.selectItem}>
                                <p>{item.name}</p>
                            </div>
                        </Option>)) : null}

                    </Select>
                </div>
            </div>
            <div className={s.lastbtns}>
                <button onClick={handleClose} className={s.grayBtn}>Закрыть</button>
                <button onClick={addCategory} className={s.blueBtn}>Добавить</button>
            </div>
        </AdminModal>
    )
}