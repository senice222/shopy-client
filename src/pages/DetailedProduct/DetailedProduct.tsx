import style from './DetailedProduct.module.scss';
import Layout from "../../layouts/Layout";
import prdct from '../../assets/detailed.png';
import percent from '../../assets/svg/percent-03.svg';
import Button from "../../components/Button/Button";
import {useNavigate, useParams} from 'react-router-dom';
import {FC, useCallback, useEffect, useState} from "react";
import {ModalAndFavorite} from "../../interfaces/ModalAndFavorite";
import {AddedToFav} from "../../components/AddedToFav/AddedToFav";
import redHeart from '../../assets/heart.png';
import {useTelegram} from "../../hooks/useTelegram";
import FAQ from "./FAQ/FAQ";
import useCartManagement from "../../hooks/useCartManagement";
import Loader from "../../components/Loader/Loader";
import useSWR from "swr";
import {fetcher, url} from "../../core/fetch";
import {SelectedVariants, ComparisonObject} from "../../interfaces/Product";
import {useCompare} from "../../hooks/product/useCompare";
import VariantSelector from "./VariantSelector/VariantSelector";
import {useInitializeSelectedVariants} from "../../hooks/product/useInitializeSelectedVariants";
import {Heart} from "../ADMIN/CategoriesAndProducts/Svg";

export const DetailedProduct: FC<ModalAndFavorite> = ({setAddedFunc, isAdd, added, setAdded}) => {
    const [favouriteStatus, setFavouriteStatus] = useState(false);
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();
    const {tg, onBackButtonClick} = useTelegram();
    const {data} = useSWR(`${url}/api/product/${id}`, fetcher);
    const [selectedVariants, setSelectedVariants] = useState<SelectedVariants>({});
    const [price, setPrice] = useState<number>()
    const compare = useCompare(data, selectedVariants, id);
    const [variantId, setVariantId] = useState<string>('')
    useInitializeSelectedVariants(data, setSelectedVariants)

    if (!id) throw new Error("ID параметра не найден");

    const redirect = useCallback(() => {
        navigate('/basket');
        window.scrollTo({top: 0});
        tg.MainButton.hide();
    }, [navigate, tg]);

    const {handleAddOrRemoveFromCart, isCart} = useCartManagement(
        data,
        id,
        selectedVariants,
        price,
        redirect,
        variantId
    );

    useEffect(() => {
        const product = compare();
        if (product && product.length > 0) {
            setPrice(product[0].price);
            setVariantId(product[0]._id)
        }
    }, [id, selectedVariants, compare]);

    useEffect(() => {
        onBackButtonClick(() => navigate('/'));
        return () => {
            onBackButtonClick(null);
        };
    }, [onBackButtonClick, navigate]);

    const handleVariantChange = (tariff: string, dataId: string, option: string) => {
        setSelectedVariants((prevState: any) => {
            const currentData = prevState[dataId] || [];
            const updatedData = currentData.map((item: ComparisonObject) =>
                item.label === tariff
                    ? { ...item, option: option }
                    : item
            );

            if (!currentData.some((item: ComparisonObject) => item.label === tariff)) {
                updatedData.push({ label: tariff, option: option });
            }

            return {
                ...prevState,
                [dataId]: updatedData,
            };
        });
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
                                    <div onClick={() => {
                                        setFavouriteStatus(!favouriteStatus);
                                        setAddedFunc(true, {
                                            id: String(data._id),
                                            name: data.name,
                                            price: 350,
                                            img: `${url}/api/uploads/${data.img}`
                                        })
                                    }}>
                                        <Heart favouriteStatus={favouriteStatus}/>
                                    </div>

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
