import { useEffect, useMemo, useCallback } from 'react';
import { useTelegram } from './useTelegram';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from "./redux-hooks";
import { addToCart, CartItem, MainItem, removeFromCart } from "../store/features/cartSlice";

const useCartManagement = (
    currentItem: MainItem,
    id: string,
    selectedVariants: any,
    price: number | undefined,
    redirect: () => void,
    variantId: string
) => {
    const dispatch = useAppDispatch();
    const { tg } = useTelegram();
    const cartItems = useAppSelector((state: any) => state.cart.items);

    const transformSelectedVariantsToOptional = useCallback(() => {
        const select = selectedVariants[id];
        if (!select) return [];

        return Object.values(select).map((variant: any) => ({
            name: variant.label,
            value: variant.option
        }));
    }, [selectedVariants, id]);

    const newItem: CartItem = useMemo(() => ({
        id: uuidv4(),
        variantId,
        main: {
            id: currentItem?._id,
            name: currentItem?.name,
            price,
        },
        optional: transformSelectedVariantsToOptional()
    }), [currentItem, price, transformSelectedVariantsToOptional, variantId]);

    const isCart = useMemo(() => cartItems.some((item: any) => item?.main?.name === newItem.main.name), [cartItems, newItem.main.name]);

    const handleAddOrRemoveFromCart = useCallback(() => {
        const existingItem = cartItems.find((item: CartItem) => item.main.name === newItem.main.name);
        if (existingItem) {
            dispatch(removeFromCart(existingItem.id));
        } else {
            dispatch(addToCart(newItem));
        }
    }, [cartItems, dispatch, newItem]);

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
