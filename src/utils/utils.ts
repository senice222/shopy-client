import { Variant } from "../interfaces/Product";

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

export const priceRanges = [
    { range: 'от 0₽ до 4 999₽', percentage: '0%' },
    { range: 'от 5 000₽ до 9 999₽', percentage: '1%' },
    { range: 'от 10 000₽ до 14 999₽', percentage: '2%' },
    { range: 'от 15 000₽ до 19 999₽', percentage: '3%' },
    { range: 'от 20 000₽ до 29 999₽', percentage: '4%' },
    { range: 'от 30 000₽', percentage: '5%' },
];