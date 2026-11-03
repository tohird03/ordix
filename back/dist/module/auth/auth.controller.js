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
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { DeviceLoginDto, LoginDto, RefreshDto } from './dto/login.dto.js';
import { AuthGuard } from './auth.guard.js';
import { CurrentUser } from './current-user.decorated.js';
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    login(dto, req) {
        return this.authService.login(dto, {
            userAgent: req.headers['user-agent'],
            ip: req.ip,
        });
    }
    profile(user) {
        return this.authService.profile(user.id);
    }
    refresh(dto) {
        return this.authService.refresh(dto.refreshToken);
    }
    deviceLogin(dto) {
        return this.authService.deviceLogin(dto.deviceToken);
    }
};
__decorate([
    Post('sign-in'),
    __param(0, Body()),
    __param(1, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginDto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    UseGuards(AuthGuard),
    Get('profile'),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "profile", null);
__decorate([
    Post('refresh'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RefreshDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "refresh", null);
__decorate([
    Post('device-login'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeviceLoginDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "deviceLogin", null);
AuthController = __decorate([
    Controller('auth'),
    __metadata("design:paramtypes", [AuthService])
], AuthController);
export { AuthController };
//# sourceMappingURL=auth.controller.js.map