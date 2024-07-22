export interface Product {
    name: string
    img: string
    description: string
    category: Category
    variants: Variant[]
    features: Features
    _id: string
    __v: number
}

export interface VariantItem {
    price: number;
    oldPrice: number;
    visible: boolean;
    value: string;
    label?: string;
}

export interface Category {
    main: string
    subcategory: string
}

export interface Variant {
    label: string
    items: Item[]
}

export interface Item {
    price: number
    oldPrice: number
    visible: boolean
    value: string
}

export interface Features {
    title: string
    description: string
}
