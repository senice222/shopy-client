import style from './Products.module.scss'
import ProductItem from "./Item/ProductItem";
import LeftArrow from "../LeftArrow/LeftArrow";
import RightArrow from "../RightArrow/RightArrow";
import { AddedToFav } from "../AddedToFav/AddedToFav";
import {items} from "../../utils/dummy_data";
import {FC} from "react";
import {ModalAndFavorite} from "../../interfaces/ModalAndFavorite";

const ProductsList:FC<ModalAndFavorite> = ({setAddedFunc, isAdd, added, setAdded}) => {

    return (
        <>
            <AddedToFav isAdd={isAdd} isOpen={added} setOpen={() => setAdded(false)} />
            <div className={style.products}>
                <div className={`${style.container} ${style.productsContainer}`}>
                    {items.map((item) => <ProductItem toFav={setAddedFunc} name={item.name} price={item.price} img={item.img} id={item.id}/> )}
                </div>
                <div className={style.paginationDiv}>
                    <LeftArrow isCategory={false} />
                    <p>Страница 1 из 10</p>
                    <RightArrow />
                </div>
            </div>
        </>
    );
};

export default ProductsList;
