var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsInt, IsOptional, IsPositive, IsString, IsUUID, Length } from 'class-validator';
import { Transform } from 'class-transformer';
export class CreateCurrencyDto {
    name;
    symbol;
    exchangeRate;
}
__decorate([
    IsString(),
    Length(1, 50),
    __metadata("design:type", String)
], CreateCurrencyDto.prototype, "name", void 0);
__decorate([
    Transform(({ value }) => (typeof value === 'string' ? value.trim().toUpperCase() : value)),
    IsString(),
    Length(2, 5),
    __metadata("design:type", String)
], CreateCurrencyDto.prototype, "symbol", void 0);
__decorate([
    IsInt(),
    IsPositive(),
    __metadata("design:type", Number)
], CreateCurrencyDto.prototype, "exchangeRate", void 0);
export class UpdateCurrencyDto {
    id;
    name;
    exchangeRate;
}
__decorate([
    IsUUID(),
    __metadata("design:type", String)
], UpdateCurrencyDto.prototype, "id", void 0);
__decorate([
    IsOptional(),
    IsString(),
    Length(1, 50),
    __metadata("design:type", String)
], UpdateCurrencyDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    IsInt(),
    IsPositive(),
    __metadata("design:type", Number)
], UpdateCurrencyDto.prototype, "exchangeRate", void 0);
//# sourceMappingURL=currency.dto.js.map