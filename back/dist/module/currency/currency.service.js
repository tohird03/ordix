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
import { PrismaService } from '../../prisma/prisma.service.js';
import { paginated, pageArgs } from '../../common/paginate.js';
const toDto = (c) => ({
    id: c.id,
    name: c.name,
    symbol: c.symbol,
    exchangeRate: c.exchangeRate,
    isDefault: c.isDefault,
});
let CurrencyService = class CurrencyService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async onModuleInit() {
        await this.prisma.currency.upsert({
            where: { symbol: 'UZS' },
            update: {},
            create: { name: "So'm", symbol: 'UZS', exchangeRate: 1, isDefault: true },
        });
    }
    async findAll(q) {
        const where = q.description
            ? {
                OR: [
                    { name: { contains: q.description, mode: 'insensitive' } },
                    { symbol: { contains: q.description, mode: 'insensitive' } },
                ],
            }
            : {};
        const [totalCount, list] = await this.prisma.$transaction([
            this.prisma.currency.count({ where }),
            this.prisma.currency.findMany({
                where,
                orderBy: [{ isDefault: 'desc' }, { createdAt: 'asc' }],
                ...pageArgs(q),
            }),
        ]);
        return paginated(list.map(toDto), totalCount, q);
    }
    async create(dto) {
        const exists = await this.prisma.currency.findUnique({ where: { symbol: dto.symbol } });
        if (exists)
            throw new ConflictException(`${dto.symbol} valyutasi allaqachon mavjud`);
        const created = await this.prisma.currency.create({
            data: { name: dto.name, symbol: dto.symbol, exchangeRate: dto.exchangeRate },
        });
        return toDto(created);
    }
    async update(dto) {
        const { id, ...data } = dto;
        const currency = await this.prisma.currency.findUnique({ where: { id } });
        if (!currency)
            throw new NotFoundException('Valyuta topilmadi');
        if (currency.isDefault && data.exchangeRate !== undefined && data.exchangeRate !== 1) {
            throw new BadRequestException("Asosiy valyuta (UZS) kursi doim 1 bo'ladi");
        }
        const updated = await this.prisma.currency.update({ where: { id }, data });
        return toDto(updated);
    }
};
CurrencyService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], CurrencyService);
export { CurrencyService };
//# sourceMappingURL=currency.service.js.map