import React, {ChangeEvent, FC, useEffect, useState} from "react";
import s from './CategoriesAndProducts.module.scss';
import CategoryItem from "./CategoryItem/CategoryItem";
import ProductList from "./ProductList/ProductList";
import {Product} from "../../../interfaces/ProductTypes";
import Pagination from "../../../components/Pagination/Pagination";
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {CategoriesBurger} from "../../../components/CategoriesBurger/CategoriesBurger";
import {CreateProductBurger} from "../../../components/ADMIN/CreateProductBurger/CreateProductBurger";
import useSWR from "swr";
import {fetcher, url} from "../../../core/fetch";
import {CategoryI, SubCategoryIState} from "../../../interfaces/Category";

const CategoriesAndProducts: FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [totalPages, setTotalPages] = useState<number | null>(null)
    const [burger, setBurger] = useState<boolean>(false)
    const [creating, setCreating] = useState<boolean>(false)
    const [currentCategory, setCurrentCategory] = useState<SubCategoryIState | null>(null)

    const {data: categories} = useSWR(`${url}/api/categories`, fetcher);
    const currentUrl = `${url}/api/products/${currentCategory ? `category/${currentCategory.mainCategoryName}/${currentCategory.name}` : ''}?page=${currentPage}&limit=10`
    const {
        data: products
    } = useSWR(`${url}/api/products/${currentCategory ? `category/${currentCategory.mainCategoryName}/${currentCategory.name}` : ''}?page=${currentPage}&limit=10`, fetcher);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products?.products);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        if (products) {
            setTotalPages(products.totalPages)
        }
    }, [products])

    useEffect(() => {
        setSearchQuery('')
        setFilteredProducts(products?.products)
    }, [currentCategory, products]);

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);

        const filtered = products?.products.filter((product: Product) => product.name.toLowerCase().includes(query.toLowerCase()))
        setFilteredProducts(filtered);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <CreateProductBurger isOpened={creating} setOpened={() => setCreating((prev) => !prev)}/>
            <CategoriesBurger setCurrentCategory1={setCurrentCategory} categories={categories} isOpened={burger}
                              setOpened={() => setBurger((prev) => !prev)}/>
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
                            {categories ? categories.map((item: CategoryI) => <CategoryItem
                                currentCatgeoryId={currentCategory ? currentCategory._id : 'loading...' }
                                setCurrentCategory={setCurrentCategory} _id={item._id} main={item.name}
                                sub={item.subCategories}/>) : null}
                        </div>
                    </div>
                    <div className={s.products}>
                        <div className={s.topWrapper1}>
                            <h2 className={s.title2}>{currentCategory ? currentCategory.name : 'Все товары'}</h2>
                            <div className={s.searchBar}>
                                <input value={searchQuery} onChange={handleSearchChange} type="text"
                                       placeholder="Поиск товаров"/>
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
                                <ProductList url={currentUrl} setProducts={setFilteredProducts} items={filteredProducts}
                                             currentPage={currentPage}/>
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
