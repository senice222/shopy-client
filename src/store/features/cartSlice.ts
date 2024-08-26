import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MainItem {
    img: string;
    price: number;
    name: string;
    id: number;
    _id: string;
}

export interface OptionalItem {
    name: string;
    value: string;
}

export interface CartItem {
    id: string;
    variantId: string
    main: {
        name?: string;
        price?: number;
        id: string;
        originalPrice?: number;
        discount?: number;
    };
    optional: OptionalItem[];
}

export interface CartState {
    items: CartItem[];
    promo: string | null;
}

const initialState: CartState = {
    items: [],
    promo: null
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            if (state.items.length >= 0) {
                state.items = []
            }

            if (state.promo && action.payload.main.price) {
                action.payload.main.originalPrice = action.payload.main.price;

                const discountAmount = parseFloat(state.promo);
                action.payload.main.price = action.payload.main.price - discountAmount;
                action.payload.main.discount = discountAmount;
            }

            state.items.push(action.payload);
        },
        setCart: (state, action: PayloadAction<CartItem[]>) => {
            state.items = action.payload;
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
        addPromo: (state, action: PayloadAction<string>) => {
            state.promo = action.payload;
            if (state.items[0]?.main.price) {
                state.items[0].main.originalPrice = state.items[0].main.price;
                state.items[0].main.discount = parseFloat(action.payload);
                state.items[0].main.price = state.items[0].main.price - state.items[0].main.discount;
            }
        }
    },
});

export const { addToCart, setCart, removeFromCart, clearCart, addPromo } = cartSlice.actions;

export default cartSlice.reducer;