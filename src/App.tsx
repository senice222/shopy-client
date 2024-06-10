import './app.scss';
import Home from "./pages/Home/Home";
import {
    Route,
    Routes, useLocation,
} from "react-router-dom";
import Category from "./pages/Category/Category";
import Basket from "./pages/Basket/Basket";
import ProceedToPayment from "./pages/ProceedToPayment/ProceedToPayment";
import Payment from "./pages/Payment/Payment";
import React, {useContext, useEffect, useState} from "react";
import DetailedProduct from "./pages/DetailedProduct/DetailedProduct";
import HistoryOfOrders from './pages/HistoryOfOrders/HistoryOfOrders';
import ActivateAccounts from "./pages/ActivateAccounts/ActivateAccounts";
import {ThemeContext} from "./context/ThemeContext";
import FavoriteProducts from "./pages/FavoriteProducts/FavoriteProducts";
import {addToFavorite, deleteFromFavorite, FavoriteItem} from "./store/features/favoriteSlice";
import {useAppDispatch, useAppSelector} from "./hooks/redux-hooks";
import {SubscribeActivate} from "./pages/SubscribeActivate/SubscribeActivate";

function App() {
    const location = useLocation()
    const { darkTheme } = useContext(ThemeContext);
    const [added, setAdded] = useState<boolean>(false)
    const [isAdd, setIsAdd] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.favorite.items)

    const setAddedFunc = (isAdd: boolean, item: FavoriteItem) => {
        setIsAdd(isAdd)
        dispatch(deleteFromFavorite(item.id))

        const product = state.find((el) => el.id === item.id)

        if (!product) {
            setIsAdd(true)
            setAdded(true)
            dispatch(addToFavorite(item))
        } else {
            dispatch(deleteFromFavorite({id : item.id}))
            setIsAdd(false)
            setAdded(true)
        }

        setTimeout(() => {
            setAdded(false)
        }, 2500)
    }

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            darkTheme ? "dark" : "light"
        );
    }, [darkTheme]);


    return (
        <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home setAddedFunc={setAddedFunc} isAdd={isAdd} added={added} setAdded={setAdded}/>}/>
            <Route path="/category/:category" element={<Category/>}/>
            <Route path="/basket" element={<Basket/>}/>
            <Route path="/active-accounts" element={<ActivateAccounts />}/>
            <Route path="/favorite-products" element={<FavoriteProducts setAddedFunc={setAddedFunc} isAdd={isAdd} added={added} setAdded={setAdded}/>}/>
            <Route path="/proceed-payment" element={<ProceedToPayment/>}/>
            <Route path="/product/:id" element={<DetailedProduct setAddedFunc={setAddedFunc} isAdd={isAdd} added={added} setAdded={setAdded} />}/>
            <Route path="/history-of-orders" element={<HistoryOfOrders/>}/>
            <Route path="/activation" element={<SubscribeActivate/>}/>
            <Route path="/successful-payment" element={
                <Payment
                    title={"Оплата прошла успешно!"}
                    descr={"Не забудьте активировать аккаунт, чтобы пользоваться подпиской."}
                    btnText={"Активировать аккаунт"}
                    type={"success"}
                />
            }/>
            <Route path="/rejected-payment" element={
                <Payment
                    title={"Оплата не прошла!"}
                    descr={"Возможно Вы ввели неверные реквизиты карты или на карте недостаточно средств. Попробуйте еще раз."}
                    btnText={"Повторить заказ"}
                    type={"rejected"}
                />
            }/>
            <Route path="/pending-payment" element={
                <Payment
                    title={"Заказ пока ещё не оплачен"}
                    descr={"Нажмите на кнопку ниже, чтобы оплатить заказ. По истечению 30 минут заказ будет отменён."}
                    btnText={"Оплатить заказ"}
                    type={"pending"}
                />
            }/>
            <Route path="/cancelled-payment" element={
                <Payment
                    title={"Заказ был отменён"}
                    descr={"Вы не успели оплатить заказ в срок. Нажмите на кнопку ниже, и мы повторим заказ снова."}
                    btnText={"Повторить заказ"}
                    type={"cancelled"}
                />
            }/>
            <Route path="/receive-payment" element={
                <Payment
                    title={"Оплата прошла успешно!"}
                    descr={"Чтобы получить заказ, нажмите на кнопку ниже и напишите нашему менеджеру."}
                    btnText={"Получить заказ"}
                    type={"receive"}
                />
            }/>
        </Routes>
    )
}

export default App;
