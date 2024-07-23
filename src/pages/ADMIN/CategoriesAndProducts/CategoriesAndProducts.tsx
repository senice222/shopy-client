import React, { FC, useState } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import s from './CategoriesAndProducts.module.scss';
import CategoryItem from "./CategoryItem";
import ProductList from "./ProductList";
import { Product } from "./ProductTypes";
import Pagination from "../../../components/Pagination/Pagination";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import avatar from '../../../assets/Avatar.png';
import {AddCategory} from "../../../components/Modals/AdminModals/AddCategory/AddCategory";
import {CategoriesBurger} from "../../../components/CategoriesBurger/CategoriesBurger";
import {CreateProductBurger} from "../../../components/ADMIN/CreateProductBurger/CreateProductBurger";
import {initialProductList} from "../../../utils/dummy_data";

const CategoriesAndProducts: FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages: number = 10; // Общее количество страниц
    const [productList, setProductList] = useState<Product[]>(initialProductList);
    const [burger, setBurger] = useState<boolean>(false)
    const [creating, setCreating] = useState<boolean>(false)

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <CreateProductBurger isOpened={creating} setOpened={() => setCreating((prev) => !prev)}/>
            <CategoriesBurger isOpened={burger} setOpened={() => setBurger((prev) => !prev)} />
                <div className={s.content}>
                    <div className={s.title}>
                        <h1>Категории и товары</h1>
                        <div className={s.btns}>
                            <button onClick={() => setBurger(true)} className={s.gray}>Разделы каталога</button>
                            <button onClick={() => setCreating(true)} className={s.blue}>Добавить товар</button>
                        </div>
                    </div>
                    <div className={s.hr}></div>
                    <div className={s.productsAndCategories}>
                        <div className={s.categoriesDiv}>
                            <h2 className={s.title}>Категории</h2>
                            <div className={s.categories}>
                                <div className={s.item}>
                                    <div className={s.topDiv}>
                                        <h2>Все товары</h2>
                                    </div>
                                </div>
                                <CategoryItem main={'Категория'} sub={['Суб-категория', 'Суб-категория', 'Суб-категория']} />
                                <CategoryItem main={'Категория'} sub={['Суб-категория', 'Суб-категория', 'Суб-категория']} />
                            </div>
                        </div>
                        <div className={s.products}>
                            <div className={s.topWrapper1}>
                                <h2 className={s.title2}>Товары</h2>
                                <div className={s.searchBar}>
                                    <input type="text" placeholder="Поиск товаров" />
                                </div>
                            </div>
                            <div className={s.tableDiv}>
                                <table className={s.usersTable}>
                                    <thead>
                                    <tr>
                                        <th>Фото</th>
                                        <th>Заголовок</th>
                                        <th>Цена</th>
                                        <th>Действия</th>
                                    </tr>
                                    </thead>
                                    <ProductList items={productList} setItems={setProductList} />
                                </table>
                                <div className={s.paginationContainer}>
                                    <Pagination
                                        totalPages={totalPages}
                                        currentPage={currentPage}
                                        onPageChange={handlePageChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </DndProvider>
    );
};

export default CategoriesAndProducts;
