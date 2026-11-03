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
] as const;

// Faqat ko'rish uchun mo'ljallangan sahifalarda amallar yo'q
const VIEW_ONLY_PAGES: string[] = ['stat', 'clientreport'];

export const ACTIONS = ['create', 'update', 'delete'] as const;

export const ALL_PERMISSIONS: string[] = PAGES.flatMap((page) => [
  `menu.${page}`,
  ...(VIEW_ONLY_PAGES.includes(page)
    ? []
    : ACTIONS.map((action) => `${page}.${action}`)),
]);

export function splitPermissions(permissions: string[]) {
  return {
    pages: permissions
      .filter((p) => p.startsWith('menu.'))
      .map((p) => p.slice('menu.'.length)),
    actions: permissions.filter((p) => !p.startsWith('menu.')),
  };
}
