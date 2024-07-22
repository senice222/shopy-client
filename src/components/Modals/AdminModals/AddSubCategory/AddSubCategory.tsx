import React, {FC, useState} from "react";
import {AdminModal} from "../../AdminModal/AdminModal";
import s from './AddSubCategory.module.scss'
import {Select} from "antd";

interface AddSubCategoryI {
    isActive: boolean,
    setActive: () => void
}

const { Option } = Select;

export const AddSubCategory : FC<AddSubCategoryI> = ({isActive, setActive}) => {
    const [value, setValue] = useState<string>('')
    const [selectValue, setSelectValue] = useState<string>('')

    const handleClose = () => {
        setActive()
        setValue('')
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
                        <Option value={'Category1'} className={s.option}>
                            <div className={s.selectItem}>
                                <p>Category1</p>
                            </div>
                        </Option>
                        <Option value={'Category2'} className={s.option}>
                            <div className={s.selectItem}>
                                <p>Category2</p>
                            </div>
                        </Option>
                    </Select>
                </div>
            </div>
            <div className={s.lastbtns}>
                <button onClick={handleClose} className={s.grayBtn}>Закрыть</button>
                <button className={s.blueBtn}>Добавить</button>
            </div>
        </AdminModal>
    )
}