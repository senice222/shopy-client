export interface ProductVariant {
    price: number;
    properties: never[];
    count: number;
    visible: boolean;
    description: string;
}

export interface Product {
    _id: number;
    name: string;
    img: string;
    variants: {
        items: ProductVariant[];
    };
}

export const ItemTypes = {
    PRODUCT: 'product',
};
