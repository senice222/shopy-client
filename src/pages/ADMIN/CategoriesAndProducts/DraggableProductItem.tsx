import React, { FC, useRef } from "react";
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes, Product } from "./ProductTypes";
import s from './CategoriesAndProducts.module.scss';
import { Copy, Eye, Pencil, Arrow2 } from "./Svg";

interface DraggableProductItemProps {
    item: Product;
    index: number;
    moveItem: (fromIndex: number, toIndex: number) => void;
    length: number
}

const DraggableProductItem: FC<DraggableProductItemProps> = ({ item, index, moveItem, length }) => {
    const ref = useRef<HTMLTableRowElement>(null);

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
                <span className={s.icon}><Eye /></span>
                <span onClick={() => null} className={s.icon}><Copy /></span>
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
