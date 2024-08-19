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
import useSWR from 'swr';
import { fetcher, url } from '../../../core/fetch';
import { CategoryI } from '../../../interfaces/Category';
import BlueButton from '../../Button/Button';
import { Variant } from '../../../interfaces/Product';

interface SelectedCategory {
    main: string;
    subcategory?: string;
}

export const CreateProductBurger = ({ isOpened, setOpened }: { isOpened: boolean, setOpened: () => void }) => {
    const [title, setTitle] = useState<string>('')
    const [deskr, setDeskr] = useState<string>('')
    const [uploads, setUploads] = useState<FileUpload[]>([]);
    const [categoryValue, setCategoryValue] = useState('');
    const [serviceValue, setServiceValue] = useState('');
    const [titleBanner, setTitleBanner] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const { data: categories } = useSWR(`${url}/api/categories`, fetcher)
    const { data: services } = useSWR(`${url}/api/services`, fetcher)
    const [category, setCategory] = useState<SelectedCategory>()
    const [variants, setVariants] = useState<Variant>(
        {
            properties: [],
            items: []
        }
    )

    const allCategories = categories ? categories.flatMap((item: CategoryI) => [
        item.name,
        ...item.subCategories.map((sub: { name: string }) => sub.name)
    ]) : [];

    const findCategory = (categories: CategoryI[], selectedName: string): SelectedCategory | null => {
        for (let category of categories) {
            if (category.name === selectedName) {
                return { main: category.name }; // if it main category
            }
            if (category.subCategories) {
                const subCategory = category.subCategories.find(sub => sub.name === selectedName);
                if (subCategory) {
                    return { main: category.name, subcategory: subCategory.name }; // if it subcategory
                }
            }
        }
        return null; // if nothing found
    };

    const handleCategorySelect = (selectedName: string) => {
        const category = findCategory(categories, selectedName);
        if (category) {
            setCategory(category)
        } else {
            console.log('Категория не найдена');
        }
    };

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
                                    {
                                        allCategories && allCategories.map((item: string) => (
                                            <MenuItem value={item} onClick={() => handleCategorySelect(item)}>
                                                <div className={s.selectItem}>
                                                    <Typography>{item}</Typography>
                                                </div>
                                            </MenuItem>
                                        ))
                                    }
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
                                    {
                                        services && services.map((item: { name: string }) => (
                                            <MenuItem value={item.name} onClick={() => handleCategorySelect(item.name)}>
                                                <div className={s.selectItem}>
                                                    <Typography>{item.name}</Typography>
                                                </div>
                                            </MenuItem>
                                        ))
                                    }
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
                    <VariantsTable
                        description={description} setDescription={setDescription}
                        titleBanner={titleBanner} setTitleBanner={setTitleBanner}
                        variants={variants} setVariants={setVariants}
                    />
                    <QuestionsFAQ />
                </div>
                <div className={s.bottomDiv}>
                    <button className={s.btn} onClick={setOpened}>Отмена</button>
                    <div>
                        <BlueButton text="Сохранить" height='44px' width='150px' />
                    </div>
                </div>
            </div>
        </div>
    )
}