import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.color = "#0f73d5"

export function useTelegram() {
    const themeParams = tg.ThemeParams;
    const isDarkTheme = themeParams?.theme === 'dark';

    const onClose = () => {
        tg.close()
    }

    const onToggleButton = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }

    const showBackButton = () => {
        tg.BackButton.show();
    };

    const hideBackButton = () => {
        tg.BackButton.hide();
    };

    const onBackButtonClick = (callback: string) => {
        tg.BackButton.onClick(callback);
    };

    const {pathname} = useLocation();

    useEffect(() => {
        if (pathname !== '/') {
            showBackButton();
        } else {
            hideBackButton();
        }
    }, [pathname]);

    return {
        onClose,
        onToggleButton,
        showBackButton,
        hideBackButton,
        onBackButtonClick,
        tg,
        user: tg.initDataUnsafe?.user,
        id: tg.initDataUnsafe?.user?.id,
        queryId: tg.initDataUnsafe?.query_id,
        isDarkTheme,
        themeParams
    } as any;
}