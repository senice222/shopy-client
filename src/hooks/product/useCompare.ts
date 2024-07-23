import { useCallback } from 'react';

export const useCompare = (data: any, selectedVariants: any, id: string | undefined) => {
    const compareArrayWithObject = (array: any[], comparisonObject: any): boolean => {
        if (!comparisonObject || array.length !== Object.keys(comparisonObject).length) {
            return false;
        }

        for (let item of array) {
            if (comparisonObject[item.id] !== item.value) {
                return false;
            }
        }

        return true;
    };

    const compare = useCallback(() => {
        if (data && data.variants && id && selectedVariants[id]) {
            return data.variants.items.filter((item: any) => compareArrayWithObject(item.values, selectedVariants[id]));
        }
        return [];
    }, [data, id, selectedVariants]);

    return compare;
};
