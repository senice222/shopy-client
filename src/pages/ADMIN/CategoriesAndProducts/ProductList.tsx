import React, { FC } from "react";
import DraggableProductItem from "./DraggableProductItem";
import { Product } from "./ProductTypes";

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

export default ProductList;