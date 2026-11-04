import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.10.0",
    engine: "0edf323efd1d98336f3f0a68684b56f689b900d3"
};
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
    Product: 'Product',
    Warehouse: 'Warehouse'
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
    description: 'description',
    image: 'image',
    count: 'count',
    minAmount: 'minAmount',
    warehouseId: 'warehouseId',
    costPrice: 'costPrice',
    costCurrencyId: 'costCurrencyId',
    salePrice: 'salePrice',
    saleCurrencyId: 'saleCurrencyId',
    wholesalePrice: 'wholesalePrice',
    wholesaleCurrencyId: 'wholesaleCurrencyId',
    lastSellingDate: 'lastSellingDate',
    lastSellingPrice: 'lastSellingPrice',
    lastSellingCount: 'lastSellingCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
export const WarehouseScalarFieldEnum = {
    id: 'id',
    name: 'name',
    isMain: 'isMain',
    createdAt: 'createdAt'
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
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map