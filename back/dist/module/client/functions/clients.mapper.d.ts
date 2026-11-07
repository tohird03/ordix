import { Prisma } from "../../../generated/prisma/client.js";
export declare const clientInclude: {
    debtByCurrency: {
        where: {
            amount: {
                not: number;
            };
        };
        include: {
            currency: true;
        };
    };
};
export type ClientWithDebts = Prisma.ClientGetPayload<{
    include: typeof clientInclude;
}>;
export declare function toClientInfo(c: ClientWithDebts): {
    id: string;
    fullname: string;
    phone: string;
    debtByCurrency: {
        amount: number;
        currency: {
            id: string;
            name: string;
            symbol: string;
            exchangeRate: number;
        };
    }[];
    lastSellingDate: string | null;
};
export declare function toClientDetail(c: ClientWithDebts): {
    address: string | null;
    latitude: number | null;
    longitude: number | null;
    createdAt: string;
    id: string;
    fullname: string;
    phone: string;
    debtByCurrency: {
        amount: number;
        currency: {
            id: string;
            name: string;
            symbol: string;
            exchangeRate: number;
        };
    }[];
    lastSellingDate: string | null;
};
