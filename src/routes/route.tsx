import {useContext, useEffect, useState} from "react";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import useSWR from "swr";

import {useTelegram} from "../hooks/useTelegram";
import {fetcher, url} from "../core/fetch";
import useTelegramTheme from "../hooks/useTelegramTheme";
import useFavoriteManager from "../hooks/useFavoriteManager";
import {ThemeContext} from "../context/ThemeContext";
import {routes} from "../utils/routes";
import {RouteConfig} from "../interfaces/Route";

export const AppRoutes = () => {
    const location = useLocation();
    const {darkTheme} = useContext(ThemeContext);
    const {tg, id} = useTelegram();
    const [active, setActive] = useState<boolean>(false);
    const {data} = useSWR(`${url}/api/user/878990615`, fetcher);
    const {setAddedFunc, isAdd, added, setAdded} = useFavoriteManager();
    const navigate = useNavigate();
    useTelegramTheme();

    useEffect(() => {
        if (tg) {
            tg.ready();
            tg.SettingsButton.show();
            tg.SettingsButton.onClick(() => navigate('/settings'));

            return () => {
                tg.SettingsButton.offClick(() => navigate('/'));
            };
        }
    }, [tg, navigate]);

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            darkTheme ? "dark" : "light"
        );
    }, [darkTheme]);

    return (
        <Routes key={location.pathname} location={location}>
            {routes.map((route: RouteConfig, index: number) => {
                const routeProps = {
                    ...route.props,
                    tg,
                    active,
                    setActive,
                    data,
                    setAddedFunc,
                    isAdd,
                    added,
                    setAdded,
                }

                if (route.children) {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={<route.element {...routeProps} />}
                        >
                            {route.children.map((childRoute: RouteConfig, childIndex: number) => {
                                const childRouteProps = {
                                    ...childRoute.props,
                                    tg,
                                    active,
                                    setActive,
                                    data,
                                    setAddedFunc,
                                    isAdd,
                                    added,
                                    setAdded,
                                }

                                return (
                                    <Route
                                        key={childIndex}
                                        path={childRoute.path}
                                        element={<childRoute.element {...childRouteProps} />}
                                    />
                                )
                            })}
                        </Route>
                    )
                }

                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={<route.element {...routeProps} />}
                    />
                )
            })}
        </Routes>
    )
};
