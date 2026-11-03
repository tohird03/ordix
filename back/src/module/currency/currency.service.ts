import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateCurrencyDto, UpdateCurrencyDto } from './dto/currency.dto.js';
import { PaginationQueryDto } from '../../common/dto/pagination.dto.js';
import { paginated, pageArgs } from '../../common/paginate.js';

export interface ICurrency {
  id: string;
  name: string;
  symbol: string;
  exchangeRate: number;
  isDefault: boolean;
}

const toDto = (c: ICurrency): ICurrency => ({
  id: c.id,
  name: c.name,
  symbol: c.symbol,
  exchangeRate: c.exchangeRate,
  isDefault: c.isDefault,
});

@Injectable()
export class CurrencyService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}

  // UZS har doim mavjud: asosiy valyuta, kursi 1
  async onModuleInit() {
    await this.prisma.currency.upsert({
      where: { symbol: 'UZS' },
      update: {},
      create: { name: "So'm", symbol: 'UZS', exchangeRate: 1, isDefault: true },
    });
  }

  async findAll(q: PaginationQueryDto) {
    const where = q.description
      ? {
          OR: [
            { name: { contains: q.description, mode: 'insensitive' as const } },
            { symbol: { contains: q.description, mode: 'insensitive' as const } },
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

  async create(dto: CreateCurrencyDto): Promise<ICurrency> {
    const exists = await this.prisma.currency.findUnique({ where: { symbol: dto.symbol } });
    if (exists) throw new ConflictException(`${dto.symbol} valyutasi allaqachon mavjud`);

    const created = await this.prisma.currency.create({
      data: { name: dto.name, symbol: dto.symbol, exchangeRate: dto.exchangeRate },
    });
    return toDto(created);
  }

  async update(dto: UpdateCurrencyDto): Promise<ICurrency> {
    const { id, ...data } = dto;

    const currency = await this.prisma.currency.findUnique({ where: { id } });
    if (!currency) throw new NotFoundException('Valyuta topilmadi');

    if (currency.isDefault && data.exchangeRate !== undefined && data.exchangeRate !== 1) {
      throw new BadRequestException("Asosiy valyuta (UZS) kursi doim 1 bo'ladi");
    }

    const updated = await this.prisma.currency.update({ where: { id }, data });
    return toDto(updated);
  }
}
