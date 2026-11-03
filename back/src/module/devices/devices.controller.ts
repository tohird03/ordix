import {
  Controller,
  Delete,
  Get,
  Param,
  ParseEnumPipe,
  ParseIntPipe,
  Patch,
  Query,
  UseGuards,
} from '@nestjs/common';
import { DeviceStatus } from '../../generated/prisma/client.js';
import { AuthGuard } from '../auth/auth.guard.js';
import { SuperadminGuard } from '../auth/superadmin.guard.js';
import { DevicesService } from './devices.service.js';

@UseGuards(AuthGuard, SuperadminGuard)
@Controller('devices')
export class DevicesController {
  constructor(private readonly devices: DevicesService) { }

  @Get()
  list(
    @Query('status', new ParseEnumPipe(DeviceStatus, { optional: true }))
    status?: DeviceStatus,
  ) {
    return this.devices.list(status);
  }

  @Patch(':id/approve')
  approve(@Param('id', ParseIntPipe) id: number) {
    return this.devices.decide(id, DeviceStatus.PENDING, DeviceStatus.APPROVED);
  }

  @Patch(':id/reject')
  reject(@Param('id', ParseIntPipe) id: number) {
    return this.devices.decide(id, DeviceStatus.PENDING, DeviceStatus.REJECTED);
  }

  @Patch(':id/block')
  block(@Param('id', ParseIntPipe) id: number) {
    return this.devices.decide(id, DeviceStatus.APPROVED, DeviceStatus.BLOCK);
  }

  @Patch(':id/activate')
  active(@Param('id', ParseIntPipe) id: number) {
    return this.devices.decide(id, DeviceStatus.BLOCK, DeviceStatus.APPROVED);
  }

  @Patch(':id/revoke')
  revoke(@Param('id', ParseIntPipe) id: number) {
    return this.devices.decide(id, DeviceStatus.REJECTED, DeviceStatus.APPROVED);
  }
}
