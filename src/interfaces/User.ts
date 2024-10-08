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
    totalBuys: number;
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
    receivedReferral: number,
    referredBy: number
}

interface OrderItem {
    main: any;
    productId: string;
    quantity: number;
}

export interface Order {
    normalOrderId: number;
    customerId: string;
    date: string;
    email: string;
    existedAcc: string;
    items: OrderItem[];
    totalAmount: number;
    password: string;
    status: 'payed' | 'in work' | 'cancelled' | 'refund';
    _id: string;
    __v: number;
}

export interface OrderProps {
    order: Order
}

export interface UserProps {
    user: User
}
export interface UserDataProps {
    data: User
}