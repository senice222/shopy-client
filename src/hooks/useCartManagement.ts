import { useCallback, useEffect } from 'react';
import { useTelegram } from './useTelegram';
import { v4 as uuidv4 } from 'uuid';
import {useAppDispatch, useAppSelector} from "./redux-hooks";
import {addToCart, CartItem, MainItem, removeFromCart} from "../store/features/cartSlice";

const useCartManagement = (currentItem: MainItem | undefined, redirect: () => void) => {
    const dispatch = useAppDispatch();
    const { tg } = useTelegram();
    const cartItems = useAppSelector((state: any) => state.cart.items);

    const newItem: CartItem = {
        id: uuidv4(),
        main: {
            name: currentItem?.name,
            price: currentItem?.price,
        },
        optional: [
            { name: 'План', value: 'Индивидуальный' },
            { name: 'Длительность', value: '1 месяц' },
        ],
    };
    const isCart = cartItems.some((item: any) => item.main.name === newItem.main.name);

    const handleAddOrRemoveFromCart = () => {
        const existingItem = cartItems.find((item: CartItem) => item.main.name === newItem.main.name);
        if (existingItem) {
            dispatch(removeFromCart(existingItem.id));
        } else {
            dispatch(addToCart(newItem));
        }
    };

    useEffect(() => {
        tg.onEvent('mainButtonClicked', redirect);
        return () => {
            tg.offEvent('mainButtonClicked', redirect);
        };
    }, [redirect, tg]);

    useEffect(() => {
        tg.MainButton.setParams({
            text: `Корзина (${cartItems.length})`
        });
    }, [cartItems, tg]);

    useEffect(() => {
        if (cartItems.length > 0) {
            tg.MainButton.show();
        } else {
            tg.MainButton.hide();
        }
    }, [cartItems, tg]);

    return { handleAddOrRemoveFromCart, isCart };
};

export default useCartManagement;
