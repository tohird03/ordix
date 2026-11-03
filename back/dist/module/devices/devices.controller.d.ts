import { DeviceStatus } from '../../generated/prisma/client.js';
import { DevicesService } from './devices.service.js';
export declare class DevicesController {
    private readonly devices;
    constructor(devices: DevicesService);
    list(status?: DeviceStatus): Promise<{
        data: {
            data: ({
                employee: {
                    phone: string;
                    id: string;
                    fullName: string;
                };
            } & {
                id: number;
                employeeId: string;
                fingerprint: string | null;
                type: import("../../generated/prisma/enums.js").DeviceType;
                browser: string | null;
                os: string | null;
                userAgent: string | null;
                ip: string | null;
                country: string | null;
                city: string | null;
                status: DeviceStatus;
                requestedAt: Date;
                decidedAt: Date | null;
                lastSeenAt: Date | null;
            })[];
        };
    }>;
    approve(id: number): Promise<{
        id: number;
        employeeId: string;
        fingerprint: string | null;
        type: import("../../generated/prisma/enums.js").DeviceType;
        browser: string | null;
        os: string | null;
        userAgent: string | null;
        ip: string | null;
        country: string | null;
        city: string | null;
        status: DeviceStatus;
        requestedAt: Date;
        decidedAt: Date | null;
        lastSeenAt: Date | null;
    }>;
    reject(id: number): Promise<{
        id: number;
        employeeId: string;
        fingerprint: string | null;
        type: import("../../generated/prisma/enums.js").DeviceType;
        browser: string | null;
        os: string | null;
        userAgent: string | null;
        ip: string | null;
        country: string | null;
        city: string | null;
        status: DeviceStatus;
        requestedAt: Date;
        decidedAt: Date | null;
        lastSeenAt: Date | null;
    }>;
    block(id: number): Promise<{
        id: number;
        employeeId: string;
        fingerprint: string | null;
        type: import("../../generated/prisma/enums.js").DeviceType;
        browser: string | null;
        os: string | null;
        userAgent: string | null;
        ip: string | null;
        country: string | null;
        city: string | null;
        status: DeviceStatus;
        requestedAt: Date;
        decidedAt: Date | null;
        lastSeenAt: Date | null;
    }>;
    active(id: number): Promise<{
        id: number;
        employeeId: string;
        fingerprint: string | null;
        type: import("../../generated/prisma/enums.js").DeviceType;
        browser: string | null;
        os: string | null;
        userAgent: string | null;
        ip: string | null;
        country: string | null;
        city: string | null;
        status: DeviceStatus;
        requestedAt: Date;
        decidedAt: Date | null;
        lastSeenAt: Date | null;
    }>;
    revoke(id: number): Promise<{
        id: number;
        employeeId: string;
        fingerprint: string | null;
        type: import("../../generated/prisma/enums.js").DeviceType;
        browser: string | null;
        os: string | null;
        userAgent: string | null;
        ip: string | null;
        country: string | null;
        city: string | null;
        status: DeviceStatus;
        requestedAt: Date;
        decidedAt: Date | null;
        lastSeenAt: Date | null;
    }>;
}
