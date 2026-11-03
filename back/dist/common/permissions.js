export const PAGES = [
    'stat',
    'product',
    'selling',
    'arrival',
    'returning',
    'client',
    'clientpayment',
    'supplier',
    'supplierpayment',
    'stuff',
    'stuffpayment',
    'clientreport',
];
const VIEW_ONLY_PAGES = ['stat', 'clientreport'];
export const ACTIONS = ['create', 'update', 'delete'];
export const ALL_PERMISSIONS = PAGES.flatMap((page) => [
    `menu.${page}`,
    ...(VIEW_ONLY_PAGES.includes(page)
        ? []
        : ACTIONS.map((action) => `${page}.${action}`)),
]);
export function splitPermissions(permissions) {
    return {
        pages: permissions
            .filter((p) => p.startsWith('menu.'))
            .map((p) => p.slice('menu.'.length)),
        actions: permissions.filter((p) => !p.startsWith('menu.')),
    };
}
//# sourceMappingURL=permissions.js.map