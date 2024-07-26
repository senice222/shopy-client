import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { addToFavorite, deleteFromFavorite, FavoriteItem } from "../store/features/favoriteSlice";
import { useState } from "react";

function useFavoriteManager() {
    const [added, setAdded] = useState<boolean>(false);
    const [isAdd, setIsAdd] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state.favorite.items);

    const setAddedFunc = (isAdd: boolean, item: FavoriteItem) => {
        setIsAdd(isAdd);
        dispatch(deleteFromFavorite(item.id));

        const product = state.find((el) => el.id === item.id);

        if (!product) {
            setIsAdd(true);
            setAdded(true);
            dispatch(addToFavorite(item));
        } else {
            dispatch(deleteFromFavorite({ id: item.id }));
            setIsAdd(false);
            setAdded(true);
        }

        setTimeout(() => {
            setAdded(false);
        }, 2500);
    };

    return { setAddedFunc, isAdd, added, setAdded };
}

export default useFavoriteManager;
