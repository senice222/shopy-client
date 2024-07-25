import style from './Products.module.scss'
import ProductItem from "./Item/ProductItem";
import LeftArrow from "../LeftArrow/LeftArrow";
import RightArrow from "../RightArrow/RightArrow";
import { AddedToFav } from "../AddedToFav/AddedToFav";
import {FC} from "react";
import {ModalAndFavorite} from "../../interfaces/ModalAndFavorite";
import useSWR from "swr";
import {fetcher, url} from "../../core/fetch";
import {Product} from "../../interfaces/Product";
import Loader from "../Loader/Loader";
import {getMinPrice} from "../../utils/utils";

const ProductsList:FC<ModalAndFavorite> = ({setAddedFunc, isAdd, added, setAdded}) => {
    const {data} = useSWR(`${url}/api/products`, fetcher)

    if (!data) return <Loader />


    return (
        <>
            <AddedToFav isAdd={isAdd} isOpen={added} setOpen={() => setAdded(false)} />
            <div className={style.products}>
                <div className={`${style.container} ${style.productsContainer}`}>
                    {
                        data ? (
                            data.products.map((item: Product) => {
                                return (
                                    <ProductItem
                                        toFav={setAddedFunc}
                                        name={item.name}
                                        price={9}
                                        img={item.img}
                                        id={item._id}
                                    />
                                );
                            } )
                        ) : <p>laoding.</p>
                    }
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
