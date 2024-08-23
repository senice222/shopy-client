import React, { FC } from "react";
import update from 'immutability-helper'
import DraggableProductItem from "./DraggableProductItem";
import { Product } from "./ProductTypes";
import Loader from "../../../components/Loader/Loader";
import axios from 'axios'
import { notification } from 'antd'
import useSWR, { useSWRConfig } from "swr";

interface ProductListProps {
    items: Product[] | undefined;
    url: string,
    currentPage: number;
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductList: FC<ProductListProps> = ({ items, setProducts, url, currentPage, }) => {
    const token = localStorage.getItem('token')
    const { mutate } = useSWRConfig()

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
            await axios.post(`${url}/api/products/reorder`, {
                items: updatedItems,
                page: currentPage
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            await mutate(`${url}/api/products/?page=${currentPage}&limit=10`)
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
                    currentPage={currentPage}
                    onDragEnd={onDragEnd}
                />
            )) : <Loader />}
        </tbody>
    );
};
export default ProductList;