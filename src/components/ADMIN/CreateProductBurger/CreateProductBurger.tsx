import s from './CreateProductBurger.module.scss'
import {Plus} from "../../../pages/ADMIN/CategoriesAndProducts/Svg";
import {Cross} from "../../Modals/AdminModal/Svgs";
import React, {useState} from "react";
import {Select} from "antd";
import './Antd.scss'
import UploadButton from "../UploadButton/UploadButton";
import VariantsTable from "./VariantsTable/VariantsTable";
import QuestionsFAQ from "./FAQ/FAQ";

const {Option} = Select

export const CreateProductBurger = ({isOpened, setOpened} : {isOpened: boolean, setOpened: () => void}) => {
    const [title, setTitle] = useState<string>('')
    const [deskr, setDeskr] = useState<string>('')
    const [selectValue, setSelectValue] = useState<string>('')

    return (
        <div onClick={setOpened} className={`${s.burgerBg} ${isOpened ? s.activeBg : ""}`}>
            <div onClick={(e) => e.stopPropagation()} className={`${s.content} ${isOpened ? s.activeContent : ""}`}>
                <div className={s.topDiv}>
                    <div className={s.titleDiv}>
                        <div className={s.plusDiv}>
                            <Plus />
                        </div>
                        <div className={s.textd}>
                            <h2>Добавить товар</h2>
                            <p>Заполните все данные о товаре</p>
                        </div>
                    </div>
                    <div onClick={setOpened} className={s.crossBtn}><Cross /></div>
                </div>
                <div className={s.blocks}>
                    <h2>Основные данные</h2>
                    <div className={s.block}>
                        <h3>Заголовок товара</h3>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder={'Например, Spotify'}/>
                    </div>
                    <div className={s.block}>
                        <h3>Описание товара</h3>
                        <textarea
                            value={deskr}
                            onChange={(e) => setDeskr(e.target.value)}
                            placeholder={"Например, привет."}
                        />
                    </div>
                    <div style={{marginTop: '25px'}} className={s.block}>
                        <div className={'custom1'}>
                            <h3>Категория товара</h3>
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
                    <div className={s.image}>
                        <h2>Изображения товара</h2>
                        <UploadButton />
                    </div>
                    <VariantsTable />
                    <QuestionsFAQ />
                </div>
            </div>
        </div>
    )
}