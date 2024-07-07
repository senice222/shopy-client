import Layout from "../../layouts/Layout";
import {useNavigate, useParams} from "react-router-dom";
import style from "./Category.module.scss";
import ProductItem from "../../components/Products/Item/ProductItem";
import styles from "../../components/Categories/Categories.module.scss";
import {useEffect, useState} from "react";
import LeftArrow from "../../components/LeftArrow/LeftArrow";
import Slider from "../../components/Slider/Slider";
import { AddedToFav } from "../../components/AddedToFav/AddedToFav";
import Search from "../../components/Search/Search";
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import {addToFavorite, deleteFromFavorite, FavoriteItem} from "../../store/features/favoriteSlice";
import {useTelegram} from "../../hooks/useTelegram";
let items = [
    {
        id: 1,
        name: "Product 1",
        price: 10.99,
        img: "https://picsum.photos/200/300?random=1"
    },
    {
        id: 2,
        name: "Product 2",
        price: 5.99,
        img: "https://picsum.photos/200/300?random=2"
    },
    {
        id: 3,
        name: "Product 3",
        price: 7.99,
        img: "https://picsum.photos/200/300?random=3"
    },
    {
        id: 4,
        name: "Product 4",
        price: 12.99,
        img: "https://picsum.photos/200/300?random=4"
    },
    {
        id: 5,
        name: "Product 5",
        price: 8.99,
        img: "https://picsum.photos/200/300?random=5"
    },
    {
        id: 6,
        name: "Product 6",
        price: 15.99,
        img: "https://picsum.photos/200/300?random=6"
    },
    {
        id: 7,
        name: "Product 7",
        price: 9.99,
        img: "https://picsum.photos/200/300?random=7"
    },
    {
        id: 8,
        name: "Product 8",
        price: 11.99,
        img: "https://picsum.photos/200/300?random=8"
    },
    {
        id: 9,
        name: "Product 9",
        price: 13.99,
        img: "https://picsum.photos/200/300?random=9"
    },
    {
        id: 10,
        name: "Product 10",
        price: 14.99,
        img: "https://picsum.photos/200/300?random=10"
    }
];
const Category = () => {
    const { category } = useParams()
    const [added, setAdded] = useState(false)
    const [isAdd, setIsAdd] = useState(false)
    const { showBackButton, hideBackButton, onBackButtonClick } = useTelegram();
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.favorite.items)
    const navigate = useNavigate()

    useEffect(() => {
        showBackButton();
        onBackButtonClick(() => navigate('/'));

        return () => {
            hideBackButton();
        };
    }, [showBackButton, hideBackButton, onBackButtonClick]);

    const setAddedFunc = (isAdd: boolean, item: FavoriteItem) => {
        setIsAdd(isAdd)
        dispatch(deleteFromFavorite(item.id))
        const product = state.find((el) => {
            console.log(el.id,1)
            console.log(item.id,2)
            return (
                el.id === item.id
            )
        })

        if (!product) {
            setIsAdd(true)
            setAdded(true)
            dispatch(addToFavorite(item))
        } else {
            dispatch(deleteFromFavorite({id : item.id}))
            setIsAdd(false)
            setAdded(true)
        }
    }
    return (
        <Layout notAnimated={true}>
            <Slider />
            <Search />
            <AddedToFav isAdd={isAdd} isOpen={added} setOpen={() => setAdded(false)} />
            <div className={styles.category}>
                <div className={`${styles.category__content} ${styles.container}`}>
                    <div className={style.wrappLeft}>
                        <LeftArrow isCategory={true} title={"Музыка"} marginLeft={"0px"} />
                    </div>
                    <div className={style.products}>
                        <div className={`${style.container} ${style.productsContainer}`}>
                            {items.map((item) => <ProductItem toFav={setAddedFunc} name={item.name} price={item.price} img={item.img} id={item.id}/> )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Category;
