import { DeviceStatus } from '../../generated/prisma/client.js';
import { PrismaService } from '../../prisma/prisma.service.js';
export declare class DevicesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    decide(id: number, from: DeviceStatus, to: DeviceStatus): Promise<{
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
