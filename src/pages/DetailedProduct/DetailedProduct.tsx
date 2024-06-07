import style from './DetailedProduct.module.scss'
import Layout from "../../layouts/Layout";
import prdct from '../../assets/detailed.png'
import percent from '../../assets/svg/percent-03.svg'
import Button from "../../components/Button/Button";
import {useNavigate} from 'react-router-dom';
import React, {FC, useState} from "react";
import {ModalAndFavorite} from "../../interfaces/ModalAndFavorite";
import {AddedToFav} from "../../components/AddedToFav/AddedToFav";
import redHeart from '../../assets/heart.png'

const DetailedProduct: FC<ModalAndFavorite> = ({setAddedFunc, isAdd, added, setAdded}) => {
    const navigate = useNavigate()
    const [favouriteStatus, setFavouriteStatus] = useState(false);

    return (
        <div className={style.background}>
            <AddedToFav isAdd={isAdd} isOpen={added} setOpen={() => setAdded(false)}/>
            <Layout>
                <div className={style.productContainer}>
                    <div className={style.imgCont}>
                        <img src={prdct} alt="/"/>
                    </div>
                    <div className={style.wrappInfo}>
                        <div className={style.info}>
                            <h2>Spotify Premium</h2>
                            <div>
                                <h1>399₽</h1>
                                <h3>798₽</h3>
                                <div className={style.skidka}>
                                    -50%
                                </div>
                            </div>
                            <p>+ 3% кешбека</p>
                        </div>
                        <div className={style.promotionDiv}>
                            <div className={style.promotionImg}>
                                <img src={percent} alt="/"/>
                            </div>
                            <div className={style.promotionText}>
                                <h2>Два месяца по цене одного!</h2>
                                <p>Действует для новых клиентов Shopy при регистрации нового аккаунта.</p>
                            </div>
                        </div>
                        <div className={style.plan}>
                            <h3>План</h3>
                            <div className={style.btns}>
                                <button className={style.active}>Индивидуальный</button>
                                <button>Для двоих</button>
                                <button>Для семьи</button>
                                <button>Premium Mini</button>
                            </div>
                        </div>
                        <div className={style.plan}>
                            <h3>Длительность</h3>
                            <div className={style.btns}>
                                <button className={style.active}>2 месяца для новых</button>
                                <button>1 месяц</button>
                                <button>3 месяца</button>
                                <button>6 месяцев</button>
                                <button>12 месяцев</button>
                                <button>18 месяцев</button>
                            </div>
                        </div>
                        <div className={style.btnAddToCart}>
                            <div className={style.heart}>
                                {favouriteStatus ? (
                                    <img src={redHeart} alt={"/"} onClick={() => {
                                        setFavouriteStatus(!favouriteStatus)
                                        setAddedFunc(true, {
                                            id: String(1),
                                            name: "Spotify",
                                            price: 399,
                                            img: "https://picsum.photos/200/300?random=2"
                                        })
                                    }}
                                    />
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                         className={favouriteStatus ? style.heartFilled : style.svg}
                                         onClick={() => {
                                             setFavouriteStatus(!favouriteStatus)
                                             setAddedFunc(true, {
                                                 id: String(1),
                                                 name: "Spotify",
                                                 price: 399,
                                                 img: "https://picsum.photos/200/300?random=2"
                                             })
                                         }
                                         }
                                         fill="none"
                                    >
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M9.99428 4.27985C8.32816 2.332 5.54978 1.80804 3.46224 3.59168C1.37469 5.37532 1.0808 8.35748 2.72015 10.467C4.08317 12.2209 8.20813 15.9201 9.56007 17.1174C9.71133 17.2513 9.78695 17.3183 9.87517 17.3446C9.95216 17.3676 10.0364 17.3676 10.1134 17.3446C10.2016 17.3183 10.2772 17.2513 10.4285 17.1174C11.7804 15.9201 15.9054 12.2209 17.2684 10.467C18.9078 8.35748 18.6498 5.35656 16.5263 3.59168C14.4029 1.8268 11.6604 2.332 9.99428 4.27985Z"
                                              stroke="#344054" stroke-width="1.66667" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                    </svg>
                                )}
                            </div>
                            <div className={style.divBtn}>
                                <Button text={"Добавить в корзину"} height={"100%"} width={"100%"}></Button>
                            </div>
                        </div>
                        <div className={style.productDescription}>
                            <div className={style.characteristicDiv}>
                                <p>Характеристика</p>
                                <h3>Ответ</h3>
                            </div>
                            <div className={style.characteristicDiv}>
                                <p>Характеристика</p>
                                <h3>Ответ</h3>
                            </div>
                            <div className={style.characteristicDiv}>
                                <p>Характеристика</p>
                                <h3>Ответ</h3>
                            </div>
                            <div className={style.characteristicDiv}>
                                <p>Характеристика</p>
                                <h3>Ответ</h3>
                            </div>
                            <div className={style.descrDiv}>
                                <h2>Описание</h2>
                                <p>lorem ipsum и что то там дальше</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default DetailedProduct