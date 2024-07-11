import AdminLayout from "../../../layouts/AdminLayout";
import s from './CategoriesAndProducts.module.scss';
import {Arrow, Arrow2, Copy, Eye, Pencil} from "./Svg";
import React, { FC, useState } from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import style from "../Users/Users.module.scss";
import avatar from '../../../assets/Avatar.png'
import Pagination from "../../../components/Pagination/Pagination";

interface CategoryItemI  {
    main: string;
    sub: string[];
}
// {
    // price: Number,
    //     oldPrice: Number, properties: [String], count: Number, visible: Boolean, banner: {
    // title: String,
    //     description: String},}
const ProductList = [
    {
        id: 1,
        name: 'Product12',
        img: avatar,
        variants: {
            items: [
                {
                    price: 300,
                    properties: [],
                    count: 3,
                    visible: true,
                    description: 'dasdsadasdas'
                },
                {
                    price: 100,
                    properties: [],
                    count: 3,
                    visible: true,
                    description: 'dasdsadasdas'
                },
                {
                    price: 500,
                    properties: [],
                    count: 3,
                    visible: true,
                    description: 'dasdsadasdas'
                }
            ]
        }
    },
    {
        id: 2,
        name: 'Product12',
        img: avatar,
        variants: {
            items: [
                {
                    price: 300,
                    properties: [],
                    count: 3,
                    visible: true,
                    description: 'dasdsadasdas'
                },
                {
                    price: 500,
                    properties: [],
                    count: 3,
                    visible: true,
                    description: 'dasdsadasdas'
                }
            ]
        }
    },
    {
        id: 3,
        name: 'Product12',
        img: avatar,
        variants: {
            items: [
                {
                    price: 300,
                    properties: [],
                    count: 3,
                    visible: true,
                    description: 'dasdsadasdas'
                },
                {
                    price: 500,
                    properties: [],
                    count: 3,
                    visible: true,
                    description: 'dasdsadasdas'
                }
            ]
        }
    },
    {
        id: 3,
        name: 'Product12',
        img: avatar,
        variants: {
            items: [
                {
                    price: 500,
                    properties: [],
                    count: 3,
                    visible: true,
                    description: 'dasdsadasdas'
                },
                {
                    price: 500,
                    properties: [],
                    count: 3,
                    visible: true,
                    description: 'dasdsadasdas'
                }
            ]
        }
    },
    {
        id: 3,
        name: 'Product12',
        img: avatar,
        variants: {
            items: [
                {
                    price: 500,
                    properties: [],
                    count: 3,
                    visible: true,
                    description: 'dasdsadasdas'
                },
            ]
        }
    }

]
interface Item {
    price: number,
    properties: never[],
    count: number,
    visible: boolean,
    description: string
}
const CategoryItem: FC<CategoryItemI> = ({ main, sub }) => {
    const [opened, setOpened] = useState(false);
    return (
        <div className={`${s.item} ${opened ? s.active : ""}`}>
            <div className={s.topDiv} onClick={() => setOpened(prev => !prev)}>
                <h2>{main}</h2>
                <Arrow />
            </div>
            <div className={s.subCategories}>
                <div className={s.sub}>
                    Суб-категория
                </div>
                {sub.map((item, index) => (
                    <div key={index} className={s.sub}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};
const highestPrice = (items : Item[]) => {
    let itemsCopied = items.concat()
    itemsCopied.sort(function (a, b) {
        if (a.price > b.price) {
            return 1;
        }
        if (a.price < b.price) {
            return -1;
        }
        // a должно быть равным b
        return 0;
    });
    const lowest = itemsCopied[0].price
    const highest = itemsCopied[itemsCopied.length - 1].price

    if (lowest === highest) {
        return <div>{lowest}₽</div>
    } else {
        return <div>
            {lowest}₽ - {highest}₽
        </div>
    }

}
const CategoriesAndProducts = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages: number = 10; // Общее количество страниц

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <AdminLayout>
            <div className={s.content}>
                <div className={s.title}>
                    <h1>Категории и товары</h1>
                    <div className={s.btns}>
                        <button className={s.gray}>Разделы каталога</button>
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
                                    <tbody>
                                    {ProductList.map(item => (
                                        <tr key={item.id}>
                                            <td><img src={item.img} alt={""}/></td>
                                            <td>{item.name}</td>
                                            <td>{highestPrice(item.variants.items)}</td>
                                            <td>
                                                <span className={s.icon}><Eye /></span>
                                                <span onClick={() => null} className={s.icon}><Copy /></span>
                                                <span onClick={() => null} className={s.icon}><Pencil /></span>
                                                <span className={s.icon}><Arrow2 /></span>
                                                <span className={s.icon + " " + s.translate1}><Arrow2 /></span>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
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
    );
};

export default CategoriesAndProducts;
