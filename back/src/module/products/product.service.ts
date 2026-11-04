import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { mkdir, unlink, writeFile } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { join } from 'node:path';
import { pageArgs } from '../../common/paginate.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { IMAGE_TYPES } from './functions/product-image.interceptor.js';
import { calcPage, round2, toDto } from './functions/product.mapper.js';
import type { IProduct, IProductTotalCalc } from './functions/product.types.js';
import { PrismaService } from '../../prisma/prisma.service.js';
import { PaginationQueryDto } from '../../common/dto/pagination.dto.js';

const include = { costCurrency: true, saleCurrency: true, wholesaleCurrency: true };

interface TotalsRow {
  totalCount: number;
  totalPrice: number;
  totalCost: number;
  totalWholesale: number;
}

const escapeLike = (s: string) => s.replace(/[\\%_]/g, '\\$&');

@Injectable()
export class ProductService {
  private mainWarehouseId?: string;

  constructor(private readonly prisma: PrismaService) {}

  // yashirin asosiy ombor: yo'q bo'lsa, birinchi marta avtomatik yaratiladi
  private async getMainWarehouseId() {
    if (this.mainWarehouseId) return this.mainWarehouseId;

    const found = await this.prisma.warehouse.findFirst({ where: { isMain: true } });
    const warehouse =
      found ?? (await this.prisma.warehouse.create({ data: { name: 'Asosiy ombor', isMain: true } }));

    this.mainWarehouseId = warehouse.id;
    return warehouse.id;
  }

  private async checkCurrencies(dto: CreateProductDto) {
    const unique = [
      ...new Set([
        dto.prices_cost_currencyId,
        dto.prices_selling_currencyId,
        dto.prices_wholesale_currencyId,
      ]),
    ];
    const count = await this.prisma.currency.count({ where: { id: { in: unique } } });
    if (count !== unique.length) throw new BadRequestException('Valyuta topilmadi');
  }

  private priceData(dto: CreateProductDto) {
    return {
      costPrice: dto.prices_cost_price,
      costCurrencyId: dto.prices_cost_currencyId,
      salePrice: dto.prices_selling_price,
      saleCurrencyId: dto.prices_selling_currencyId,
      wholesalePrice: dto.prices_wholesale_price,
      wholesaleCurrencyId: dto.prices_wholesale_currencyId,
    };
  }

  private async saveImage(file: Express.Multer.File) {
    const name = `${randomUUID()}${IMAGE_TYPES[file.mimetype]}`;
    const dir = join(process.cwd(), 'uploads', 'products');
    await mkdir(dir, { recursive: true });
    await writeFile(join(dir, name), file.buffer);
    return `/uploads/products/${name}`;
  }

  private async removeImage(url: string | null) {
    if (!url) return;
    await unlink(join(process.cwd(), url)).catch(() => undefined);
  }

  // barcha (qidiruvga mos) mahsulotlar yig'indisi, UZS da (valyutaning joriy kursi bilan)
  private async calcTotal(description?: string): Promise<IProductTotalCalc['calcTotal']> {
    const pattern = `%${escapeLike(description ?? '')}%`;

    const [row] = await this.prisma.$queryRaw<TotalsRow[]>`
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

  async findAll(q: PaginationQueryDto) {
    const where = {
      deletedAt: null,
      ...(q.description
        ? { name: { contains: q.description, mode: 'insensitive' as const } }
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
    const calc: IProductTotalCalc = { calcPage: calcPage(items), calcTotal };

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

  async create(dto: CreateProductDto, file?: Express.Multer.File): Promise<IProduct> {
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

  async update(dto: UpdateProductDto, file?: Express.Multer.File): Promise<IProduct> {
    const product = await this.prisma.product.findFirst({ where: { id: dto.id, deletedAt: null } });
    if (!product) throw new NotFoundException('Mahsulot topilmadi');

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

    if (image) await this.removeImage(product.image); // eski rasm o'chiriladi
    return toDto(updated);
  }

  async remove(id: string) {
    const product = await this.prisma.product.findFirst({ where: { id, deletedAt: null } });
    if (!product) throw new NotFoundException('Mahsulot topilmadi');

    await this.prisma.product.update({ where: { id }, data: { deletedAt: new Date() } });
    return { success: true };
  }
}
