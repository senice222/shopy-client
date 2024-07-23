import {SelectedVariants, Variant} from "../interfaces/Product";

export const getMinPrice = (variants: Variant[]): number => {
    let minPrice = Infinity;

    if (variants) {
        variants.forEach(variant => {
            variant.items.forEach(item => {
                if (item.price < minPrice) {
                    minPrice = item.price;
                }
            });
        });
    }

    return minPrice === Infinity ? 0 : minPrice;
};

export const getDefaultSelectedVariants = (id: string, variants: Variant[]): SelectedVariants => {
    const defaultSelected: SelectedVariants = {};
    if (id && variants) {
        variants.forEach((variant, variantIndex) => {
            if (variant.items.length > 0) {
                if (!defaultSelected[id]) {
                    defaultSelected[id] = {};
                }
                defaultSelected[id][variantIndex] = variant.items[0];
            }
        });
    }
    return defaultSelected;
};