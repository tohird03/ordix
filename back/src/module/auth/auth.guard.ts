import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { isUUID } from 'class-validator';
import type { Request } from 'express';
import { DeviceStatus } from '../../generated/prisma/client.js';
import { PrismaService } from '../../prisma/prisma.service.js';

export type AuthUser = {
  id: string;
  isSuperadmin: boolean;
  pages: string[];
  deviceId?: number;
};
export type AuthRequest = Request & { user: AuthUser };

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwt: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest<AuthRequest>();
    const [type, token] = req.headers.authorization?.split(' ') ?? [];

    if (type !== 'Bearer' || !token) {
      throw new UnauthorizedException(
        "Authorization sarlavhasi yo'q yoki 'Bearer <token>' shaklida emas",
      );
    }

    let payload: { sub: string; deviceId?: number };
    try {
      payload = await this.jwt.verifyAsync(token);
    } catch {
      throw new UnauthorizedException('Token yaroqsiz yoki muddati tugagan');
    }

    if (!isUUID(payload.sub)) {
      throw new UnauthorizedException('Token eski shaklda, qayta kiring');
    }

    const employee = await this.prisma.employee.findUnique({
      where: { id: payload.sub },
    });
    if (!employee || !employee.isActive) {
      throw new UnauthorizedException('Xodim topilmadi yoki faol emas');
    }

    if (!employee.isSuperadmin) {
      const device = payload.deviceId
        ? await this.prisma.device.findUnique({
            where: { id: payload.deviceId },
          })
        : null;

      if (
        !device ||
        device.employeeId !== employee.id ||
        device.status !== DeviceStatus.APPROVED
      ) {
        throw new UnauthorizedException(
          "Qurilma tasdiqlanmagan yoki o'chirilgan",
        );
      }
    }

    req.user = {
      id: employee.id,
      isSuperadmin: employee.isSuperadmin,
      pages: employee.pages,
      deviceId: payload.deviceId,
    };
    return true;
  }
}
