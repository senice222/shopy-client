import { lazy } from 'react';
import { RouteConfig } from "../interfaces/Route";

const Home = lazy(() => import("../pages/Home/Home"));
const SettingsPage = lazy(() => import("../pages/SettingsPage/SettingsPage"));
const Category = lazy(() => import("../pages/Category/Category"));
const Basket = lazy(() => import("../pages/Basket/Basket"));
const ActivateAccounts = lazy(() => import("../pages/ActivateAccounts/ActivateAccounts"));
const ActiveSubscriptions = lazy(() => import("../pages/ActiveSubscriptions/ActiveSubscriptions"));
const FavoriteProducts = lazy(() => import("../pages/FavoriteProducts/FavoriteProducts"));
const ProceedToPayment = lazy(() => import("../pages/ProceedToPayment/ProceedToPayment"));
const DetailedProduct = lazy(() => import("../pages/DetailedProduct/DetailedProduct"));
const ChangeData = lazy(() => import("../pages/ChangeData/ChangeData"));
const HistoryOfOrders = lazy(() => import("../pages/HistoryOfOrders/HistoryOfOrders"));
const DetailedOrder = lazy(() => import("../pages/HistoryOfOrders/DetailedOrder/DetailedOrder"));
const SubscribeActivate = lazy(() => import("../pages/SubscribeActivate/SubscribeActivate"));
const Referral = lazy(() => import("../pages/Referral/Referral"));
const Login = lazy(() => import("../pages/ADMIN/Login/Login"));
const AdminLayout = lazy(() => import("../layouts/AdminLayout"));
const Panel = lazy(() => import("../pages/ADMIN/Panel/Panel"));
const Users = lazy(() => import("../pages/ADMIN/Users/Users"));
const Orders = lazy(() => import("../pages/ADMIN/Orders/Orders"));
const Newsletter = lazy(() => import("../pages/ADMIN/Newsletter/Newsletter"));
const CategoriesAndProducts = lazy(() => import("../pages/ADMIN/CategoriesAndProducts/CategoriesAndProducts"));
const DetailedUser = lazy(() => import("../pages/ADMIN/Users/DetailedUser/DetailedUser"));
const Settings = lazy(() => import("../pages/ADMIN/Settings/Settings"));
const Feedback = lazy(() => import("../pages/ADMIN/Feedback/Feedback"));
const Payment = lazy(() => import("../pages/Payment/Payment"));
const FeedbackDetailed = lazy(() => import("../pages/ADMIN/Feedback/DetailedFeedback/DetailedFeedback"));

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
                ]
            }
        ]
    },
    { path: "/success", element: Payment, props: { title: "Оплата прошла успешно!", descr: "Не забудьте активировать аккаунт, чтобы пользоваться подпиской.", btnText: "Активировать аккаунт", type: "success" } },
    { path: "/success-activated", element: Payment, props: { title: "Вы успешно активировали аккаунт!", descr: "Ожидайте активации.", btnText: "", type: "success" } },
    { path: "/fail", element: Payment, props: { title: "Оплата не прошла!", descr: "Возможно Вы ввели неверные реквизиты карты или на карте недостаточно средств. Попробуйте еще раз.", btnText: "Повторить заказ", type: "rejected" } },
    { path: "/rejected-payment", element: Payment, props: { title: "Оплата не прошла!", descr: "Возможно Вы ввели неверные реквизиты карты или на карте недостаточно средств. Попробуйте еще раз.", btnText: "Повторить заказ", type: "rejected" } },
    { path: "/pending-payment", element: Payment, props: { title: "Заказ пока ещё не оплачен", descr: "Нажмите на кнопку ниже, чтобы оплатить заказ. По истечению 30 минут заказ будет отменён.", btnText: "Оплатить заказ", type: "pending" } },
    { path: "/cancelled-payment", element: Payment, props: { title: "Заказ был отменён", descr: "Вы не успели оплатить заказ в срок. Нажмите на кнопку ниже, и мы повторим заказ снова.", btnText: "Повторить заказ", type: "cancelled" } },
    { path: "/receive-payment", element: Payment, props: { title: "Оплата прошла успешно!", descr: "Чтобы получить заказ, нажмите на кнопку ниже и напишите нашему менеджеру.", btnText: "Получить заказ", type: "receive" } }
];
