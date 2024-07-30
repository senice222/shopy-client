import React, { FC, useRef } from "react";
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes, Product } from "./ProductTypes";
import s from './CategoriesAndProducts.module.scss';
import { Copy, Eye, Pencil, Arrow2 } from "./Svg";
import axios from "axios";
import {url} from "../../../core/fetch";
import {a} from "react-spring";
import {notification} from "antd";
import useSWR, {useSWRConfig} from "swr";

interface DraggableProductItemProps {
    item: Product;
    index: number;
    moveItem: (fromIndex: number, toIndex: number) => void;
    length: number,
    url1: string

}

const DraggableProductItem: FC<DraggableProductItemProps> = ({ item, index, moveItem, length, url1 }) => {
    const ref = useRef<HTMLTableRowElement>(null);


    const {mutate} = useSWRConfig()
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5MTMwYTFjNmJlMDkwYjJiOTk5NWYiLCJpYXQiOjE3MjIzMjU1OTYsImV4cCI6MTcyMzYyMTU5Nn0.4eYfUtwwwZCd2hgioIzpIq4MHUVUnWQAXTcoCV6keQE'

    const changeVisibility = async () => {
        try {
            console.log(item._id, 221)

                const {data} = await axios.post(`${url}/api/product/${item._id}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
                )
                if (data) {
                    notification.success({ message: `Видимость ${data.value ? 'Включена' : 'Выключена'}`, duration: 2 })
                }

        } catch (e) {
            console.log(e)
        }
    }
    const copyDocument = async () => {
        try {
            console.log(item._id, 221)

            const {data} = await axios.post(`http://localhost:4000/api/product/copy/${item._id}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            if (data) {
                await mutate(url1)
                notification.success({ message: `Скопировано успешно!`, duration: 2 })
            }

        } catch (e) {
            console.log(e)
        }
    }
    const moveLeft = () => {
        if (index > 0) {
            moveItem(index, index - 1);
        }
    };

    const moveRight = () => {
        if (index < length - 1) {
            moveItem(index, index + 1);
        }
    };

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
            <td className={s.name}>{item.name}</td>
            <td className={s.price}>{highestPrice(item.variants.items)}</td>
            <td className={s.lastTd}>
                <span onClick={changeVisibility} className={s.icon}><Eye /></span>
                <span onClick={copyDocument} className={s.icon}><Copy /></span>
                <span onClick={() => null} className={s.icon}><Pencil /></span>
                <span className={s.icon} onClick={moveLeft}><Arrow2 /></span>
                <span className={`${s.icon} ${s.translate1}`} onClick={moveRight}><Arrow2 /></span>
            </td>
        </tr>
    );
};

const highestPrice = (items: Product['variants']['items']) => {
    const itemsCopied = [...items].sort((a, b) => a.price - b.price);
    const lowest = itemsCopied[0].price;
    const highest = itemsCopied[itemsCopied.length - 1].price;
    return lowest === highest ? <div>{lowest}₽</div> : <div>{lowest}₽ - {highest}₽</div>;
};

export default DraggableProductItem;
