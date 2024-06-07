import { createSlice } from '@reduxjs/toolkit'

export interface FavoriteItem {
    id: string;
    name: string;
    img: string;
    price: number;
}

interface FavoriteState {
    items: FavoriteItem[];
}

const initialState: FavoriteState = {
    items: [],
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            state.items.push(action.payload)
        },
        deleteFromFavorite: (state, action) => {
            const {id} = action.payload
            state.items = state.items.filter(item => item.id !== id)
        }
    },
})

export const { addToFavorite, deleteFromFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer