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
        id: string,
        label: string;
        option: string;
        banner?: {
            title: string,
            description: string
        }
    }[];
}

export interface ComparisonObject {
    id: string, label: string, option: string, banner?: {
        title: string,
        description: string
    }
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
    // property1: string;
    // property2: string;
    values: [];
    quantity: number;
    actions: string[];
}
export interface Properties {
    id: string;
    text: string;
    _id?: string;
}
export interface VariantItem {
    price: number;
    oldPrice: number;
    _id?: string;
    visible: boolean;
    id?: string;
    img: string;
    quantity: number,
    attachedId: string,
    values: Array<{ id: string, value: string }>;
    banner?: {
        description: string;
        title: string;
    };
}

export interface Variant {
    properties: Properties[],
    items: VariantItem[]
}

export interface Features {
    title: string
    description: string
}
