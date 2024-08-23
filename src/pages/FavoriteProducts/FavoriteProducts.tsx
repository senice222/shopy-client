import styles from './FavoriteProducts.module.scss'
import Layout from "../../layouts/Layout";
import { useAppSelector } from "../../hooks/redux-hooks";
import { FC, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { AddedToFav } from "../../components/AddedToFav/AddedToFav";
import { ModalAndFavorite } from "../../interfaces/ModalAndFavorite";
import nothing from '../../assets/Illustrationnothing.png'
import BlueButton from "../../components/Button/Button";
import { FavoriteItem } from '../../store/features/favoriteSlice';
import { url } from '../../core/fetch';

const FavoriteProducts: FC<ModalAndFavorite> = ({ setAddedFunc, isAdd, added, setAdded }) => {
    const state = useAppSelector(state => state.favorite.items)
    const navigate = useNavigate()

    const handleClick = (item: FavoriteItem) => {
        navigate(`/product/${item.id}`);
        window.scrollTo({ top: 0 });
    };

    return (
        <div className={styles.wrapp}>
            <Layout>
                <AddedToFav isAdd={isAdd} isOpen={added} setOpen={() => setAdded(false)} />
                <div className={styles.favoriteContainer}>
                    <div className={styles.titleHeader}>
                        <h2 className={styles.text}>Избранное</h2>
                    </div>
                    {state.length > 0 ? state.map((item, i) => (
                        <Fragment key={i}>
                            <div className={styles.container}>
                                <div className={styles.productCard}>
                                    <div className={styles.productCardTop}>
                                        <div className={styles.icon}>
                                            <svg
                                                className={styles.heartFilled}
                                                onClick={() => {
                                                    setAddedFunc(false, {
                                                        id: String(item.id),
                                                        name: item.name,
                                                        img: item.img,
                                                        price: item.price
                                                    })
                                                }}
                                                width="25px" height="25px" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                <g transform="translate(0 -1028.4)">
                                                    <path
                                                        d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z"
                                                        fill="#e74c3c" />
                                                </g>
                                            </svg>
                                        </div>
                                        <img style={{ width: '165px', height: '165px' }} src={`${url}/api/uploads/${item.img}`} alt="Spotify Premium Image" />
                                    </div>
                                    <div className={styles.productCardBottom} onClick={() => handleClick(item)}>
                                        <h3 className={styles.cardTitle}>{item.name}</h3>
                                        <span className={styles.price}>от {item.price}₽</span>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )) : (
                        <div className={styles.nothingYet}>
                            <img src={nothing} alt="/" />
                            <h2>Пока что тут ничего нет</h2>
                            <p>Нажимайте на сердечко в товаре, чтобы добавить товар в избранное. Он отобразится здесь.</p>
                            <div>
                                <BlueButton text={"Перейти в каталог"} height={"48px"} width={"100%"} />
                            </div>
                        </div>
                    )}

                </div>
            </Layout>
        </div>
    );
};

export default FavoriteProducts;
