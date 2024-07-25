import {Dispatch, SetStateAction, useCallback, useEffect} from 'react';
import {Properties, SelectedVariants, VariantItem} from "../../interfaces/Product";

export const useInitializeSelectedVariants = (data: any, setSelectedVariants: Dispatch<SetStateAction<SelectedVariants>>) => {
    const initializeSelectedVariants = useCallback(() => {
        let initialSelected: SelectedVariants = {};

        if (data) {
            data.variants.properties.forEach((property: Properties) => {
                const firstValue = data.variants.items
                    .flatMap((item: VariantItem) => item.values)
                    .find((value: {id: string}) => value.id === property.id)?.value;

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
