import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateCustomerDto } from './dto/create-customer.dto.js';
import { CustomerQueryDto } from './dto/customer-query.dto.js';
import { UpdateCustomerDto } from './dto/update-customer.dto.js';

const select = {
  id: true, name: true, phone: true, address: true, lat: true, lng: true,
  debt: true, lastSaleAt: true, createdAt: true, updatedAt: true,
} as const;

type Row = Prisma.CustomerGetPayload<{ select: typeof select }>;

// Qarz bazada BigInt (2.1 mlrd dan oshishi mumkin), API'da oddiy son
const toDto = (c: Row) => ({ ...c, debt: Number(c.debt) });

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(q: CustomerQueryDto) {
    const search = q.search?.trim();
    const digits = search?.replace(/\D/g, '');

    const where: Prisma.CustomerWhereInput = {
      deletedAt: null,
      ...(q.hasDebt ? { debt: { gt: 0 } } : {}),
      ...(search
        ? {
            OR: [
              { name: { contains: search, mode: 'insensitive' } },
              ...(digits ? [{ phone: { contains: digits } }] : []),
            ],
          }
        : {}),
    };

    const [rows, total] = await this.prisma.$transaction([
      this.prisma.customer.findMany({
        where,
        select,
        orderBy: { createdAt: 'desc' },
        skip: (q.pageNumber - 1) * q.pageSize,
        take: q.pageSize,
      }),
      this.prisma.customer.count({ where }),
    ]);

    return { items: rows.map(toDto), total, pageNumber: q.pageNumber, pageSize: q.pageSize };
  }

  async findOne(id: string) {
    return toDto(await this.getOrThrow(id));
  }

  async create(dto: CreateCustomerDto) {
    this.assertLocation(dto.lat ?? null, dto.lng ?? null);
    const { debt, ...rest } = dto;
    const created = await this.prisma.customer.create({
      data: { ...rest, debt: BigInt(debt ?? 0) },
      select,
    });
    return toDto(created);
  }

  async update(id: string, dto: UpdateCustomerDto) {
    const current = await this.getOrThrow(id);
    this.assertLocation(
      dto.lat !== undefined ? dto.lat : current.lat,
      dto.lng !== undefined ? dto.lng : current.lng,
    );
    return toDto(await this.prisma.customer.update({ where: { id }, data: dto, select }));
  }

  // Qarzi bor mijozni o'chirib bo'lmaydi. O'chirish "soft": eski sotuvlar bog'langan bo'lib qoladi
  async remove(id: string) {
    const current = await this.getOrThrow(id);
    if (current.debt > 0n) {
      throw new BadRequestException("Qarzi bor mijozni o'chirib bo'lmaydi");
    }
    await this.prisma.customer.update({ where: { id }, data: { deletedAt: new Date() } });
    return { id };
  }

  private async getOrThrow(id: string) {
    const customer = await this.prisma.customer.findFirst({ where: { id, deletedAt: null }, select });
    if (!customer) throw new NotFoundException('Mijoz topilmadi');
    return customer;
  }

  // Joylashuv yo ikkala koordinata bilan, yo umuman bo'lmaydi
  private assertLocation(lat: number | null, lng: number | null) {
    if ((lat === null) !== (lng === null)) {
      throw new BadRequestException('lat va lng birga yuborilishi kerak');
    }
  }
}
