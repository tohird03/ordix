import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import bcrypt from 'bcrypt';
import { normalizePhone } from '../../common/phone.js';
import { Prisma } from '../../generated/prisma/client.js';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateEmployeeDto, EmployeeListQueryDto, UpdateEmployeeDto } from './staffs.dto.js';
import { paginated, pageArgs } from '../../common/paginate.js';

@Injectable()
export class EmployeesService {
  constructor(private readonly prisma: PrismaService) { }
  private buildSearch(search?: string): Prisma.EmployeeWhereInput {
    const tokens = search?.trim().split(/\s+/).filter(Boolean) ?? [];
    if (!tokens.length) return {};

    return {
      AND: tokens.map((token): Prisma.EmployeeWhereInput => {
        const phoneLike = /^\+?[\d\-()]+$/.test(token);
        const digits = token.replace(/\D/g, '');

        return {
          OR: [
            { fullName: { contains: token, mode: 'insensitive' } },
            ...(phoneLike && digits ? [{ phone: { contains: digits } }] : []),
          ],
        };
      }),
    };
  }

  async list(query: EmployeeListQueryDto) {
    const where = this.buildSearch(query.search);
    const [data, total] = await this.prisma.$transaction([
      this.prisma.employee.findMany({
        where,
        orderBy: { id: 'asc' },
        omit: { passwordHash: true },
        ...pageArgs(query),
      }),
      this.prisma.employee.count({ where }),
    ]);

    const pageSize = query.pageSize ?? total;

    return {
      data: {
        totalCount: total,
        pagesCount: pageSize > 0 ? Math.ceil(total / pageSize) : 0,
        pageSize,
        data,
      },
    };
  }

  async findOne(id: string) {
    const employee = await this.prisma.employee.findUnique({
      where: { id },
      omit: { passwordHash: true },
    });
    if (!employee) throw new NotFoundException('Xodim topilmadi');
    return employee;
  }

  async create(dto: CreateEmployeeDto) {
    const phone = normalizePhone(dto.phone);
    await this.ensurePhoneFree(phone);

    return this.prisma.employee.create({
      data: {
        fullName: dto.fullName,
        phone,
        isActive: true,
        passwordHash: await bcrypt.hash(dto.password, 10),
        pages: [...new Set(dto.pages ?? [])],
      },
      omit: { passwordHash: true },
    });
  }

  async update(id: string, dto: UpdateEmployeeDto) {
    const target = await this.getEditable(id);
    const data: Prisma.EmployeeUpdateInput = {};

    if (dto.fullName !== undefined) data.fullName = dto.fullName;
    if (dto.isActive !== undefined) data.isActive = dto.isActive;
    if (dto.pages !== undefined) data.pages = [...new Set(dto.pages)];

    if (dto.phone !== undefined) {
      const phone = normalizePhone(dto.phone);
      if (phone !== target.phone) await this.ensurePhoneFree(phone);
      data.phone = phone;
    }
    if (dto.password !== undefined) {
      data.passwordHash = await bcrypt.hash(dto.password, 10);
    }

    return this.prisma.employee.update({
      where: { id },
      data,
      omit: { passwordHash: true },
    });
  }

  async remove(id: string) {
    await this.getEditable(id);
    await this.prisma.employee.delete({ where: { id } });
    return { deleted: true };
  }

  private async getEditable(id: string) {
    const employee = await this.prisma.employee.findUnique({ where: { id } });
    if (!employee) throw new NotFoundException('Xodim topilmadi');
    if (employee.isSuperadmin) {
      throw new ForbiddenException("Superadminni o'zgartirib bo'lmaydi");
    }
    return employee;
  }

  private async ensurePhoneFree(phone: string) {
    const exists = await this.prisma.employee.findUnique({ where: { phone } });
    if (exists) {
      throw new ConflictException('Bu telefon raqam allaqachon mavjud');
    }
  }
}
