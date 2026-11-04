export const round2 = (n) => Math.round(n * 100) / 100;
const num = (v) => Number(v.toString());
const toCurrency = (c) => ({
    id: c.id,
    name: c.name,
    symbol: c.symbol,
    exchangeRate: c.exchangeRate,
    isDefault: c.isDefault,
});
const toPrice = (price, currency, count) => ({
    price: round2(num(price)),
    totalPrice: round2(num(price) * count),
    currency: toCurrency(currency),
});
export const toDto = (p) => {
    const sold = p.lastSellingDate !== null && p.lastSellingPrice !== null && p.lastSellingCount !== null;
    const lastDate = sold ? p.lastSellingDate.toISOString() : '';
    return {
        id: p.id,
        name: p.name,
        count: p.count,
        minAmount: p.minAmount,
        createdAt: p.createdAt.toISOString(),
        prices: {
            cost: toPrice(p.costPrice, p.costCurrency, p.count),
            selling: toPrice(p.salePrice, p.saleCurrency, p.count),
            wholesale: toPrice(p.wholesalePrice, p.wholesaleCurrency, p.count),
        },
        image: p.image ?? '',
        lastSellingDate: lastDate,
        description: p.description ?? '',
        lastSelling: {
            date: lastDate,
            price: sold ? round2(num(p.lastSellingPrice)) : 0,
            count: sold ? p.lastSellingCount : 0,
        },
    };
};
export const calcPage = (items) => {
    const sum = (pick) => round2(items.reduce((acc, i) => acc + pick(i).totalPrice * pick(i).currency.exchangeRate, 0));
    return {
        totalPrice: sum((i) => i.prices.selling),
        totalCost: sum((i) => i.prices.cost),
        totalCount: items.reduce((acc, i) => acc + i.count, 0),
    };
};
//# sourceMappingURL=product.mapper.js.map