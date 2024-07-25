import style from './DetailedProduct.module.scss';
import Layout from "../../layouts/Layout";
import prdct from '../../assets/detailed.png';
import percent from '../../assets/svg/percent-03.svg';
import Button from "../../components/Button/Button";
import {useNavigate, useParams} from 'react-router-dom';
import {FC, useCallback, useEffect, useState, useMemo} from "react";
import {ModalAndFavorite} from "../../interfaces/ModalAndFavorite";
import {AddedToFav} from "../../components/AddedToFav/AddedToFav";
import redHeart from '../../assets/heart.png';
import {useTelegram} from "../../hooks/useTelegram";
import FAQ from "./FAQ/FAQ";
import useCartManagement from "../../hooks/useCartManagement";
import Loader from "../../components/Loader/Loader";
import useSWR from "swr";
import {fetcher, url} from "../../core/fetch";
import {Variant, VariantItem, SelectedVariants, Properties, Product} from "../../interfaces/Product";
import {useCompare} from "../../hooks/product/useCompare";
import VariantSelector from "./VariantSelector/VariantSelector";
import {useInitializeSelectedVariants} from "../../hooks/product/useInitializeSelectedVariants";

export const DetailedProduct: FC<ModalAndFavorite> = ({setAddedFunc, isAdd, added, setAdded}) => {
    const [favouriteStatus, setFavouriteStatus] = useState(false);
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();
    const {tg, onBackButtonClick} = useTelegram();
    const {data} = useSWR(`${url}/api/product/${id}`, fetcher);
    const [selectedVariants, setSelectedVariants] = useState<SelectedVariants>({});
    const [price, setPrice] = useState<number>()
    const compare = useCompare(data, selectedVariants, id);
    useInitializeSelectedVariants(data, setSelectedVariants);

    const redirect = useCallback(() => {
        navigate('/basket');
        window.scrollTo({top: 0});
        tg.MainButton.hide();
    }, [navigate, tg]);

    const { handleAddOrRemoveFromCart, isCart } = useCartManagement(
        data,
        id ? id : "669fb3e3d647bea888e5aa11",
        selectedVariants,
        price,
        redirect
    );

    useEffect(() => {
        const product = compare();
        if (product && product.length > 0) {
            setPrice(product[0].price);
        }
    }, [id, selectedVariants, compare]);

    useEffect(() => {
        onBackButtonClick(() => navigate('/'));
        return () => {
            onBackButtonClick(null);
        };
    }, [onBackButtonClick, navigate]);

    const handleVariantChange = (propertyId: string, dataId: string, option: string) => {
        setSelectedVariants((prevState: any) => ({
            ...prevState,
            [dataId]: {
                ...prevState[dataId],
                [propertyId]: option
            }
        }));
    };

    if (!data) return <Loader/>;

    return (
        <div className={style.background}>
            <AddedToFav isAdd={isAdd} isOpen={added} setOpen={() => setAdded(false)}/>
            <Layout>
                <div className={style.productContainer}>
                    <div className={style.imgCont}>
                        <img src={prdct} alt="Product"/>
                    </div>
                    <div className={style.wrappInfo}>
                        <div className={style.info}>
                            <h2>{data.name}</h2>
                            <div>
                                <h1>{price}₽</h1>
                                <h3>798₽</h3>
                                <div className={style.skidka}>-50%</div>
                            </div>
                            <p>+ 3% кешбека</p>
                        </div>
                        <div className={style.promotionDiv}>
                            <div className={style.promotionImg}>
                                <img src={percent} alt="Promotion"/>
                            </div>
                            <div className={style.promotionText}>
                                <h2>Два месяца по цене одного!</h2>
                                <p>Действует для новых клиентов Shopy при регистрации нового аккаунта.</p>
                            </div>
                        </div>
                        {data && (
                            <VariantSelector
                                data={data}
                                selectedVariants={selectedVariants}
                                handleVariantChange={handleVariantChange}
                            />
                        )}
                        <div className={style.btnAddToCart}>
                            <div className={style.heart}>
                                {favouriteStatus ? (
                                    <img
                                        src={redHeart}
                                        alt="Favourite"
                                        onClick={() => {
                                            setFavouriteStatus(!favouriteStatus);
                                            setAddedFunc(true, {
                                                id: String(data._id),
                                                name: data.name,
                                                price: 350,
                                                img: `${url}/api/uploads/${data.img}`
                                            });
                                        }}
                                    />
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        className={favouriteStatus ? style.heartFilled : style.svg}
                                        onClick={() => {
                                            setFavouriteStatus(!favouriteStatus);
                                            setAddedFunc(true, {
                                                id: String(data._id),
                                                name: data.name,
                                                price: 350,
                                                img: `${url}/api/uploads/${data.img}`
                                            });
                                        }}
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M9.99428 4.27985C8.32816 2.332 5.54978 1.80804 3.46224 3.59168C1.37469 5.37532 1.0808 8.35748 2.72015 10.467C4.08317 12.2209 8.20813 15.9201 9.56007 17.1174C9.71133 17.2513 9.78695 17.3183 9.87517 17.3446C9.95216 17.3676 10.0364 17.3676 10.1134 17.3446C10.2016 17.3183 10.2772 17.2513 10.4285 17.1174C11.7804 15.9201 15.9054 12.2209 17.2684 10.467C18.9078 8.35748 18.6498 5.35656 16.5263 3.59168C14.4029 1.8268 11.6604 2.332 9.99428 4.27985Z"
                                            stroke="#344054"
                                            strokeWidth="1.66667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                            </div>
                            <div className={style.divBtn} onClick={handleAddOrRemoveFromCart}>
                                <Button
                                    text={isCart ? "Удалить из корзины" : "Добавить в корзину"}
                                    height={"100%"}
                                    width={"100%"}
                                />
                            </div>
                        </div>
                        <FAQ/>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

// handleAddOrRemoveFromCart
