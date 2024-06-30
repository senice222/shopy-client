import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
    name: string;
    price: number;
    План: string;
    Длительность: string;
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
      state.items.push(action.payload);
    },
    setCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },
  },
});

export const { addToCart, setCart } = cartSlice.actions;

export default cartSlice.reducer;
