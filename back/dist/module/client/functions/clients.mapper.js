export const clientInclude = {
    debtByCurrency: {
        where: { amount: { not: 0 } },
        include: { currency: true },
    },
};
export function toClientInfo(c) {
    return {
        id: c.id,
        fullname: c.fullname,
        phone: c.phone,
        debtByCurrency: c.debtByCurrency.map((d) => ({
            amount: d.amount,
            currency: {
                id: d.currency.id,
                name: d.currency.name,
                symbol: d.currency.symbol,
                exchangeRate: d.currency.exchangeRate,
            },
        })),
        lastSellingDate: c.lastSellingDate ? c.lastSellingDate.toISOString() : null,
    };
}
export function toClientDetail(c) {
    return {
        ...toClientInfo(c),
        address: c.address,
        latitude: c.latitude,
        longitude: c.longitude,
        createdAt: c.createdAt.toISOString(),
    };
}
//# sourceMappingURL=clients.mapper.js.map