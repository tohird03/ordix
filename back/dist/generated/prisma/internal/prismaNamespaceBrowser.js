import * as runtime from "@prisma/client/runtime/index-browser";
export const Decimal = runtime.Decimal;
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    Currency: 'Currency',
    Device: 'Device',
    Employee: 'Employee',
    Product: 'Product'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const CurrencyScalarFieldEnum = {
    id: 'id',
    name: 'name',
    symbol: 'symbol',
    exchangeRate: 'exchangeRate',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const DeviceScalarFieldEnum = {
    id: 'id',
    employeeId: 'employeeId',
    tokenHash: 'tokenHash',
    fingerprint: 'fingerprint',
    type: 'type',
    browser: 'browser',
    os: 'os',
    userAgent: 'userAgent',
    ip: 'ip',
    country: 'country',
    city: 'city',
    status: 'status',
    requestedAt: 'requestedAt',
    decidedAt: 'decidedAt',
    lastSeenAt: 'lastSeenAt'
};
export const EmployeeScalarFieldEnum = {
    id: 'id',
    fullName: 'fullName',
    phone: 'phone',
    passwordHash: 'passwordHash',
    isSuperadmin: 'isSuperadmin',
    isActive: 'isActive',
    pages: 'pages',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const ProductScalarFieldEnum = {
    id: 'id',
    name: 'name',
    quantity: 'quantity',
    costPrice: 'costPrice',
    costCurrencyId: 'costCurrencyId',
    salePrice: 'salePrice',
    saleCurrencyId: 'saleCurrencyId',
    wholesalePrice: 'wholesalePrice',
    wholesaleCurrencyId: 'wholesaleCurrencyId',
    lastSoldAt: 'lastSoldAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map