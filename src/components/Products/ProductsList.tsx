import style from './Products.module.scss'
import ProductItem from "./Item/ProductItem";
import LeftArrow from "../LeftArrow/LeftArrow";
import RightArrow from "../RightArrow/RightArrow";
import { AddedToFav } from "../AddedToFav/AddedToFav";
import { FC, useState } from "react";
import { ModalAndFavorite } from "../../interfaces/ModalAndFavorite";
import useSWR from "swr";
import { fetcher, url } from "../../core/fetch";
import { Product, VariantItem } from "../../interfaces/Product";
import Loader from "../Loader/Loader";
import { getMinPrice } from "../../utils/utils";
import back from "../../assets/svg/arrow-left.svg";
import right from "../../assets/svg/arrow-right.svg";
import { motion } from 'framer-motion';
import styles from "../LeftArrow/LeftArrow.module.scss"

const ProductsList: FC<ModalAndFavorite> = ({ setAddedFunc, isAdd, added, setAdded }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 10;
    const { data } = useSWR(`${url}/api/products?page=${currentPage}&limit=${limit}`, fetcher);

    if (!data) return <Loader />
    const totalPages = data.totalPages

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
                                        price={Math.min(...item.variants.items.map((variant: VariantItem) => variant.price))}
                                        img={item.img}
                                        id={item._id}
                                    />
                                );
                            })
                        ) : <p>laoding.</p>
                    }
                </div>
                <div className={style.paginationDiv}>
                    <div className={styles.titleCategory}>
                        <div className={styles.backHome}>
                            <img
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                src={back}
                                alt="/"
                            />
                        </div>
                    </div>
                    <span>Страница {currentPage} из {totalPages}</span>
                    <div className={styles.titleCategory}>
                        <div className={styles.backHome}>
                            <img src={right} onClick={() => setCurrentPage(prev => (prev < totalPages ? prev + 1 : prev))} alt="/" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsList;
