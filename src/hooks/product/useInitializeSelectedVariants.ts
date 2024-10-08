import { Dispatch, SetStateAction, useCallback, useEffect } from 'react';
import {
    ComparisonObject,
    Product,
    Properties,
    SelectedVariants,
    ValuesItem,
    VariantItem
} from "../../interfaces/Product";

export const useInitializeSelectedVariants = (
    data: Product,
    setSelectedVariants: Dispatch<SetStateAction<SelectedVariants>>
) => {
    const initializeSelectedVariants = useCallback(() => {
        let initialSelected: SelectedVariants = {};
        if (data) {
            data.variants.items.forEach((item: VariantItem) => {
                item.values.forEach((value: ValuesItem) => {
                    if (!initialSelected[data._id]) {
                        initialSelected[data._id] = [];
                    }
                    const banner = item.banner ? { title: item.banner.title, description: item.banner.description } : undefined;
                    const property = data.variants.properties.find((prop: Properties) => prop.id === value.id);
                    const label = property ? property.text : value.id;

                    if (!initialSelected[data._id].some((v: ComparisonObject) => v.label === label)) {
                        initialSelected[data._id].push({
                            id: property ? property.id : '',
                            label: label,
                            option: value.value,
                            banner
                        });
                    }
                });
            });

            setSelectedVariants(initialSelected);
        }
    }, [data, setSelectedVariants]);

    useEffect(() => {
        initializeSelectedVariants();
    }, [initializeSelectedVariants]);
};
