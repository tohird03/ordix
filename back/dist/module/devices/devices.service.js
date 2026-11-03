var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, Injectable, NotFoundException, } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
let DevicesService = class DevicesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async list(status) {
        const dataDevices = await this.prisma.device.findMany({
            where: status ? { status } : {},
            orderBy: { requestedAt: 'desc' },
            omit: { tokenHash: true },
            include: {
                employee: {
                    select: { id: true, fullName: true, phone: true },
                },
            },
        });
        return {
            data: {
                data: dataDevices
            }
        };
    }
    async decide(id, from, to) {
        const device = await this.prisma.device.findUnique({ where: { id } });
        if (!device)
            throw new NotFoundException('Qurilma topilmadi');
        if (device.status !== from) {
            throw new BadRequestException(`Qurilma holati ${device.status}, bu amalni bajarib bo'lmaydi`);
        }
        return this.prisma.device.update({
            where: { id },
            data: { status: to, decidedAt: new Date() },
            omit: { tokenHash: true },
        });
    }
};
DevicesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], DevicesService);
export { DevicesService };
//# sourceMappingURL=devices.service.js.map