
import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import geoip from 'geoip-lite';
import { createHash, randomBytes } from 'node:crypto';
import { isUUID } from 'class-validator';
import { UAParser } from 'ua-parser-js';

import { normalizePhone } from '../../common/phone.js';
import { PAGES } from '../../common/pages.js';
import {
  DeviceStatus,
  DeviceType,
  type Employee,
} from '../../generated/prisma/client.js';
import { PrismaService } from '../../prisma/prisma.service.js';
import { LoginDto } from './dto/login.dto.js';

type RequestMeta = {
  userAgent?: string;
  ip?: string;
};

type JwtPayload = {
  sub: string;
  deviceId?: number;
};

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  /**
   * Login:
   * - Superadmin: parol to'g'ri bo'lsa darhol kiradi.
   * - Xodim: yangi qurilma bo'lsa PENDING.
   * - Tasdiqlangan qurilma: avtomatik kiradi.
   * - Rad etilgan yoki o'chirilgan qurilma: kirish taqiqlanadi.
   */
  async login(dto: LoginDto, meta: RequestMeta) {
    const phone = normalizePhone(dto.phone);

    const employee = await this.prisma.employee.findUnique({
      where: { phone },
    });

    if (
      !employee ||
      !employee.isActive ||
      !(await bcrypt.compare(dto.password, employee.passwordHash))
    ) {
      throw new UnauthorizedException(
        "Telefon yoki parol noto'g'ri",
      );
    }

    // Superadmin qurilma tasdig'isiz kiradi.
    if (employee.isSuperadmin) {
      return this.approved(employee);
    }

    // Frontend avval olingan deviceTokenni yuborsa,
    // aynan shu qurilmaning holatini tekshiramiz.
    if (dto.deviceToken) {
      const device = await this.prisma.device.findUnique({
        where: { tokenHash: this.hash(dto.deviceToken) },
      });

      // Token bazada yo'q (qurilma o'chirilgan) yoki boshqa xodimniki bo'lsa,
      // bu yangi qurilma hisoblanadi: pastda yangi so'rov yaratiladi.
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

    // Bu xodim uchun shu qurilmada token hali yo'q.
    // Yangi qurilma yaratib, superadmin tasdig'ini kutamiz.
    const fingerprint = this.fingerprint(meta);

    // Shu qurilmadan kelgan mavjud PENDING so'rov bormi?
    const existing = await this.prisma.device.findFirst({
      where: {
        employeeId: employee.id,
        status: DeviceStatus.PENDING,
        fingerprint,
      },
    });

    const deviceToken = randomBytes(32).toString('hex');

    if (existing) {
      // Yangi so'rov yaratmaymiz, mavjudiga yangi token beramiz.
      await this.prisma.device.update({
        where: { id: existing.id },
        data: {
          tokenHash: this.hash(deviceToken),
          ip: meta.ip?.replace('::ffff:', ''),
        },
      });
    } else {
      await this.createPendingDevice(
        employee.id,
        deviceToken,
        meta,
        fingerprint,
      );
    }

    return {
      data: {
        status: 'PENDING',
        deviceToken,
        message: "Superadmin tasdig'ini kuting",
      },
    };
  }

  /**
   * Xodim qurilmasining holatini token orqali tekshiradi.
   * Frontend PENDING holatida ushbu metodni chaqirib turishi mumkin.
   */
  async deviceLogin(deviceToken: string) {
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
      throw new UnauthorizedException(
        'Qurilma yoki xodim topilmadi',
      );
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
      throw new ForbiddenException(
        'Bu qurilmadan kirish taqiqlangan',
      );
    }

    if (device.lastSeenAt) {
      throw new UnauthorizedException('Parol bilan kiring');
    }

    // Tasdiqlangan qurilmadan qayta kirish.
    await this.prisma.device.update({
      where: { id: device.id },
      data: { lastSeenAt: new Date() },
    });

    return this.approved(device.employee, device.id);
  }

  /**
   * Superadmin qurilmani tasdiqlaydi.
   * Controller orqali faqat superadmin ruxsati bilan chaqirilishi shart.
   */
  async approveDevice(id: number) {
    const device = await this.prisma.device.findUnique({
      where: { id },
      include: { employee: true },
    });

    if (
      !device ||
      !device.employee.isActive ||
      device.status !== DeviceStatus.PENDING
    ) {
      throw new ForbiddenException(
        'Qurilma tasdiqlash uchun mavjud emas',
      );
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

  /**
   * Superadmin qurilmani rad etadi.
   *
   * DeviceStatus enumida REJECTED bo'lishi kerak.
   * Agar loyihangda bu qiymat mavjud bo'lmasa,
   * enumga qo'shib Prisma clientni qayta generatsiya qil.
   */
  async rejectDevice(id: number) {
    const device = await this.prisma.device.findUnique({
      where: { id },
    });

    if (
      !device ||
      device.status !== DeviceStatus.PENDING
    ) {
      throw new ForbiddenException(
        'Qurilma rad etish uchun mavjud emas',
      );
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

  /**
   * Superadmin qurilmani o'chiradi.
   * Keyingi refresh va deviceLogin urinishlari muvaffaqiyatsiz bo'ladi.
   */
  async deleteDevice(id: number) {
    const device = await this.prisma.device.findUnique({
      where: { id },
    });

    if (!device) {
      throw new UnauthorizedException(
        'Qurilma topilmadi',
      );
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

  /**
   * Refresh token orqali sessiyani yangilash.
   */
  async refresh(refreshToken: string) {
    let payload: JwtPayload;

    try {
      payload = await this.jwt.verifyAsync<JwtPayload>(
        refreshToken,
        {
          secret: this.config.getOrThrow<string>(
            'JWT_REFRESH_SECRET',
          ),
        },
      );
    } catch {
      throw new UnauthorizedException(
        'Refresh token yaroqsiz yoki muddati tugagan',
      );
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
      throw new UnauthorizedException(
        'Token qurilmaga bog\'lanmagan',
      );
    }

    const device = await this.prisma.device.findUnique({
      where: { id: payload.deviceId },
    });

    if (
      !device ||
      device.employeeId !== employee.id ||
      device.status !== DeviceStatus.APPROVED
    ) {
      throw new UnauthorizedException(
        'Qurilma tasdiqlanmagan yoki mavjud emas',
      );
    }

    return this.approved(employee, device.id);
  }

  /**
   * Joriy xodim profilini olish.
   */
  async profile(id: string) {
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

  /**
   * Login muvaffaqiyatli bo'lgandagi standart javob.
   */
  private async approved(
    employee: Employee,
    deviceId?: number,
  ) {
    return {
      data: {
        status: 'APPROVED',
        staff: this.buildStaff(employee),
        tokens: await this.issueTokens(
          employee.id,
          deviceId,
        ),
      },
    };
  }

  private buildStaff(employee: Employee) {
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

  private async issueTokens(
    employeeId: string,
    deviceId?: number,
  ) {
    const payload: JwtPayload = deviceId
      ? { sub: employeeId, deviceId }
      : { sub: employeeId };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwt.signAsync(payload),
      this.jwt.signAsync(payload, {
        secret: this.config.getOrThrow<string>(
          'JWT_REFRESH_SECRET',
        ),
        expiresIn: 60 * 60 * 24 * 30,
      }),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  /**
   * Yangi qurilmani PENDING holatida yaratish.
   */
  private async createPendingDevice(
    employeeId: string,
    deviceToken: string,
    meta: RequestMeta,
    fingerprint: string,
  ) {
    const ua = new UAParser(meta.userAgent ?? '').getResult();

    const ip = meta.ip?.replace('::ffff:', '');
    const geo = ip ? geoip.lookup(ip) : null;

    let type: DeviceType = DeviceType.DESKTOP;

    if (ua.device.type === 'mobile') {
      type = DeviceType.MOBILE;
    } else if (ua.device.type === 'tablet') {
      type = DeviceType.TABLET;
    } else if (ua.device.type) {
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

  private formatDate(date: Date) {
    return date.toLocaleString('sv-SE', {
      timeZone: 'Asia/Tashkent',
    });
  }

  private fingerprint(meta: RequestMeta) {
    const ua = new UAParser(meta.userAgent ?? '').getResult();
    return this.hash(
      [
        ua.browser.name,
        ua.os.name,
        ua.os.version,
        ua.device.type,
        ua.device.vendor,
        ua.device.model,
      ]
        .filter(Boolean)
        .join('|'),
    );
  }

  private hash(value: string) {
    return createHash('sha256')
      .update(value)
      .digest('hex');
  }
}
