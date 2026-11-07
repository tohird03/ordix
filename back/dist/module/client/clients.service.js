var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, ConflictException, Injectable, NotFoundException, } from '@nestjs/common';
import { clientInclude, toClientDetail, toClientInfo } from './functions/clients.mapper.js';
import { PrismaService } from '../../prisma/prisma.service.js';
const normalizePhone = (phone) => phone.replace(/\s+/g, '');
let ClientsService = class ClientsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findMany(query) {
        const { pageNumber, pageSize, description } = query;
        const search = description?.trim();
        const where = {
            deletedAt: null,
            ...(search && {
                OR: [
                    { fullname: { contains: search, mode: 'insensitive' } },
                    { phone: { contains: search } },
                ],
            }),
        };
        const [totalCount, clients] = await this.prisma.$transaction([
            this.prisma.client.count({ where }),
            this.prisma.client.findMany({
                where,
                include: clientInclude,
                orderBy: { createdAt: 'desc' },
                skip: (pageNumber - 1) * pageSize,
                take: pageSize,
            }),
        ]);
        return {
            data: {
                totalCount,
                pageNumber,
                pageSize,
                data: clients.map(toClientInfo),
            },
        };
    }
    async findOne(id) {
        const client = await this.prisma.client.findFirst({
            where: { id, deletedAt: null },
            include: clientInclude,
        });
        if (!client)
            throw new NotFoundException('Mijoz topilmadi');
        return { data: toClientDetail(client) };
    }
    async create(dto) {
        const phone = normalizePhone(dto.phone);
        await this.ensurePhoneFree(phone);
        const client = await this.prisma.client.create({
            data: {
                fullname: dto.fullname.trim(),
                phone,
                address: dto.address,
                latitude: dto.latitude,
                longitude: dto.longitude,
            },
            select: { id: true, fullname: true },
        });
        return { data: { id: client.id, name: client.fullname } };
    }
    async update(dto) {
        await this.findActive(dto.id);
        const phone = dto.phone ? normalizePhone(dto.phone) : undefined;
        if (phone)
            await this.ensurePhoneFree(phone, dto.id);
        await this.prisma.client.update({
            where: { id: dto.id },
            data: {
                fullname: dto.fullname?.trim(),
                phone,
                address: dto.address,
                latitude: dto.latitude,
                longitude: dto.longitude,
            },
        });
        return { success: true };
    }
    async remove(id) {
        await this.findActive(id);
        const openDebts = await this.prisma.clientDebt.count({
            where: { clientId: id, amount: { not: 0 } },
        });
        if (openDebts > 0) {
            throw new BadRequestException("Qarzi bor mijozni o'chirib bo'lmaydi");
        }
        await this.prisma.client.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
        return { success: true };
    }
    async adjustDebt(tx, clientId, currencyId, delta) {
        await tx.clientDebt.upsert({
            where: { clientId_currencyId: { clientId, currencyId } },
            create: { clientId, currencyId, amount: delta },
            update: { amount: { increment: delta } },
        });
    }
    async findActive(id) {
        const client = await this.prisma.client.findFirst({
            where: { id, deletedAt: null },
            select: { id: true },
        });
        if (!client)
            throw new NotFoundException('Mijoz topilmadi');
        return client;
    }
    async ensurePhoneFree(phone, exceptId) {
        const found = await this.prisma.client.findUnique({
            where: { phone },
            select: { id: true },
        });
        if (found && found.id !== exceptId) {
            throw new ConflictException('Bu telefon raqami bilan mijoz mavjud');
        }
    }
};
ClientsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], ClientsService);
export { ClientsService };
//# sourceMappingURL=clients.service.js.map