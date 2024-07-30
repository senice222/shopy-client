import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from './features/favoriteSlice'
import cartReducer from './features/cartSlice'
import accountReducer from './features/accountSlice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import adminSlice from "./features/AdminSlice";

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    cart: persistReducer(persistConfig, cartReducer),
    favorite: persistReducer(persistConfig, favoriteReducer),
    account: accountReducer,
    admin: adminSlice
});

const store = configureStore({
    reducer: rootReducer,
});

const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch