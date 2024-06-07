import {FavoriteItem} from "../store/features/favoriteSlice";
import {Dispatch, SetStateAction} from "react";

export interface ModalAndFavorite {
    setAddedFunc: (isAdd: boolean, item: FavoriteItem) => void,
    isAdd: boolean;
    added: boolean;
    setAdded: Dispatch<SetStateAction<boolean>>;
}