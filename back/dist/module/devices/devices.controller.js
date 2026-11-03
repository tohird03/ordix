var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Param, ParseEnumPipe, ParseIntPipe, Patch, Query, UseGuards, } from '@nestjs/common';
import { DeviceStatus } from '../../generated/prisma/client.js';
import { AuthGuard } from '../auth/auth.guard.js';
import { SuperadminGuard } from '../auth/superadmin.guard.js';
import { DevicesService } from './devices.service.js';
let DevicesController = class DevicesController {
    devices;
    constructor(devices) {
        this.devices = devices;
    }
    list(status) {
        return this.devices.list(status);
    }
    approve(id) {
        return this.devices.decide(id, DeviceStatus.PENDING, DeviceStatus.APPROVED);
    }
    reject(id) {
        return this.devices.decide(id, DeviceStatus.PENDING, DeviceStatus.REJECTED);
    }
    block(id) {
        return this.devices.decide(id, DeviceStatus.APPROVED, DeviceStatus.BLOCK);
    }
    active(id) {
        return this.devices.decide(id, DeviceStatus.BLOCK, DeviceStatus.APPROVED);
    }
    revoke(id) {
        return this.devices.decide(id, DeviceStatus.REJECTED, DeviceStatus.APPROVED);
    }
};
__decorate([
    Get(),
    __param(0, Query('status', new ParseEnumPipe(DeviceStatus, { optional: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DevicesController.prototype, "list", null);
__decorate([
    Patch(':id/approve'),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DevicesController.prototype, "approve", null);
__decorate([
    Patch(':id/reject'),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DevicesController.prototype, "reject", null);
__decorate([
    Patch(':id/block'),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DevicesController.prototype, "block", null);
__decorate([
    Patch(':id/activate'),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DevicesController.prototype, "active", null);
__decorate([
    Patch(':id/revoke'),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DevicesController.prototype, "revoke", null);
DevicesController = __decorate([
    UseGuards(AuthGuard, SuperadminGuard),
    Controller('devices'),
    __metadata("design:paramtypes", [DevicesService])
], DevicesController);
export { DevicesController };
//# sourceMappingURL=devices.controller.js.map