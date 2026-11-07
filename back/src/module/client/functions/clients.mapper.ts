import { Prisma } from "../../../generated/prisma/client.js";

export const clientInclude = {
  // faqat nolga teng bo'lmagan qarzlar (manfiy = avans ham chiqadi)
  debtByCurrency: {
    where: { amount: { not: 0 } },
    include: { currency: true },
  },
} satisfies Prisma.ClientInclude;

export type ClientWithDebts = Prisma.ClientGetPayload<{
  include: typeof clientInclude;
}>;

// IClientsInfo
export function toClientInfo(c: ClientWithDebts) {
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

// Bitta mijoz sahifasi uchun (manzil va xarita koordinatalari bilan)
export function toClientDetail(c: ClientWithDebts) {
  return {
    ...toClientInfo(c),
    address: c.address,
    latitude: c.latitude,
    longitude: c.longitude,
    createdAt: c.createdAt.toISOString(),
  };
}
