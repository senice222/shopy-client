import s from './CategoriesBurger.module.scss'
import React, {FC, useState} from "react";
import {Arrow, Plus} from "../../pages/ADMIN/CategoriesAndProducts/Svg";
import {Cross} from "../Modals/AdminModal/Svgs";
import CategoryItem from "../../pages/ADMIN/CategoriesAndProducts/CategoryItem/CategoryItem";
import {AddCategory} from "../Modals/AdminModals/AddCategory/AddCategory";
import {AddSubCategory} from "../Modals/AdminModals/AddSubCategory/AddSubCategory";
import useSWR, {useSWRConfig} from "swr";
import {fetcher, url} from "../../core/fetch";
import {CategoryI, SubCategoryIState} from "../../interfaces/Category";
import axios from 'axios';

interface CategoriesBurger {
    isOpened: boolean,
    setOpened: () => void,
    categories: CategoryI[],
    setCurrentCategory1: (el : SubCategoryIState | null) => void
}

export const CategoriesBurger : FC<CategoriesBurger> = ({isOpened, setOpened, categories, setCurrentCategory1}) => {
    const [addCategory, setAddCategory] = useState<boolean>(false)
    const [addSubCategory, setAddSubCategory] = useState<boolean>(false)
    const {mutate} = useSWRConfig()

    // console.log(data)
    const setCurrentCategory = (a : SubCategoryIState | null) => {
        setOpened()
        setCurrentCategory1(a)
    }
    
    
    console.log(categories, 22)
    return (
        <>
            <AddSubCategory categories={categories} isActive={addSubCategory} setActive={() => setAddSubCategory((prev) => !prev)}/>
        <AddCategory categories={categories} active={addCategory} setOpen={() => setAddCategory((prev) => !prev)} />
        <div onClick={setOpened} className={`${s.burgerBg} ${isOpened ? s.activeBg : ""}`}>
            <div onClick={(e) => e.stopPropagation()} className={`${s.content} ${isOpened ? s.activeContent : ""}`}>
                <div className={s.topDiv}>
                    <div className={s.titleDiv}>
                        <div className={s.plusDiv}>
                            <Plus />
                        </div>
                        <div className={s.textd}>
                            <h2>Разделы каталога</h2>
                            <p>Здесь вы можете редактировать разделы каталога</p>
                        </div>
                    </div>
                    <div onClick={setOpened} className={s.crossBtn}><Cross /></div>
                </div>
                <div className={s.content2}>
                    <div className={s.avba}>
                        <div className={s.btns}>
                            <button onClick={() => setAddCategory(true)}>Добавить категорию</button>
                            <button onClick={() => setAddSubCategory(true)}>Добавить подкатегорию</button>
                        </div>
                        <div className={s.categoriesDiv}>
                            <h2 className={s.title}>Категории</h2>
                            <div className={s.categories}>
                                {/*{categories ? categories}*/}
                                <div onClick={() => setCurrentCategory(null)} className={`${s.item}`}>
                                    <div className={s.topDiv}>
                                        <h2>Все товары</h2>
                                    </div>
                                </div>
                                {categories ? categories.map((item : CategoryI) => <CategoryItem inModal={true} setCurrentCategory={setCurrentCategory} _id={item._id} main={item.name} sub={item.subCategories} />) : null}                                {/*<CategoryItem main={'Категория'} sub={['Суб-категория', 'Суб-категория', 'Суб-категория']} />*/}
                            </div>
                        </div>
                    </div>
                    <div className={s.lastBtns}>
                        <button className={s.gray}>Отмена</button>
                        <button className={s.blue}>Сохранить</button>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}