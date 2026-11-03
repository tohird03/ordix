import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { DeviceStatus, DeviceType } from '../../generated/prisma/client.js';
import { PrismaService } from '../../prisma/prisma.service.js';
import { LoginDto } from './dto/login.dto.js';
type RequestMeta = {
    userAgent?: string;
    ip?: string;
};
export declare class AuthService {
    private readonly prisma;
    private readonly jwt;
    private readonly config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    login(dto: LoginDto, meta: RequestMeta): Promise<{
        data: {
            status: string;
            staff: {
                id: string;
                isSuperadmin: boolean;
                pages: string[];
                fullname: string;
                phone: string;
                createdAt: string;
                deletedAt: null;
                updatedAt: string;
                actions: never[];
                payments: never[];
            };
            tokens: {
                accessToken: string;
                refreshToken: string;
            };
        };
    } | {
        data: {
            status: string;
            message: string;
            deviceToken?: undefined;
        };
    } | {
        data: {
            status: string;
            deviceToken: string;
            message: string;
        };
    }>;
    deviceLogin(deviceToken: string): Promise<{
        data: {
            status: string;
            staff: {
                id: string;
                isSuperadmin: boolean;
                pages: string[];
                fullname: string;
                phone: string;
                createdAt: string;
                deletedAt: null;
                updatedAt: string;
                actions: never[];
                payments: never[];
            };
            tokens: {
                accessToken: string;
                refreshToken: string;
            };
        };
    } | {
        data: {
            status: string;
            message: string;
        };
    }>;
    approveDevice(id: number): Promise<{
        data: {
            id: number;
            tokenHash: string;
            employeeId: string;
            fingerprint: string | null;
            type: DeviceType;
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
        };
    }>;
    rejectDevice(id: number): Promise<{
        data: {
            id: number;
            tokenHash: string;
            employeeId: string;
            fingerprint: string | null;
            type: DeviceType;
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
        };
    }>;
    deleteDevice(id: number): Promise<{
        data: {
            success: boolean;
            message: string;
        };
    }>;
    refresh(refreshToken: string): Promise<{
        data: {
            status: string;
            staff: {
                id: string;
                isSuperadmin: boolean;
                pages: string[];
                fullname: string;
                phone: string;
                createdAt: string;
                deletedAt: null;
                updatedAt: string;
                actions: never[];
                payments: never[];
            };
            tokens: {
                accessToken: string;
                refreshToken: string;
            };
        };
    }>;
    profile(id: string): Promise<{
        data: {
            id: string;
            isSuperadmin: boolean;
            pages: string[];
            fullname: string;
            phone: string;
            createdAt: string;
            deletedAt: null;
            updatedAt: string;
            actions: never[];
            payments: never[];
        };
    }>;
    private approved;
    private buildStaff;
    private issueTokens;
    private createPendingDevice;
    private formatDate;
    private fingerprint;
    private hash;
}
export {};
