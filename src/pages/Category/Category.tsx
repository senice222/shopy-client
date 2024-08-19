import Layout from "../../layouts/Layout";
import { useNavigate, useParams } from "react-router-dom";
import style from "./Category.module.scss";
import ProductItem from "../../components/Products/Item/ProductItem";
import styles from "../../components/Categories/Categories.module.scss";
import { useEffect, useMemo, useState } from "react";
import LeftArrow from "../../components/LeftArrow/LeftArrow";
import Slider from "../../components/Slider/Slider";
import { AddedToFav } from "../../components/AddedToFav/AddedToFav";
import Search from "../../components/Search/Search";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { addToFavorite, deleteFromFavorite, FavoriteItem } from "../../store/features/favoriteSlice";
import { useTelegram } from "../../hooks/useTelegram";
import { motion } from "framer-motion";
import Loader from "../../components/Loader/Loader";
import useSWR from "swr";
import { fetcher, url } from "../../core/fetch";
import { Product } from "../../interfaces/Product";

const Category = () => {
    const { category } = useParams();
    const { data: items } = useSWR(`${url}/api/products/category/${category}/null`, fetcher);
    const [added, setAdded] = useState(false);
    const [isAdd, setIsAdd] = useState(false);
    const [subCategory, setSubCategory] = useState<string>('');
    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state.favorite.items);
    const navigate = useNavigate();
    const { onBackButtonClick } = useTelegram();
    
    const getAllSubCategories = useMemo(() => {
        return items ? Array.from(new Set(items.products.map((item: Product) => item.category.subcategory))) : [];
    }, [items]);

    const filteredItems = useMemo(() => {
        return !subCategory ? items?.products : items?.products.filter((item: Product) => item.category.subcategory === subCategory);
    }, [subCategory, items]);

    useEffect(() => {
        onBackButtonClick(() => navigate('/'));
        return () => onBackButtonClick(null);
    }, [onBackButtonClick, navigate]);

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
    };

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.125,
            },
        },
    };

    if (!filteredItems) return <Loader />;

    return (
        <Layout notAnimated={true}>
            <Slider />
            <AddedToFav isAdd={isAdd} isOpen={added} setOpen={() => setAdded(false)} />
            <div className={styles.category}>
                <div className={`${styles.category__content} ${styles.container}`}>
                    <div className={style.wrappLeft}>
                        <LeftArrow isCategory={true} title={category} marginLeft={"0px"} />
                    </div>
                    {getAllSubCategories.map((sub: any) => (
                        <motion.div
                            key={sub.toString()}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            className={style.subcategories}
                            onClick={() => setSubCategory(sub)}
                        >
                            {sub}
                        </motion.div>
                    ))}
                    <div className={style.products}>
                        <motion.div
                            variants={containerVariants}
                            className={`${style.container} ${style.productsContainer}`}
                        >
                            {filteredItems.length > 0 ? (
                                filteredItems.map((item: any) => (
                                    <ProductItem
                                        key={item._id}
                                        toFav={setAddedFunc}
                                        name={item.name}
                                        price={Math.min(...item.variants.items.map((variant: any) => variant.price))}
                                        img={item.img}
                                        id={item._id}
                                    />
                                ))
                            ) : (
                                <p>No products available.</p>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Category;