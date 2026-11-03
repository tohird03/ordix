var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, UnauthorizedException, } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { isUUID } from 'class-validator';
import { DeviceStatus } from '../../generated/prisma/client.js';
import { PrismaService } from '../../prisma/prisma.service.js';
let AuthGuard = class AuthGuard {
    jwt;
    prisma;
    constructor(jwt, prisma) {
        this.jwt = jwt;
        this.prisma = prisma;
    }
    async canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const [type, token] = req.headers.authorization?.split(' ') ?? [];
        if (type !== 'Bearer' || !token) {
            throw new UnauthorizedException("Authorization sarlavhasi yo'q yoki 'Bearer <token>' shaklida emas");
        }
        let payload;
        try {
            payload = await this.jwt.verifyAsync(token);
        }
        catch {
            throw new UnauthorizedException('Token yaroqsiz yoki muddati tugagan');
        }
        if (!isUUID(payload.sub)) {
            throw new UnauthorizedException('Token eski shaklda, qayta kiring');
        }
        const employee = await this.prisma.employee.findUnique({
            where: { id: payload.sub },
        });
        if (!employee || !employee.isActive) {
            throw new UnauthorizedException('Xodim topilmadi yoki faol emas');
        }
        if (!employee.isSuperadmin) {
            const device = payload.deviceId
                ? await this.prisma.device.findUnique({
                    where: { id: payload.deviceId },
                })
                : null;
            if (!device ||
                device.employeeId !== employee.id ||
                device.status !== DeviceStatus.APPROVED) {
                throw new UnauthorizedException("Qurilma tasdiqlanmagan yoki o'chirilgan");
            }
        }
        req.user = {
            id: employee.id,
            isSuperadmin: employee.isSuperadmin,
            pages: employee.pages,
            deviceId: payload.deviceId,
        };
        return true;
    }
};
AuthGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [JwtService,
        PrismaService])
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map