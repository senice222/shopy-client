import s from './CategoriesBurger.module.scss'
import React, {FC, useState} from "react";
import {Plus} from "../../pages/ADMIN/CategoriesAndProducts/Svg";
import {Cross} from "../Modals/AdminModal/Svgs";
import CategoryItem from "../../pages/ADMIN/CategoriesAndProducts/CategoryItem";
import {AddCategory} from "../Modals/AdminModals/AddCategory/AddCategory";
import {AddSubCategory} from "../Modals/AdminModals/AddSubCategory/AddSubCategory";

interface CategoriesBurger {
    isOpened: boolean,
    setOpened: () => void
}

export const CategoriesBurger : FC<CategoriesBurger> = ({isOpened, setOpened}) => {
    const [addCategory, setAddCategory] = useState<boolean>(false)
    const [addSubCategory, setAddSubCategory] = useState<boolean>(false)

    return (
        <>
            <AddSubCategory isActive={addSubCategory} setActive={() => setAddSubCategory((prev) => !prev)}/>
        <AddCategory active={addCategory} setOpen={() => setAddCategory((prev) => !prev)} />
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
                                <CategoryItem main={'Категория'} sub={['Суб-категория', 'Суб-категория', 'Суб-категория']} />
                                <CategoryItem main={'Категория'} sub={['Суб-категория', 'Суб-категория', 'Суб-категория']} />
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