export interface SavedAccount {
    id: string;
    service: string;
    email: string;
    password: string;
    image: string;
}

export interface User {
    _id: string;
    id: number;
    username: string;
    status: string;
    balance: number;
    cashbackPercent: number;
    refPercent: number;
    refLink: string;
    amountRefs: [];
    activeSubs: [];
    registered: Date;
    __v: number;
    cart: [];
    savedAccounts: SavedAccount[];
    orderIds: Order[];
}

interface OrderItem {
    productId: string;
    quantity: number;
}

export interface Order {
    customerId: string;
    date: string;
    email: string;
    existedAcc: string;
    items: OrderItem[];
    password: string;
    status: 'payed' | 'in work' | 'cancelled' | 'refund';
    _id: string;
    __v: number;
}

export interface OrderProps {
    order: {
        customerId: string;
        date: string;
        email: string;
        existedAcc: string;
        items: OrderItem[];
        password: string;
        status: 'payed' | 'in work' | 'cancelled' | 'refund';
        _id: string;
        __v: number;
    }
}

export interface UserProps {
    user: User
}