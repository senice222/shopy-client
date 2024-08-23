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

export const calculateNextThreshold = (totalBuys: number) => {
    if (totalBuys < 5000) return { nextThreshold: 5000, cashbackPercent: 0 };
    if (totalBuys < 10000) return { nextThreshold: 10000, cashbackPercent: 1 };
    if (totalBuys < 15000) return { nextThreshold: 15000, cashbackPercent: 2 };
    if (totalBuys < 20000) return { nextThreshold: 20000, cashbackPercent: 3 };
    if (totalBuys < 30000) return { nextThreshold: 30000, cashbackPercent: 4 };
    return { nextThreshold: null, cashbackPercent: 5 };
};
