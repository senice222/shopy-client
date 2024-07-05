import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface OptionalItem {
    name: string;
    value: string;
}

export interface CartItem {
    id: string;
    main: {
        name?: string;
        price?: number;
    };
    optional: OptionalItem[];
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            if (state.items.length >= 0) {
                state.items = []
                state.items.push(action.payload)
            } else {
                state.items.push(action.payload);
            }
        },
        setCart: (state, action: PayloadAction<CartItem[]>) => {
            state.items = action.payload;
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    },
});

export const {addToCart, setCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;