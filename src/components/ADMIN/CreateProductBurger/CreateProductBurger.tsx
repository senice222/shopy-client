import s from './CreateProductBurger.module.scss'
import { Plus } from "../../../pages/ADMIN/CategoriesAndProducts/Svg";
import { Cross } from "../../Modals/AdminModal/Svgs";
import { useState } from "react";
import './Antd.scss'
import { Select, MenuItem, FormControl, InputLabel, Typography } from '@mui/material';
import UploadButton, { FileUpload } from "../UploadButton/UploadButton";
import VariantsTable from "./VariantsTable/VariantsTable";
import QuestionsFAQ from "./FAQ/FAQ";
import useSWR, { useSWRConfig } from 'swr';
import { fetcher, url } from '../../../core/fetch';
import { CategoryI } from '../../../interfaces/Category';
import BlueButton from '../../Button/Button';
import { Variant } from '../../../interfaces/Product';

interface SelectedCategory {
    main: string;
    subcategory?: string;
}
export interface Btns {
    question: string
    id: string,
    answer: string,
}

export const CreateProductBurger = ({ isOpened, setOpened }: { isOpened: boolean, setOpened: () => void }) => {
    const [title, setTitle] = useState<string>('')
    const [descr, setDescr] = useState<string>('')
    const [uploads, setUploads] = useState<FileUpload[]>([]);
    const [categoryValue, setCategoryValue] = useState('');
    const [serviceValue, setServiceValue] = useState('');
    const [titleBanner, setTitleBanner] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const { data: categories } = useSWR(`${url}/api/categories`, fetcher)
    const { data: services } = useSWR(`${url}/api/services`, fetcher)
    const { mutate } = useSWRConfig()
    const [category, setCategory] = useState<SelectedCategory>()
    const [formErrors, setFormErrors] = useState<{}>()
    const [btns, setBtns] = useState<Btns[]>([])
    const [variants, setVariants] = useState<Variant>(
        {
            properties: [],
            items: []
        }
    )

    const validateForm = () => {
        const errors: Record<string, string> = {};

        if (!title.trim()) {
            errors.title = 'Заголовок обязателен';
        } else if (title.length < 3) {
            errors.title = 'Заголовок должен содержать не менее 3 символов';
        }

        if (!descr.trim()) {
            errors.descr = 'Описание обязательно';
        } else if (descr.length < 10) {
            errors.descr = 'Описание должно содержать не менее 10 символов';
        }

        if (!categoryValue) {
            errors.categoryValue = 'Выберите категорию';
        }

        if (!serviceValue) {
            errors.serviceValue = 'Выберите сервис';
        }

        return errors;
    };

    const handleSubmit = async () => {
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            const token = localStorage.getItem('token')
            const formData = new FormData();
            formData.append('name', title);
            formData.append('description', descr);
            formData.append('category', JSON.stringify(category));
            formData.append('variants', JSON.stringify(variants));
            formData.append('img', uploads[0].file);
            formData.append('features', JSON.stringify(btns));

            try {
                await mutate(`${url}/api/products`, fetcher(`${url}/api/product/create`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    body: formData
                }));
                setFormErrors({});
            } catch (e) {
                console.log(e)
            }
        }
    };

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
                            value={descr}
                            onChange={(e) => setDescr(e.target.value)}
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
                    <QuestionsFAQ btns={btns} setBtns={setBtns} />
                </div>
                <div className={s.bottomDiv}>
                    <button className={s.btn} onClick={setOpened}>Отмена</button>
                    <div onClick={handleSubmit}>
                        <BlueButton text="Сохранить" height='44px' width='150px' />
                    </div>
                </div>
            </div>
        </div>
    )
}