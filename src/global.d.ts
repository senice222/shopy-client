
interface TelegramWebApp {
    ThemeParams: any;
    close(): void;
    MainButton: {
        color: string;
        isVisible: boolean;
        show(): void;
        hide(): void;
    };
    initDataUnsafe?: {
        user?: {
            id?: number;
        };
        query_id?: string;
    };

    expand(): void;
}

interface Window {
    Telegram: {
        WebApp: TelegramWebApp;
    };
}
