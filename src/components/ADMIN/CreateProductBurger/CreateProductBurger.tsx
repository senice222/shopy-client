import s from './CreateProductBurger.module.scss'
import { Plus } from "../../../pages/ADMIN/CategoriesAndProducts/Svg";
import { Cross } from "../../Modals/AdminModal/Svgs";
import React, { useState } from "react";
// import { Select } from "antd";
import './Antd.scss'
import { Select, MenuItem, FormControl, InputLabel, Typography } from '@mui/material';
import UploadButton, { FileUpload } from "../UploadButton/UploadButton";
import VariantsTable from "./VariantsTable/VariantsTable";
import QuestionsFAQ from "./FAQ/FAQ";

export const CreateProductBurger = ({ isOpened, setOpened }: { isOpened: boolean, setOpened: () => void }) => {
    const [title, setTitle] = useState<string>('')
    const [deskr, setDeskr] = useState<string>('')
    const [uploads, setUploads] = useState<FileUpload[]>([]);
    const [categoryValue, setCategoryValue] = useState('');
    const [serviceValue, setServiceValue] = useState('');

    const handleCategoryChange = (event: any) => {
        setCategoryValue(event.target.value);
    };

    const handleServiceChange = (event: any) => {
        setServiceValue(event.target.value);
    };

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
                        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder={'Например, Spotify'} />
                    </div>
                    <div className={s.block}>
                        <h3>Описание товара</h3>
                        <textarea
                            value={deskr}
                            onChange={(e) => setDeskr(e.target.value)}
                            placeholder={"Например, привет."}
                        />
                    </div>
                    <div style={{ marginTop: '25px' }} className={s.block}>
                        <div className={'custom1'}>
                            <h3>Категория товара</h3>
                            <FormControl className={s.select}>
                                <InputLabel>Выберите нужный вариант</InputLabel>
                                <Select
                                    value={categoryValue}
                                    onChange={handleCategoryChange}
                                    label="Выберите нужный вариант"
                                >
                                    <MenuItem value={'Category1'}>
                                        <div className={s.selectItem}>
                                            <Typography>Category1</Typography>
                                        </div>
                                    </MenuItem>
                                    <MenuItem value={'Category2'}>
                                        <div className={s.selectItem}>
                                            <Typography>Category2</Typography>
                                        </div>
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div style={{ marginTop: '25px' }} className={s.block}>
                        <div className={'custom1'}>
                            <h3>Прикрепление к сервису</h3>
                            <FormControl className={s.select}>
                                <InputLabel>Выберите нужный вариант</InputLabel>
                                <Select
                                    value={serviceValue}
                                    onChange={handleServiceChange}
                                    label="Выберите нужный вариант"
                                >
                                    <MenuItem value={'Category1'}>
                                        <div className={s.selectItem}>
                                            <Typography>Category1</Typography>
                                        </div>
                                    </MenuItem>
                                    <MenuItem value={'Category2'}>
                                        <div className={s.selectItem}>
                                            <Typography>Category2</Typography>
                                        </div>
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            <Typography variant="body2" style={{ marginTop: '8px' }}>
                                Необходимо для правильного отображения активных подписок и сохраненных данных
                            </Typography>
                        </div>
                    </div>
                    <div className={s.image}>
                        <h2>Изображения товара</h2>
                        <UploadButton uploads={uploads} setUploads={setUploads} />
                    </div>
                    <VariantsTable />
                    <QuestionsFAQ />
                </div>
            </div>
        </div>
    )
}