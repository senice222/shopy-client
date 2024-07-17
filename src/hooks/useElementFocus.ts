import { useEffect } from 'react';

const useElementFocus = (
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

        const inputElement = inputRef.current;

        if (inputElement && isMobileDevice) {
            inputElement.addEventListener('focus', handleFocus);
            inputElement.addEventListener('blur', handleBlur);
        }

        return () => {
            if (inputElement && isMobileDevice) {
                inputElement.removeEventListener('focus', handleFocus);
                inputElement.removeEventListener('blur', handleBlur);
            }
        };
    }, [inputRef, isMobileDevice, setIsFocused]);
};

export default useElementFocus;
