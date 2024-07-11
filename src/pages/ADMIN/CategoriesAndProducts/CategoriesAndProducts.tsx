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

const initialProductList: Product[] = [
    {
        id: 1,
        name: 'Product1',
        img: avatar,
        variants: {
            items: [
                { price: 300, properties: [], count: 3, visible: true, description: 'description' },
                { price: 100, properties: [], count: 3, visible: true, description: 'description' },
                { price: 500, properties: [], count: 3, visible: true, description: 'description' }
            ]
        }
    },
    {
        id: 2,
        name: 'Product2',
        img: avatar,
        variants: {
            items: [
                { price: 300, properties: [], count: 3, visible: true, description: 'description' },
                { price: 500, properties: [], count: 3, visible: true, description: 'description' }
            ]
        }
    },
    {
        id: 3,
        name: 'Product1',
        img: avatar,
        variants: {
            items: [
                { price: 300, properties: [], count: 3, visible: true, description: 'description' },
                { price: 100, properties: [], count: 3, visible: true, description: 'description' },
                { price: 500, properties: [], count: 3, visible: true, description: 'description' }
            ]
        }
    },
    {
        id: 4,
        name: 'Product2',
        img: avatar,
        variants: {
            items: [
                { price: 300, properties: [], count: 3, visible: true, description: 'description' },
                { price: 500, properties: [], count: 3, visible: true, description: 'description' }
            ]
        }
    },
    {
        id: 5,
        name: 'Product1',
        img: avatar,
        variants: {
            items: [
                { price: 300, properties: [], count: 3, visible: true, description: 'description' },
                { price: 100, properties: [], count: 3, visible: true, description: 'description' },
                { price: 500, properties: [], count: 3, visible: true, description: 'description' }
            ]
        }
    },
    {
        id: 6,
        name: 'Product2',
        img: avatar,
        variants: {
            items: [
                { price: 300, properties: [], count: 3, visible: true, description: 'description' },
                { price: 500, properties: [], count: 3, visible: true, description: 'description' }
            ]
        }
    },
    // Additional products here...
];

const CategoriesAndProducts: FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages: number = 10; // Общее количество страниц
    const [productList, setProductList] = useState<Product[]>(initialProductList);
    const [addCategory, setAddCategory] = useState(false)

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <AddCategory active={addCategory} setOpen={() => setAddCategory((prev) => !prev)}/>
            <AdminLayout>
                <div className={s.content}>
                    <div className={s.title}>
                        <h1>Категории и товары</h1>
                        <div className={s.btns}>
                            <button onClick={() => setAddCategory(true)} className={s.gray}>Разделы каталога</button>
                            <button className={s.blue}>Добавить товар</button>
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
            </AdminLayout>
        </DndProvider>
    );
};

export default CategoriesAndProducts;
