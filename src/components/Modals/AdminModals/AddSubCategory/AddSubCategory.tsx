import React, {FC, useState} from "react";
import {AdminModal} from "../../AdminModal/AdminModal";
import s from './AddSubCategory.module.scss'
import {Select} from "antd";
import style from "../../Accounts/AddAccountModal/AddAccountModal.module.scss";
import spotify from "../../../../assets/spotify.png";
import netflix from "../../../../assets/netflix.png";
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
            <div className={s.block}>

                        <Select
                            className={style.select}
                            onChange={(value) => setSelectValue(value)}
                        >
                            <Option value={'Spotify'} className={style.option}>
                                <div className={style.selectItem}>
                                    <img src={spotify} alt="/" />
                                    <p>Spotify</p>
                                </div>
                            </Option>
                            <Option value={'Netflix'} className={style.option}>
                                <div className={style.selectItem}>
                                    <img src={netflix} alt="/" />
                                    <p>Netflix</p>
                                </div>
                            </Option>
                        </Select>

            </div>
            <div className={s.lastbtns}>
                <button onClick={handleClose} className={s.grayBtn}>Закрыть</button>
                <button className={s.blueBtn}>Добавить</button>
            </div>
        </AdminModal>
    )
}