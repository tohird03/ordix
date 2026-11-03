import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateCurrencyDto } from './dto/create-currency.dto.js';
import { UpdateCurrencyDto } from './dto/update-currency.dto.js';

// Asosiy (default) valyuta: kursi doim 1, o'chirib ham, o'zgartirib ham bo'lmaydi
export const DEFAULT_CURRENCY = {
  symbol: 'UZS',
  name: "O'zbek so'mi",
  exchangeRate: 1,
} as const;

const select = { id: true, name: true, symbol: true, exchangeRate: true } as const;

@Injectable()
export class CurrenciesService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}

  // Ilova ishga tushganda UZS borligini ta'minlaydi
  async onModuleInit() {
    await this.prisma.currency.upsert({
      where: { symbol: DEFAULT_CURRENCY.symbol },
      update: {},
      create: { ...DEFAULT_CURRENCY },
    });
  }

  findAll() {
    return this.prisma.currency.findMany({ select, orderBy: { createdAt: 'asc' } });
  }

  async create(dto: CreateCurrencyDto) {
    await this.assertSymbolFree(dto.symbol);
    return this.prisma.currency.create({ data: dto, select });
  }

  async update(id: string, dto: UpdateCurrencyDto) {
    const current = await this.getOrThrow(id);
    const isDefault = current.symbol === DEFAULT_CURRENCY.symbol;

    if (isDefault && dto.symbol !== undefined && dto.symbol !== current.symbol) {
      throw new BadRequestException("Asosiy valyuta belgisini o'zgartirib bo'lmaydi");
    }
    if (isDefault && dto.exchangeRate !== undefined && dto.exchangeRate !== 1) {
      throw new BadRequestException("Asosiy valyuta kursi doim 1 bo'ladi");
    }
    if (dto.symbol !== undefined && dto.symbol !== current.symbol) {
      await this.assertSymbolFree(dto.symbol);
    }

    return this.prisma.currency.update({ where: { id }, data: dto, select });
  }

  async remove(id: string) {
    const current = await this.getOrThrow(id);
    if (current.symbol === DEFAULT_CURRENCY.symbol) {
      throw new BadRequestException("Asosiy valyutani o'chirib bo'lmaydi");
    }
    await this.prisma.currency.delete({ where: { id } });
    return { id };
  }

  private async getOrThrow(id: string) {
    const currency = await this.prisma.currency.findUnique({ where: { id }, select });
    if (!currency) throw new NotFoundException('Valyuta topilmadi');
    return currency;
  }

  private async assertSymbolFree(symbol: string) {
    const exists = await this.prisma.currency.findUnique({ where: { symbol } });
    if (exists) throw new ConflictException(`${symbol} valyutasi allaqachon mavjud`);
  }
}
