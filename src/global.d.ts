
interface TelegramWebApp {
    BackButton: any;
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

    openTelegramLink(v: string): void;
}

interface Window {
    Telegram: {
        WebApp: TelegramWebApp;
    };
}
