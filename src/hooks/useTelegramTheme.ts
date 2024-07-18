import { useEffect, useState } from 'react';
import {useTelegram} from "./useTelegram";

const useTelegramTheme = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    const {tg} = useTelegram()

    useEffect(() => {
        const updateTheme = () => {
            const isDarkMode = tg.colorScheme === 'dark';
            setDarkTheme(isDarkMode);
        };

        updateTheme();

        tg.onEvent('themeChanged', updateTheme);

        return () => {
            tg.offEvent('themeChanged', updateTheme);
        };
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', darkTheme ? 'dark' : 'light');
    }, [darkTheme]);

    return darkTheme;
};

export default useTelegramTheme;
