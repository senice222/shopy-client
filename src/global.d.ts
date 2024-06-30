
interface TelegramWebApp {
    ThemeParams: any;
    close(): void;
    MainButton: {
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
}

interface Window {
    Telegram: {
        WebApp: TelegramWebApp;
    };
}
