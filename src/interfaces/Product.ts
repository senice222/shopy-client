export interface Product {
    name: string
    img: string
    description: string
    category: Category
    variants: Variant
    features: Features
    _id: string
    __v: number
}

export interface SelectedVariants {
    [dataId: string]: {
        label: string;
        option: string;
    }[];
}

export interface ComparisonObject { label: string, option: string }

export interface Properties {
    id: string;
    text: string;
    _id: string;
}

export interface ValuesItem {
    id: string;
    value: string;
}

export interface Category {
    main: string
    subcategory: string
}

export interface TableRow {
    price: string;
    oldPrice: string;
    property1: string;
    property2: string;
    quantity: number;
    actions: string[];
}

export interface VariantItem {
    price: number;
    oldPrice: number;
    _id: string;
    visible: boolean;
    quantity: number,
    attachedId: string,
    values : [{id: string, value: string}]
}

export interface Variant {
    // label: string
    // items: Item[]
    properties: Properties[],
    items: VariantItem[]
}

export interface Features {
    title: string
    description: string
}
