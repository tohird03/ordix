var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ForbiddenException, Injectable, UnauthorizedException, } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import geoip from 'geoip-lite';
import { createHash, randomBytes } from 'node:crypto';
import { isUUID } from 'class-validator';
import { UAParser } from 'ua-parser-js';
import { normalizePhone } from '../../common/phone.js';
import { PAGES } from '../../common/pages.js';
import { DeviceStatus, DeviceType, } from '../../generated/prisma/client.js';
import { PrismaService } from '../../prisma/prisma.service.js';
let AuthService = class AuthService {
    prisma;
    jwt;
    config;
    constructor(prisma, jwt, config) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
    }
    async login(dto, meta) {
        const phone = normalizePhone(dto.phone);
        const employee = await this.prisma.employee.findUnique({
            where: { phone },
        });
        if (!employee ||
            !employee.isActive ||
            !(await bcrypt.compare(dto.password, employee.passwordHash))) {
            throw new UnauthorizedException("Telefon yoki parol noto'g'ri");
        }
        if (employee.isSuperadmin) {
            return this.approved(employee);
        }
        if (dto.deviceToken) {
            const device = await this.prisma.device.findUnique({
                where: { tokenHash: this.hash(dto.deviceToken) },
            });
            if (device && device.employeeId === employee.id) {
                if (device.status === DeviceStatus.PENDING) {
                    return {
                        data: {
                            status: 'PENDING',
                            message: "Superadmin tasdig'ini kuting",
                        },
                    };
                }
                if (device.status !== DeviceStatus.APPROVED) {
                    throw new ForbiddenException('Bu qurilmadan kirish taqiqlangan');
                }
                await this.prisma.device.update({
                    where: { id: device.id },
                    data: { lastSeenAt: new Date() },
                });
                return this.approved(employee, device.id);
            }
        }
        const fingerprint = this.fingerprint(meta);
        const existing = await this.prisma.device.findFirst({
            where: {
                employeeId: employee.id,
                status: DeviceStatus.PENDING,
                fingerprint,
            },
        });
        const deviceToken = randomBytes(32).toString('hex');
        if (existing) {
            await this.prisma.device.update({
                where: { id: existing.id },
                data: {
                    tokenHash: this.hash(deviceToken),
                    ip: meta.ip?.replace('::ffff:', ''),
                },
            });
        }
        else {
            await this.createPendingDevice(employee.id, deviceToken, meta, fingerprint);
        }
        return {
            data: {
                status: 'PENDING',
                deviceToken,
                message: "Superadmin tasdig'ini kuting",
            },
        };
    }
    async deviceLogin(deviceToken) {
        if (!deviceToken) {
            throw new UnauthorizedException();
        }
        const device = await this.prisma.device.findUnique({
            where: {
                tokenHash: this.hash(deviceToken),
            },
            include: {
                employee: true,
            },
        });
        if (!device || !device.employee.isActive) {
            throw new UnauthorizedException('Qurilma yoki xodim topilmadi');
        }
        if (device.status === DeviceStatus.PENDING) {
            return {
                data: {
                    status: 'PENDING',
                    message: "Superadmin tasdig'ini kuting",
                },
            };
        }
        if (device.status !== DeviceStatus.APPROVED) {
            throw new ForbiddenException('Bu qurilmadan kirish taqiqlangan');
        }
        if (device.lastSeenAt) {
            throw new UnauthorizedException('Parol bilan kiring');
        }
        await this.prisma.device.update({
            where: { id: device.id },
            data: { lastSeenAt: new Date() },
        });
        return this.approved(device.employee, device.id);
    }
    async approveDevice(id) {
        const device = await this.prisma.device.findUnique({
            where: { id },
            include: { employee: true },
        });
        if (!device ||
            !device.employee.isActive ||
            device.status !== DeviceStatus.PENDING) {
            throw new ForbiddenException('Qurilma tasdiqlash uchun mavjud emas');
        }
        return {
            data: await this.prisma.device.update({
                where: { id },
                data: {
                    status: DeviceStatus.APPROVED,
                },
            }),
        };
    }
    async rejectDevice(id) {
        const device = await this.prisma.device.findUnique({
            where: { id },
        });
        if (!device ||
            device.status !== DeviceStatus.PENDING) {
            throw new ForbiddenException('Qurilma rad etish uchun mavjud emas');
        }
        return {
            data: await this.prisma.device.update({
                where: { id },
                data: {
                    status: DeviceStatus.REJECTED,
                },
            }),
        };
    }
    async deleteDevice(id) {
        const device = await this.prisma.device.findUnique({
            where: { id },
        });
        if (!device) {
            throw new UnauthorizedException('Qurilma topilmadi');
        }
        await this.prisma.device.delete({
            where: { id },
        });
        return {
            data: {
                success: true,
                message: "Qurilma muvaffaqiyatli o'chirildi",
            },
        };
    }
    async refresh(refreshToken) {
        let payload;
        try {
            payload = await this.jwt.verifyAsync(refreshToken, {
                secret: this.config.getOrThrow('JWT_REFRESH_SECRET'),
            });
        }
        catch {
            throw new UnauthorizedException('Refresh token yaroqsiz yoki muddati tugagan');
        }
        if (!isUUID(payload.sub)) {
            throw new UnauthorizedException();
        }
        const employee = await this.prisma.employee.findUnique({
            where: { id: payload.sub },
        });
        if (!employee || !employee.isActive) {
            throw new UnauthorizedException();
        }
        if (employee.isSuperadmin) {
            return this.approved(employee);
        }
        if (!payload.deviceId) {
            throw new UnauthorizedException('Token qurilmaga bog\'lanmagan');
        }
        const device = await this.prisma.device.findUnique({
            where: { id: payload.deviceId },
        });
        if (!device ||
            device.employeeId !== employee.id ||
            device.status !== DeviceStatus.APPROVED) {
            throw new UnauthorizedException('Qurilma tasdiqlanmagan yoki mavjud emas');
        }
        return this.approved(employee, device.id);
    }
    async profile(id) {
        const employee = await this.prisma.employee.findUnique({
            where: { id },
        });
        if (!employee || !employee.isActive) {
            throw new UnauthorizedException();
        }
        return {
            data: this.buildStaff(employee),
        };
    }
    async approved(employee, deviceId) {
        return {
            data: {
                status: 'APPROVED',
                staff: this.buildStaff(employee),
                tokens: await this.issueTokens(employee.id, deviceId),
            },
        };
    }
    buildStaff(employee) {
        return {
            id: employee.id,
            isSuperadmin: employee.isSuperadmin,
            pages: employee.isSuperadmin
                ? [...PAGES]
                : employee.pages,
            fullname: employee.fullName,
            phone: employee.phone,
            createdAt: this.formatDate(employee.createdAt),
            deletedAt: null,
            updatedAt: this.formatDate(employee.updatedAt),
            actions: [],
            payments: [],
        };
    }
    async issueTokens(employeeId, deviceId) {
        const payload = deviceId
            ? { sub: employeeId, deviceId }
            : { sub: employeeId };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwt.signAsync(payload),
            this.jwt.signAsync(payload, {
                secret: this.config.getOrThrow('JWT_REFRESH_SECRET'),
                expiresIn: 60 * 60 * 24 * 30,
            }),
        ]);
        return {
            accessToken,
            refreshToken,
        };
    }
    async createPendingDevice(employeeId, deviceToken, meta, fingerprint) {
        const ua = new UAParser(meta.userAgent ?? '').getResult();
        const ip = meta.ip?.replace('::ffff:', '');
        const geo = ip ? geoip.lookup(ip) : null;
        let type = DeviceType.DESKTOP;
        if (ua.device.type === 'mobile') {
            type = DeviceType.MOBILE;
        }
        else if (ua.device.type === 'tablet') {
            type = DeviceType.TABLET;
        }
        else if (ua.device.type) {
            type = DeviceType.OTHER;
        }
        await this.prisma.device.create({
            data: {
                employeeId,
                tokenHash: this.hash(deviceToken),
                fingerprint,
                type,
                browser: [ua.browser.name, ua.browser.version]
                    .filter(Boolean)
                    .join(' '),
                os: [ua.os.name, ua.os.version].filter(Boolean).join(' '),
                userAgent: meta.userAgent,
                ip,
                country: geo?.country,
                city: geo?.city,
                status: DeviceStatus.PENDING,
            },
        });
    }
    formatDate(date) {
        return date.toLocaleString('sv-SE', {
            timeZone: 'Asia/Tashkent',
        });
    }
    fingerprint(meta) {
        const ua = new UAParser(meta.userAgent ?? '').getResult();
        return this.hash([
            ua.browser.name,
            ua.os.name,
            ua.os.version,
            ua.device.type,
            ua.device.vendor,
            ua.device.model,
        ]
            .filter(Boolean)
            .join('|'));
    }
    hash(value) {
        return createHash('sha256')
            .update(value)
            .digest('hex');
    }
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        JwtService,
        ConfigService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map