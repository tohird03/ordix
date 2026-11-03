export declare const PAGES: readonly ["stat", "product", "selling", "arrival", "returning", "client", "clientpayment", "supplier", "supplierpayment", "stuff", "stuffpayment", "clientreport"];
export declare const ACTIONS: readonly ["create", "update", "delete"];
export declare const ALL_PERMISSIONS: string[];
export declare function splitPermissions(permissions: string[]): {
    pages: string[];
    actions: string[];
};
