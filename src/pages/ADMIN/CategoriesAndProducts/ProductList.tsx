import React, { FC } from "react";
import DraggableProductItem from "./DraggableProductItem";
import { Product } from "./ProductTypes";
import Loader from "../../../components/Loader/Loader";

interface ProductListProps {
    items: Product[] | undefined;
    url: string
    // setItems: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductList: FC<ProductListProps> = ({ items,url }) => {
    const moveItem = (fromIndex: number, toIndex: number) => {
        if (items) {
            const updatedItems = [...items];
            const [movedItem] = updatedItems.splice(fromIndex, 1);
            updatedItems.splice(toIndex, 0, movedItem);
            // setItems(updatedItems);
        }
    };

    return (
        <tbody>
        {items ? items.map((item, index) => (
            <DraggableProductItem
                url1={url}
                key={item._id}
                index={index}
                item={item}
                length={items.length}
                moveItem={moveItem}
            />
        )) : <Loader />}
        </tbody>
    );
};

export default ProductList;