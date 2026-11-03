var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsOptional, IsString, MinLength } from 'class-validator';
export class LoginDto {
    phone;
    password;
    deviceToken;
}
__decorate([
    IsString(),
    __metadata("design:type", String)
], LoginDto.prototype, "phone", void 0);
__decorate([
    IsString(),
    MinLength(8),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], LoginDto.prototype, "deviceToken", void 0);
export class RefreshDto {
    refreshToken;
}
__decorate([
    IsString(),
    __metadata("design:type", String)
], RefreshDto.prototype, "refreshToken", void 0);
export class DeviceLoginDto {
    deviceToken;
}
__decorate([
    IsString(),
    __metadata("design:type", String)
], DeviceLoginDto.prototype, "deviceToken", void 0);
//# sourceMappingURL=login.dto.js.map