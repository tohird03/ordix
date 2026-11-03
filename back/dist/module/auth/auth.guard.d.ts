import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { Request } from 'express';
import { PrismaService } from '../../prisma/prisma.service.js';
export type AuthUser = {
    id: string;
    isSuperadmin: boolean;
    pages: string[];
    deviceId?: number;
};
export type AuthRequest = Request & {
    user: AuthUser;
};
export declare class AuthGuard implements CanActivate {
    private readonly jwt;
    private readonly prisma;
    constructor(jwt: JwtService, prisma: PrismaService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
