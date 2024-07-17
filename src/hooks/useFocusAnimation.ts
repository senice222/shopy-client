import { useEffect } from 'react';

const useFocusAnimation = (
    inputRef: React.RefObject<HTMLElement>,
    className: string,
    isMobileDevice: string | null,
    setIsFocused: (isFocused: boolean) => void,
    isEdit?: boolean
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
                const inputs = formElement.querySelectorAll<HTMLInputElement>(className);

                inputs.forEach((input) => {
                    input.addEventListener('focus', handleFocus);
                    input.addEventListener('blur', handleBlur);
                });

                return () => {
                    inputs.forEach((input) => {
                        input.removeEventListener('focus', handleFocus);
                        input.removeEventListener('blur', handleBlur);
                    });
                };
            }
        }, [inputRef, isMobileDevice, isEdit]);
};

export default useFocusAnimation;
