import { useEffect } from 'react';

const useFormElementFocus = (
    inputRef: React.RefObject<HTMLElement>,
    isMobileDevice: string | null,
    setIsFocused: (isFocused: boolean) => void
) => {
    useEffect(() => {
        const handleFocus = () => {
            setIsFocused(true);
        };

        const handleBlur = () => {
            setIsFocused(false);
        };

        const formElement = inputRef.current;

        if (formElement && isMobileDevice) {
            const inputs = formElement.querySelectorAll<HTMLInputElement>('input');
            const textareas = formElement.querySelectorAll<HTMLTextAreaElement>('textarea');

            const addFocusBlurListeners = (elements: NodeListOf<HTMLInputElement | HTMLTextAreaElement>) => {
                elements.forEach((element) => {
                    element.addEventListener('focus', handleFocus);
                    element.addEventListener('blur', handleBlur);
                });
            };

            const removeFocusBlurListeners = (elements: NodeListOf<HTMLInputElement | HTMLTextAreaElement>) => {
                elements.forEach((element) => {
                    element.removeEventListener('focus', handleFocus);
                    element.removeEventListener('blur', handleBlur);
                });
            };

            addFocusBlurListeners(inputs);
            addFocusBlurListeners(textareas);

            return () => {
                removeFocusBlurListeners(inputs);
                removeFocusBlurListeners(textareas);
            };
        }
    }, [inputRef, isMobileDevice, setIsFocused]);
};

export default useFormElementFocus;
