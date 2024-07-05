import AdminLayout from "../../../layouts/AdminLayout";
import s from './CategoriesAndProducts.module.scss';
import { Arrow } from "./Svg";
import React, { FC, useState } from "react";
import style from "../Users/Users.module.scss";
import avatar from '../../../assets/Avatar.png'

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
                                            <span className={style.icon}>👤</span>
                                            <span onClick={() => null} className={style.icon}>💬</span>
                                            <span onClick={() => null} className={style.icon}>➕</span>
                                            <span className={style.icon}>🔒</span>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

        </AdminLayout>
    );
};

export default CategoriesAndProducts;
