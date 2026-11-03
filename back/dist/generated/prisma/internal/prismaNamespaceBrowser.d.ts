import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Currency: "Currency";
    readonly Device: "Device";
    readonly Employee: "Employee";
    readonly Product: "Product";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const CurrencyScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly symbol: "symbol";
    readonly exchangeRate: "exchangeRate";
    readonly isDefault: "isDefault";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CurrencyScalarFieldEnum = (typeof CurrencyScalarFieldEnum)[keyof typeof CurrencyScalarFieldEnum];
export declare const DeviceScalarFieldEnum: {
    readonly id: "id";
    readonly employeeId: "employeeId";
    readonly tokenHash: "tokenHash";
    readonly fingerprint: "fingerprint";
    readonly type: "type";
    readonly browser: "browser";
    readonly os: "os";
    readonly userAgent: "userAgent";
    readonly ip: "ip";
    readonly country: "country";
    readonly city: "city";
    readonly status: "status";
    readonly requestedAt: "requestedAt";
    readonly decidedAt: "decidedAt";
    readonly lastSeenAt: "lastSeenAt";
};
export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum];
export declare const EmployeeScalarFieldEnum: {
    readonly id: "id";
    readonly fullName: "fullName";
    readonly phone: "phone";
    readonly passwordHash: "passwordHash";
    readonly isSuperadmin: "isSuperadmin";
    readonly isActive: "isActive";
    readonly pages: "pages";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly quantity: "quantity";
    readonly costPrice: "costPrice";
    readonly costCurrencyId: "costCurrencyId";
    readonly salePrice: "salePrice";
    readonly saleCurrencyId: "saleCurrencyId";
    readonly wholesalePrice: "wholesalePrice";
    readonly wholesaleCurrencyId: "wholesaleCurrencyId";
    readonly lastSoldAt: "lastSoldAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
