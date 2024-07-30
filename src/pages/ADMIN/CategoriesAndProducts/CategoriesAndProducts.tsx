import React, {FC, useEffect, useState} from "react";
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
// import {initialProductList} from "../../../utils/dummy_data";
import useSWR from "swr";
import {fetcher, url} from "../../../core/fetch";
import {CategoryI, SubCategoryI, SubCategoryIState} from "../../../interfaces/Category";

const CategoriesAndProducts: FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [productList, setProductList] = useState<Product[]>();
    const [searchQuery, setSearchQuery] = useState('');
    const [totalPages, setTotalPages] = useState<number | null>(null)
    const [burger, setBurger] = useState<boolean>(false)
    const [creating, setCreating] = useState<boolean>(false)
    const [currentCategory, setCurrentCategory] = useState<SubCategoryIState | null>(null)
    const {data : categories} = useSWR(`${url}/api/categories`, fetcher);
    const currentUrl = `${url}/api/products/${currentCategory ? `category/${currentCategory.mainCategoryName}/${currentCategory.name}` : ''}?page=${currentPage}&limit=10`
    // const {data : products} = useSWR(`${url}/api/products/${currentCategory ? `category/${currentCategory.mainCategoryId}/${currentCategory._id}` : ''}`, fetcher);
    const {data : products, mutate} = useSWR(`${url}/api/products/${currentCategory ? `category/${currentCategory.mainCategoryName}/${currentCategory.name}` : ''}?page=${currentPage}&limit=10`, fetcher);
    console.log(products)
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        if (products) {
            setTotalPages(products.totalPages)
        }
    }, [products])
    // useEffect(() => {
    //     mutate()
    // }, [currentPage])
    // const filteredProducts =
    return (
        <DndProvider backend={HTML5Backend}>
            <CreateProductBurger isOpened={creating} setOpened={() => setCreating((prev) => !prev)}/>
            <CategoriesBurger setCurrentCategory1={setCurrentCategory} categories={categories} isOpened={burger} setOpened={() => setBurger((prev) => !prev)} />
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
                                <div onClick={() => setCurrentCategory(null)} className={s.item}>
                                    <div className={s.topDiv}>
                                        <h2>Все товары</h2>
                                    </div>
                                </div>
                                {categories ? categories.map((item : CategoryI) => <CategoryItem setCurrentCategory={setCurrentCategory} _id={item._id} main={item.name} sub={item.subCategories} />) : null}
                            </div>
                        </div>
                        <div className={s.products}>
                            <div className={s.topWrapper1}>
                                <h2 className={s.title2}>Товары</h2>
                                <div className={s.searchBar}>
                                    <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" placeholder="Поиск товаров" />
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
                                    <ProductList url={currentUrl} items={products?.products} />
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
