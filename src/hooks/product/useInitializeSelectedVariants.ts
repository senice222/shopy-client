import { useCallback, useEffect } from 'react';

export const useInitializeSelectedVariants = (data: any, setSelectedVariants: (value: any) => void) => {
    const initializeSelectedVariants = useCallback(() => {
        let initialSelected: any = {};

        if (data) {
            data.variants.properties.forEach((property: any) => {
                const firstValue = data.variants.items
                    .flatMap((item: any) => item.values)
                    .find((value: any) => value.id === property.id)?.value;

                if (firstValue) {
                    initialSelected[data._id] = {
                        ...initialSelected[data._id],
                        [property.id]: firstValue
                    };
                }
            });
            setSelectedVariants(initialSelected);
        }
    }, [data, setSelectedVariants]);

    useEffect(() => {
        initializeSelectedVariants();
    }, [initializeSelectedVariants]);
};
