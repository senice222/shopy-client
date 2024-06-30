type TelegramWebApp = {
    close: () => void;
    MainButton: {
        isVisible: boolean;
        hide: () => void;
        show: () => void;
    };
    initDataUnsafe?: {
        user?: {
            id?: number;
        };
        query_id?: string;
    };
};

export const useTelegram = () => {
    const tg: TelegramWebApp | undefined = (window as any).Telegram?.WebApp;

    const onClose = () => {
        tg?.close();
    };

    const onToggleButton = () => {
        if (tg?.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg?.MainButton.show();
        }
    };

    return {
        tg,
        id: tg?.initDataUnsafe?.user?.id,
        user: tg?.initDataUnsafe?.user,
        queryId: tg?.initDataUnsafe?.query_id,
        onClose,
        onToggleButton
    };
};
