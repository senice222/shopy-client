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
import {DetailedProduct} from "./pages/DetailedProduct/DetailedProduct";
import HistoryOfOrders from './pages/HistoryOfOrders/HistoryOfOrders';
import ActivateAccounts from "./pages/ActivateAccounts/ActivateAccounts";
import {ThemeContext} from "./context/ThemeContext";
import FavoriteProducts from "./pages/FavoriteProducts/FavoriteProducts";
import {addToFavorite, deleteFromFavorite, FavoriteItem} from "./store/features/favoriteSlice";
import {useAppDispatch, useAppSelector} from "./hooks/redux-hooks";
import {SubscribeActivate} from "./pages/SubscribeActivate/SubscribeActivate";
import ActiveSubscriptions from "./pages/ActiveSubscriptions/ActiveSubscriptions";
import DetailedOrder from "./pages/HistoryOfOrders/DetailedOrder/DetailedOrder";
import ChangeData from './pages/ChangeData/ChangeData';
import Referral from "./pages/Referral/Referral";
import Login from "./pages/ADMIN/Login/Login";
import Panel from "./pages/ADMIN/Panel/Panel";
import Users from "./pages/ADMIN/Users/Users";
import DetailedUser from "./pages/ADMIN/Users/DetailedUser/DetailedUser";
import {useTelegram} from "./hooks/useTelegram";
import useSWR from "swr";
import AdminLayout from "./layouts/AdminLayout";
import {fetcher, url} from "./core/fetch";
import CategoriesAndProducts from "./pages/ADMIN/CategoriesAndProducts/CategoriesAndProducts";
import Newsletter from "./pages/ADMIN/Newsletter/Newsletter";
import Orders from "./pages/ADMIN/Orders/Orders";
import useTelegramTheme from "./hooks/useTelegramTheme";

function App() {
    const location = useLocation()
    const { darkTheme } = useContext(ThemeContext);
    const [added, setAdded] = useState<boolean>(false)
    const [isAdd, setIsAdd] = useState<boolean>(false)
    const [active, setActive] = useState(false)
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.favorite.items)
    const {tg, id} = useTelegram();
    const { data } = useSWR(`${url}/api/user/878990615`, fetcher);
    useTelegramTheme();

    useEffect(() => {
        tg.ready();
    }, [])

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
            <Route path="/basket" element={<Basket />}/>
            <Route path="/active-accounts" element={<ActivateAccounts />}/>
            <Route path="/active-subscriptions" element={<ActiveSubscriptions user={data} />}/>
            <Route path="/favorite-products" element={<FavoriteProducts setAddedFunc={setAddedFunc} isAdd={isAdd} added={added} setAdded={setAdded}/>}/>
            <Route path="/proceed-payment" element={<ProceedToPayment/>}/>
            <Route path="/product/:id" element={<DetailedProduct setAddedFunc={setAddedFunc} isAdd={isAdd} added={added} setAdded={setAdded} />}/>
            <Route path="/change-data" element={<ChangeData/>}/>
            <Route path="/history-of-orders" element={<HistoryOfOrders user={data}/>}/>
            <Route path="/history-of-orders/:id" element={<DetailedOrder />}/>
            <Route path="/activation" element={<SubscribeActivate data={data} />}/>
            <Route path="/referral" element={<Referral />}/>
            <Route path="/login" element={<Login />}/>
            <Route path={'/panel'} element={<AdminLayout/>}>
                <Route index path="" element={<Panel />}/>
                <Route path="users" element={<Users />}/>
                <Route path="orders" element={<Orders />}/>
                <Route path="newsletter" element={<Newsletter />}/>
                <Route path="categoriesAndProducts" element={<CategoriesAndProducts />}/>
                <Route path="users/:username" element={<DetailedUser />}/>
            </Route>

            <Route path="/success" element={
                <Payment
                    title={"Оплата прошла успешно!"}
                    descr={"Не забудьте активировать аккаунт, чтобы пользоваться подпиской."}
                    btnText={"Активировать аккаунт"}
                    type={"success"}
                />
            }/>
            <Route path="/success-actived" element={
                <Payment
                    title={"Вы успешно активировали аккаунт!"}
                    descr={"Ожидайте активации."}
                    btnText={""}
                    type={"success"}
                />
            }/>
            <Route path="/fail" element={
                <Payment
                    title={"Оплата не прошла!"}
                    descr={"Возможно Вы ввели неверные реквизиты карты или на карте недостаточно средств. Попробуйте еще раз."}
                    btnText={"Повторить заказ"}
                    type={"rejected"}
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
