const tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.color = "#0f73d5"

export function useTelegram() {
    
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

    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
        id: tg.initDataUnsafe?.user?.id,
        queryId: tg.initDataUnsafe?.query_id,
    } as any
}