import { useCallback } from 'react';
import {ComparisonObject, Product, SelectedVariants, VariantItem} from "../../interfaces/Product";

export const useCompare = (data: Product, selectedVariants: SelectedVariants, id: string | undefined) => {

    const compareArrayWithObject = (
        array: { id: string; value: string }[],
        comparisonObject: ComparisonObject[]
    ): boolean => {
        if (array.length !== comparisonObject.length) {
            return false;
        }
        return array.every(item =>
            comparisonObject.some((obj: ComparisonObject, i: number) => obj.id === item.id && obj.option === item.value)
        );
    };

    const compare = useCallback(() => {
        if (data && data.variants && id && selectedVariants[id]) {
            return data.variants.items.filter((item: VariantItem) =>
                compareArrayWithObject(item.values, selectedVariants[id])
            );
        }
        return [];
    }, [data, id, selectedVariants]);

    return compare;
};
