export declare const DeviceStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
    readonly BLOCK: "BLOCK";
};
export type DeviceStatus = (typeof DeviceStatus)[keyof typeof DeviceStatus];
export declare const DeviceType: {
    readonly DESKTOP: "DESKTOP";
    readonly MOBILE: "MOBILE";
    readonly TABLET: "TABLET";
    readonly OTHER: "OTHER";
};
export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType];
