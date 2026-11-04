var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { mkdir, unlink, writeFile } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { join } from 'node:path';
import { pageArgs } from '../../common/paginate.js';
import { IMAGE_TYPES } from './functions/product-image.interceptor.js';
import { calcPage, round2, toDto } from './functions/product.mapper.js';
import { PrismaService } from '../../prisma/prisma.service.js';
const include = { costCurrency: true, saleCurrency: true, wholesaleCurrency: true };
const escapeLike = (s) => s.replace(/[\\%_]/g, '\\$&');
let ProductService = class ProductService {
    prisma;
    mainWarehouseId;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getMainWarehouseId() {
        if (this.mainWarehouseId)
            return this.mainWarehouseId;
        const found = await this.prisma.warehouse.findFirst({ where: { isMain: true } });
        const warehouse = found ?? (await this.prisma.warehouse.create({ data: { name: 'Asosiy ombor', isMain: true } }));
        this.mainWarehouseId = warehouse.id;
        return warehouse.id;
    }
    async checkCurrencies(dto) {
        const unique = [
            ...new Set([
                dto.prices_cost_currencyId,
                dto.prices_selling_currencyId,
                dto.prices_wholesale_currencyId,
            ]),
        ];
        const count = await this.prisma.currency.count({ where: { id: { in: unique } } });
        if (count !== unique.length)
            throw new BadRequestException('Valyuta topilmadi');
    }
    priceData(dto) {
        return {
            costPrice: dto.prices_cost_price,
            costCurrencyId: dto.prices_cost_currencyId,
            salePrice: dto.prices_selling_price,
            saleCurrencyId: dto.prices_selling_currencyId,
            wholesalePrice: dto.prices_wholesale_price,
            wholesaleCurrencyId: dto.prices_wholesale_currencyId,
        };
    }
    async saveImage(file) {
        const name = `${randomUUID()}${IMAGE_TYPES[file.mimetype]}`;
        const dir = join(process.cwd(), 'uploads', 'products');
        await mkdir(dir, { recursive: true });
        await writeFile(join(dir, name), file.buffer);
        return `/uploads/products/${name}`;
    }
    async removeImage(url) {
        if (!url)
            return;
        await unlink(join(process.cwd(), url)).catch(() => undefined);
    }
    async calcTotal(description) {
        const pattern = `%${escapeLike(description ?? '')}%`;
        const [row] = await this.prisma.$queryRaw `
      SELECT
        COALESCE(SUM(p."count"), 0)::float8                                         AS "totalCount",
        COALESCE(SUM(p."count" * p."salePrice" * sc."exchangeRate"), 0)::float8      AS "totalPrice",
        COALESCE(SUM(p."count" * p."costPrice" * cc."exchangeRate"), 0)::float8      AS "totalCost",
        COALESCE(SUM(p."count" * p."wholesalePrice" * wc."exchangeRate"), 0)::float8 AS "totalWholesale"
      FROM "Product" p
      JOIN "Currency" cc ON cc."id" = p."costCurrencyId"
      JOIN "Currency" sc ON sc."id" = p."saleCurrencyId"
      JOIN "Currency" wc ON wc."id" = p."wholesaleCurrencyId"
      WHERE p."deletedAt" IS NULL AND p."name" ILIKE ${pattern}
    `;
        return {
            totalCount: Number(row.totalCount),
            totalPrice: round2(Number(row.totalPrice)),
            totalCost: round2(Number(row.totalCost)),
            totalWholesale: round2(Number(row.totalWholesale)),
        };
    }
    async findAll(q) {
        const where = {
            deletedAt: null,
            ...(q.description
                ? { name: { contains: q.description, mode: 'insensitive' } }
                : {}),
        };
        const [totalCount, list, calcTotal] = await Promise.all([
            this.prisma.product.count({ where }),
            this.prisma.product.findMany({
                where,
                include,
                orderBy: { createdAt: 'desc' },
                ...pageArgs(q),
            }),
            this.calcTotal(q.description),
        ]);
        const items = list.map(toDto);
        const calc = { calcPage: calcPage(items), calcTotal };
        return {
            data: {
                totalCount,
                pageNumber: q.pageNumber,
                pageSize: q.pageSize,
                data: items,
                calc,
            },
        };
    }
    async create(dto, file) {
        await this.checkCurrencies(dto);
        const image = file ? await this.saveImage(file) : null;
        const created = await this.prisma.product.create({
            data: {
                name: dto.name,
                description: dto.description ?? null,
                count: dto.count,
                minAmount: dto.minAmount,
                image,
                warehouseId: await this.getMainWarehouseId(),
                ...this.priceData(dto),
            },
            include,
        });
        return toDto(created);
    }
    async update(dto, file) {
        const product = await this.prisma.product.findFirst({ where: { id: dto.id, deletedAt: null } });
        if (!product)
            throw new NotFoundException('Mahsulot topilmadi');
        await this.checkCurrencies(dto);
        const image = file ? await this.saveImage(file) : undefined;
        const updated = await this.prisma.product.update({
            where: { id: dto.id },
            data: {
                name: dto.name,
                description: dto.description ?? null,
                count: dto.count,
                minAmount: dto.minAmount,
                image,
                ...this.priceData(dto),
            },
            include,
        });
        if (image)
            await this.removeImage(product.image);
        return toDto(updated);
    }
    async remove(id) {
        const product = await this.prisma.product.findFirst({ where: { id, deletedAt: null } });
        if (!product)
            throw new NotFoundException('Mahsulot topilmadi');
        await this.prisma.product.update({ where: { id }, data: { deletedAt: new Date() } });
        return { success: true };
    }
};
ProductService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], ProductService);
export { ProductService };
//# sourceMappingURL=product.service.js.map