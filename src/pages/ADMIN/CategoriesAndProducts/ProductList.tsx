import React, { FC } from "react";
import update from 'immutability-helper'
import DraggableProductItem from "./DraggableProductItem";
import { Product } from "./ProductTypes";
import Loader from "../../../components/Loader/Loader";
import axios from 'axios'
import {notification} from 'antd'

interface ProductListProps {
    items: Product[] | undefined;
    url: string,
    currentPage: number;
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductList: FC<ProductListProps> = ({ items, setProducts, url, currentPage, }) => {
    const token = localStorage.getItem('token')
    const moveItem = (dragIndex: number, hoverIndex: number) => {
        setProducts((prevCards: Product[]) =>
            update(prevCards, {
              $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, prevCards[dragIndex] as Product],
              ],
            }),
          )
          console.log(12)
    };

    const onDragEnd = async (updatedItems: Product[]) => {
        try {
            // Отправка обновленного списка на сервер
            
            await axios.post(`http://localhost:4000/api/products/reorder`, {
                items: updatedItems,
                page: currentPage
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            notification.success({ message: "Изменения сохранены!", duration: 2 });
        } catch (e) {
            console.error(e);
            notification.error({ message: "Ошибка сохранения изменений!", duration: 2 });
        }
    };

    return (
        <tbody>
        {items ? items.sort().map((item, index) => (
            <DraggableProductItem
                url1={url}
                key={item._id}
                items={items}
                index={index}
                item={item}
                length={items.length}
                moveItem={moveItem}
                currentPage={currentPage} // Передача currentPage
                onDragEnd={onDragEnd}  // Передача функции завершения drag-and-drop
            />
        )) : <Loader />}
        </tbody>
    );
};
export default ProductList;