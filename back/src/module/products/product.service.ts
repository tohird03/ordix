import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client.js';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { ListProductsDto } from './dto/get-products.dto.js';

const include = {
  costCurrency: true,
  saleCurrency: true,
  wholesaleCurrency: true,
} satisfies Prisma.ProductInclude;

type ProductFull = Prisma.ProductGetPayload<{ include: typeof include }>;

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) { }

  async list(q: ListProductsDto) {
    const where: Prisma.ProductWhereInput = {
      deletedAt: null,
      ...(q.search && {
        name: { contains: q.search, mode: 'insensitive' },
      }),
    };

    const [items, total] = await Promise.all([
      this.prisma.product.findMany({
        where,
        include,
        orderBy: { createdAt: 'desc' },
        skip: (q.pageNumber - 1) * q.pageSize,
        take: q.pageSize,
      }),
      this.prisma.product.count({ where }),
    ]);

    return { data: items.map((p) => this.toResponse(p)), total };
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findFirst({
      where: { id, deletedAt: null },
      include,
    });
    if (!product) throw new NotFoundException('Mahsulot topilmadi');
    return this.toResponse(product);
  }

  async create(dto: CreateProductDto, image?: string) {
    const product = await this.prisma.product.create({
      data: this.toData(dto, image) as Prisma.ProductUncheckedCreateInput,
      include,
    });
    return this.toResponse(product);
  }

  async update(id: string, dto: UpdateProductDto, image?: string) {
    await this.ensureExists(id);
    const product = await this.prisma.product.update({
      where: { id },
      data: this.toData(dto, image),
      include,
    });
    return this.toResponse(product);
  }

  async remove(id: string) {
    await this.ensureExists(id);
    await this.prisma.product.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
    return { success: true };
  }

  private async ensureExists(id: string) {
    const exists = await this.prisma.product.findFirst({
      where: { id, deletedAt: null },
      select: { id: true },
    });
    if (!exists) throw new NotFoundException('Mahsulot topilmadi');
  }

  // Flat DTO -> Prisma. undefined qiymatlarni Prisma e'tiborsiz qoldiradi,
  // shuning uchun create va update uchun bitta mapper yetadi.
  private toData(dto: UpdateProductDto, image?: string) {
    return {
      name: dto.name,
      description: dto.description,
      warehouseId: dto.warehouseId,
      count: dto.count,
      minAmount: dto.minAmount,
      costPrice: dto.prices_cost_price,
      costCurrencyId: dto.prices_cost_currencyId,
      salePrice: dto.prices_selling_price,
      saleCurrencyId: dto.prices_selling_currencyId,
      wholesalePrice: dto.prices_wholesale_price,
      wholesaleCurrencyId: dto.prices_wholesale_currencyId,
      ...(image && { image }),
    };
  }

  // Prisma -> IProducts
  private toResponse(p: ProductFull) {
    const count = Number(p.count);

    const price = (
      kind: string,
      value: Prisma.Decimal,
      currency: ProductFull['costCurrency'],
    ) => ({
      id: `${p.id}-${kind}`,
      price: Number(value),
      totalPrice: Number(value) * count,
      currency,
      exchangeRate: Number((currency as any)?.rate ?? 1), // Currency modelidagi kurs maydoniga moslang
    });

    return {
      id: p.id,
      name: p.name,
      description: p.description ?? '',
      count,
      minAmount: Number(p.minAmount),
      image: (p as any).image ?? '',
      createdAt: p.createdAt.toISOString(),
      prices: {
        cost: price('cost', p.costPrice, p.costCurrency),
        selling: price('selling', p.salePrice, p.saleCurrency),
        wholesale: price('wholesale', p.wholesalePrice, p.wholesaleCurrency),
      },
    };
  }
}
