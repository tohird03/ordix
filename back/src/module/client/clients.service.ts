import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto.js';
import { UpdateClientDto } from './dto/update-client.dto.js';
import { GetClientsDto } from './dto/get-client.dto.js';
import { clientInclude, toClientDetail, toClientInfo } from './functions/clients.mapper.js';
import { PrismaService } from '../../prisma/prisma.service.js';
import { Prisma } from '../../generated/prisma/client.js';

const normalizePhone = (phone: string) => phone.replace(/\s+/g, '');

@Injectable()
export class ClientsService {
  constructor(private readonly prisma: PrismaService) {}

  // GET clients/many
  async findMany(query: GetClientsDto) {
    const { pageNumber, pageSize, description } = query;
    const search = description?.trim();

    const where: Prisma.ClientWhereInput = {
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

  // GET clients/:id
  async findOne(id: string) {
    const client = await this.prisma.client.findFirst({
      where: { id, deletedAt: null },
      include: clientInclude,
    });
    if (!client) throw new NotFoundException('Mijoz topilmadi');

    return { data: toClientDetail(client) };
  }

  // POST clients  ->  IOneElement
  async create(dto: CreateClientDto) {
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

  // PATCH clients  (id body'dan)  ->  ISuccessResponse
  async update(dto: UpdateClientDto) {
    await this.findActive(dto.id);

    const phone = dto.phone ? normalizePhone(dto.phone) : undefined;
    if (phone) await this.ensurePhoneFree(phone, dto.id);

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

  // DELETE clients/:id  (soft delete)  ->  ISuccessResponse
  async remove(id: string) {
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

  /**
   * Sotuv / to'lov / qaytaruv servislari chaqiradi.
   * delta: qarz oshsa musbat (sotuv), kamaysa manfiy (to'lov, qaytaruv).
   * Albatta action bilan BIR XIL tranzaksiya (tx) ichida chaqiring.
   */
  async adjustDebt(
    tx: Prisma.TransactionClient,
    clientId: string,
    currencyId: string,
    delta: number,
  ) {
    await tx.clientDebt.upsert({
      where: { clientId_currencyId: { clientId, currencyId } },
      create: { clientId, currencyId, amount: delta },
      update: { amount: { increment: delta } },
    });
  }

  private async findActive(id: string) {
    const client = await this.prisma.client.findFirst({
      where: { id, deletedAt: null },
      select: { id: true },
    });
    if (!client) throw new NotFoundException('Mijoz topilmadi');
    return client;
  }

  private async ensurePhoneFree(phone: string, exceptId?: string) {
    const found = await this.prisma.client.findUnique({
      where: { phone },
      select: { id: true },
    });
    if (found && found.id !== exceptId) {
      throw new ConflictException('Bu telefon raqami bilan mijoz mavjud');
    }
  }
}
