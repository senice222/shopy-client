import AdminLayout from "../../../layouts/AdminLayout";
import s from './CategoriesAndProducts.module.scss';
import { Arrow, Arrow2, Copy, Eye, Pencil } from "./Svg";
import React, { FC, useState, useRef } from "react";
import style from "../Users/Users.module.scss";
import avatar from '../../../assets/Avatar.png';
import Pagination from "../../../components/Pagination/Pagination";
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface CategoryItemI {
    main: string;
    sub: string[];
}

const ItemTypes = {
    PRODUCT: 'product',
};

interface ProductVariant {
    price: number;
    properties: never[];
    count: number;
    visible: boolean;
    description: string;
}

interface Product {
    id: number;
    name: string;
    img: string;
    variants: {
        items: ProductVariant[];
    };
}

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

interface Item {
    price: number;
    properties: never[];
    count: number;
    visible: boolean;
    description: string;
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

const highestPrice = (items: Item[]) => {
    const itemsCopied = [...items].sort((a, b) => a.price - b.price);
    const lowest = itemsCopied[0].price;
    const highest = itemsCopied[itemsCopied.length - 1].price;
    return lowest === highest ? <div>{lowest}₽</div> : <div>{lowest}₽ - {highest}₽</div>;
};

interface DraggableProductItemProps {
    item: Product;
    index: number;
    moveItem: (fromIndex: number, toIndex: number) => void;
}

const DraggableProductItem: FC<DraggableProductItemProps> = ({ item, index, moveItem }) => {
    const ref = useRef<HTMLTableRowElement>(null);

    const [, drop] = useDrop({
        accept: ItemTypes.PRODUCT,
        hover: (draggedItem: { index: number }) => {
            if (draggedItem.index !== index) {
                moveItem(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.PRODUCT,
        item: { type: ItemTypes.PRODUCT, index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    drag(drop(ref));

    return (
        <tr ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <td><img src={item.img} alt={item.name} /></td>
            <td>{item.name}</td>
            <td>{highestPrice(item.variants.items)}</td>
            <td>
                <span className={s.icon}><Eye /></span>
                <span onClick={() => null} className={s.icon}><Copy /></span>
                <span onClick={() => null} className={s.icon}><Pencil /></span>
                <span className={s.icon}><Arrow2 /></span>
                <span className={`${s.icon} ${s.translate1}`}><Arrow2 /></span>
            </td>
        </tr>
    );
};

interface ProductListProps {
    items: Product[];
    setItems: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductList: FC<ProductListProps> = ({ items, setItems }) => {
    const moveItem = (fromIndex: number, toIndex: number) => {
        const updatedItems = [...items];
        const [movedItem] = updatedItems.splice(fromIndex, 1);
        updatedItems.splice(toIndex, 0, movedItem);
        setItems(updatedItems);
    };

    return (
        <tbody>
        {items.map((item, index) => (
            <DraggableProductItem
                key={item.id}
                index={index}
                item={item}
                moveItem={moveItem}
            />
        ))}
        </tbody>
    );
};

const CategoriesAndProducts: FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages: number = 10; // Общее количество страниц
    const [productList, setProductList] = useState<Product[]>(initialProductList);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <DndProvider backend={HTML5Backend}>
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
