import type { Request } from 'express';
import { AuthService } from './auth.service.js';
import { DeviceLoginDto, LoginDto, RefreshDto } from './dto/login.dto.js';
import { type AuthUser } from './auth.guard.js';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: LoginDto, req: Request): Promise<{
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
    profile(user: AuthUser): Promise<{
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
    refresh(dto: RefreshDto): Promise<{
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
    deviceLogin(dto: DeviceLoginDto): Promise<{
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
}
