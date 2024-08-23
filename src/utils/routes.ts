import Home from "../pages/Home/Home";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import Category from "../pages/Category/Category";
import Basket from "../pages/Basket/Basket";
import ActivateAccounts from "../pages/ActivateAccounts/ActivateAccounts";
import ActiveSubscriptions from "../pages/ActiveSubscriptions/ActiveSubscriptions";
import FavoriteProducts from "../pages/FavoriteProducts/FavoriteProducts";
import ProceedToPayment from "../pages/ProceedToPayment/ProceedToPayment";
import {DetailedProduct} from "../pages/DetailedProduct/DetailedProduct";
import ChangeData from "../pages/ChangeData/ChangeData";
import HistoryOfOrders from "../pages/HistoryOfOrders/HistoryOfOrders";
import DetailedOrder from "../pages/HistoryOfOrders/DetailedOrder/DetailedOrder";
import {SubscribeActivate} from "../pages/SubscribeActivate/SubscribeActivate";
import Referral from "../pages/Referral/Referral";
import Login from "../pages/ADMIN/Login/Login";
import AdminLayout from "../layouts/AdminLayout";
import Panel from "../pages/ADMIN/Panel/Panel";
import Users from "../pages/ADMIN/Users/Users";
import Orders from "../pages/ADMIN/Orders/Orders";
import Newsletter from "../pages/ADMIN/Newsletter/Newsletter";
import CategoriesAndProducts from "../pages/ADMIN/CategoriesAndProducts/CategoriesAndProducts";
import DetailedUser from "../pages/ADMIN/Users/DetailedUser/DetailedUser";
import Settings from "../pages/ADMIN/Settings/Settings";
import Feedback from "../pages/ADMIN/Feedback/Feedback";
import Payment from "../pages/Payment/Payment";
import FeedbackDetailed from "../pages/ADMIN/Feedback/DetailedFeedback/DetailedFeedback";
import {RouteConfig} from "../interfaces/Route";


export const routes: RouteConfig[] = [
    { path: "/", element: Home, props: { setAddedFunc: null, isAdd: false, added: false, setAdded: () => {} } },
    { path: "/settings", element: SettingsPage, props: {} },
    { path: "/category/:category", element: Category, props: {} },
    { path: "/basket", element: Basket, props: {} },
    { path: "/active-accounts", element: ActivateAccounts, props: {} },
    { path: "/active-subscriptions", element: ActiveSubscriptions, props: { user: null } },
    { path: "/favorite-products", element: FavoriteProducts, props: { setAddedFunc: null, isAdd: false, added: false, setAdded: () => {} } },
    { path: "/proceed-payment", element: ProceedToPayment, props: {} },
    { path: "/product/:id", element: DetailedProduct, props: { setAddedFunc: null, isAdd: false, added: false, setAdded: () => {} } },
    { path: "/change-data", element: ChangeData, props: {} },
    { path: "/history-of-orders", element: HistoryOfOrders, props: { user: null } },
    { path: "/history-of-orders/:id", element: DetailedOrder, props: {} },
    { path: "/activation/:id/:variant", element: SubscribeActivate, props: { data: null } },
    { path: "/referral", element: Referral, props: { user: null } },
    { path: "/login", element: Login, props: {} },
    {
        path: '/panel', element: AdminLayout, props: { active: null, setActive: null }, children: [
            { path: "", element: Panel, props: {} },
            { path: "users", element: Users, props: {} },
            { path: "orders", element: Orders, props: {} },
            { path: "newsletter", element: Newsletter, props: {} },
            { path: "categoriesAndProducts", element: CategoriesAndProducts, props: {} },
            { path: "users/:username", element: DetailedUser, props: {} },
            { path: "feedback/:id", element: FeedbackDetailed, props: {} },
            { path: "settings", element: Settings, props: {}, children: [
                    { path: "", element: Feedback, props: {} }
                ]}
        ]
    },
    { path: "/success", element: Payment, props: { title: "Оплата прошла успешно!", descr: "Не забудьте активировать аккаунт, чтобы пользоваться подпиской.", btnText: "Активировать аккаунт", type: "success" } },
    { path: "/success-actived", element: Payment, props: { title: "Вы успешно активировали аккаунт!", descr: "Ожидайте активации.", btnText: "", type: "success" } },
    { path: "/fail", element: Payment, props: { title: "Оплата не прошла!", descr: "Возможно Вы ввели неверные реквизиты карты или на карте недостаточно средств. Попробуйте еще раз.", btnText: "Повторить заказ", type: "rejected" } },
    { path: "/rejected-payment", element: Payment, props: { title: "Оплата не прошла!", descr: "Возможно Вы ввели неверные реквизиты карты или на карте недостаточно средств. Попробуйте еще раз.", btnText: "Повторить заказ", type: "rejected" } },
    { path: "/pending-payment", element: Payment, props: { title: "Заказ пока ещё не оплачен", descr: "Нажмите на кнопку ниже, чтобы оплатить заказ. По истечению 30 минут заказ будет отменён.", btnText: "Оплатить заказ", type: "pending" } },
    { path: "/cancelled-payment", element: Payment, props: { title: "Заказ был отменён", descr: "Вы не успели оплатить заказ в срок. Нажмите на кнопку ниже, и мы повторим заказ снова.", btnText: "Повторить заказ", type: "cancelled" } },
    { path: "/receive-payment", element: Payment, props: { title: "Оплата прошла успешно!", descr: "Чтобы получить заказ, нажмите на кнопку ниже и напишите нашему менеджеру.", btnText: "Получить заказ", type: "receive" } }
];
