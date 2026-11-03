var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ConflictException, ForbiddenException, Injectable, NotFoundException, } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { normalizePhone } from '../../common/phone.js';
import { PrismaService } from '../../prisma/prisma.service.js';
import { pageArgs } from '../../common/paginate.js';
let EmployeesService = class EmployeesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    buildSearch(search) {
        const tokens = search?.trim().split(/\s+/).filter(Boolean) ?? [];
        if (!tokens.length)
            return {};
        return {
            AND: tokens.map((token) => {
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
    async list(query) {
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
    async findOne(id) {
        const employee = await this.prisma.employee.findUnique({
            where: { id },
            omit: { passwordHash: true },
        });
        if (!employee)
            throw new NotFoundException('Xodim topilmadi');
        return employee;
    }
    async create(dto) {
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
    async update(id, dto) {
        const target = await this.getEditable(id);
        const data = {};
        if (dto.fullName !== undefined)
            data.fullName = dto.fullName;
        if (dto.isActive !== undefined)
            data.isActive = dto.isActive;
        if (dto.pages !== undefined)
            data.pages = [...new Set(dto.pages)];
        if (dto.phone !== undefined) {
            const phone = normalizePhone(dto.phone);
            if (phone !== target.phone)
                await this.ensurePhoneFree(phone);
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
    async remove(id) {
        await this.getEditable(id);
        await this.prisma.employee.delete({ where: { id } });
        return { deleted: true };
    }
    async getEditable(id) {
        const employee = await this.prisma.employee.findUnique({ where: { id } });
        if (!employee)
            throw new NotFoundException('Xodim topilmadi');
        if (employee.isSuperadmin) {
            throw new ForbiddenException("Superadminni o'zgartirib bo'lmaydi");
        }
        return employee;
    }
    async ensurePhoneFree(phone) {
        const exists = await this.prisma.employee.findUnique({ where: { phone } });
        if (exists) {
            throw new ConflictException('Bu telefon raqam allaqachon mavjud');
        }
    }
};
EmployeesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], EmployeesService);
export { EmployeesService };
//# sourceMappingURL=staffs.service.js.map