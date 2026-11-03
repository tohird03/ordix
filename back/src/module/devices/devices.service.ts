import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DeviceStatus } from '../../generated/prisma/client.js';
import { PrismaService } from '../../prisma/prisma.service.js';

@Injectable()
export class DevicesService {
  constructor(private readonly prisma: PrismaService) { }

  async list(status?: DeviceStatus) {
    const dataDevices = await this.prisma.device.findMany({
      where: status ? { status } : {},
      orderBy: { requestedAt: 'desc' },
      omit: { tokenHash: true },
      include: {
        employee: {
          select: { id: true, fullName: true, phone: true },
        },
      },
    });

    return {
      data: {
        data: dataDevices
      }
    };
  }

  async decide(id: number, from: DeviceStatus, to: DeviceStatus) {
    const device = await this.prisma.device.findUnique({ where: { id } });
    if (!device) throw new NotFoundException('Qurilma topilmadi');
    if (device.status !== from) {
      throw new BadRequestException(
        `Qurilma holati ${device.status}, bu amalni bajarib bo'lmaydi`,
      );
    }
    return this.prisma.device.update({
      where: { id },
      data: { status: to, decidedAt: new Date() },
      omit: { tokenHash: true },
    });
  }

}
