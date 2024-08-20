import {Variant} from "../interfaces/Product";

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