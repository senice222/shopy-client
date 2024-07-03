import React, {FC, useState} from 'react';
import styles from './ProductItem.module.scss';
import {useNavigate} from "react-router-dom";
import {FavoriteItem} from "../../../store/features/favoriteSlice";

interface ProductItemI {
    toFav: (isAdd : boolean, item: FavoriteItem) => void,
    name: string,
    price: number,
    img: string,
    id: number
}

const ProductItem : FC<ProductItemI> = ({toFav, img, price, name, id}) => {
    const [favouriteStatus, setFavouriteStatus] = useState(false);
    const navigate = useNavigate()

    const handleClick = (id: number) => {
        navigate(`/product/${id}`);

        window.scrollTo({
            top: 0
        });
    };

    return (
        <div className={styles.productCard}>
            <div className={styles.productCardTop}>
                <div className={styles.icon}>
                    {favouriteStatus ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                onClick={() => {
                                    setFavouriteStatus(!favouriteStatus)
                                    toFav(false, {id: String(id), name, price, img})
                                }}
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.99428 4.27985C8.32816 2.332 5.54978 1.80804 3.46224 3.59168C1.37469 5.37532 1.0808 8.35748 2.72015 10.467C4.08317 12.2209 8.20813 15.9201 9.56007 17.1174C9.71133 17.2513 9.78695 17.3183 9.87517 17.3446C9.95216 17.3676 10.0364 17.3676 10.1134 17.3446C10.2016 17.3183 10.2772 17.2513 10.4285 17.1174C11.7804 15.9201 15.9054 12.2209 17.2684 10.467C18.9078 8.35748 18.6498 5.35656 16.5263 3.59168C14.4029 1.8268 11.6604 2.332 9.99428 4.27985Z"
                                    fill="#D92D20"
                                    stroke="#D92D20"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                    ) : (
                        <svg className={favouriteStatus ? styles.heartFilled : styles.svg}
                             onClick={() => {
                                 setFavouriteStatus(!favouriteStatus)
                                 toFav(true, {id: String(id) , name, price, img})
                             }
                        }
                             width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 4.528a6 6 0 0 0-8.243 8.715l6.829 6.828a2 2 0 0 0 2.828 0l6.829-6.828A6 6 0 0 0 12 4.528zm-1.172 1.644l.465.464a1 1 0 0 0 1.414 0l.465-.464a4 4 0 1 1 5.656 5.656L12 18.657l-6.828-6.829a4 4 0 0 1 5.656-5.656z"
                                fill="#0D0D0D"/>
                        </svg>
                    )}
                </div>
                <img style={{width: '165px', height: '165px'}} src={img} alt="Spotify Premium Image" onClick={() => handleClick(id)}/>
            </div>
            <div className={styles.productCardBottom} onClick={() => handleClick(id)}>
                <h3 className={styles.cardTitle}>{name}</h3>
                <span className={styles.price}>от {price}₽</span>
            </div>
        </div>
    )
};

export default ProductItem;
