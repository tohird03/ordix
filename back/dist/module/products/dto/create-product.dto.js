var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Transform, Type } from 'class-transformer';
import { IsInt, IsNumber, IsOptional, IsString, IsUUID, Length, MaxLength, Min } from 'class-validator';
export class CreateProductDto {
    name;
    description;
    count;
    minAmount;
    prices_cost_price;
    prices_cost_currencyId;
    prices_selling_price;
    prices_selling_currencyId;
    prices_wholesale_price;
    prices_wholesale_currencyId;
}
__decorate([
    Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)),
    IsString(),
    Length(1, 200),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(2000),
    __metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
__decorate([
    Type(() => Number),
    IsInt(),
    Min(0),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "count", void 0);
__decorate([
    Type(() => Number),
    IsInt(),
    Min(0),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "minAmount", void 0);
__decorate([
    Type(() => Number),
    IsNumber({ maxDecimalPlaces: 2 }),
    Min(0),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "prices_cost_price", void 0);
__decorate([
    IsUUID(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "prices_cost_currencyId", void 0);
__decorate([
    Type(() => Number),
    IsNumber({ maxDecimalPlaces: 2 }),
    Min(0),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "prices_selling_price", void 0);
__decorate([
    IsUUID(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "prices_selling_currencyId", void 0);
__decorate([
    Type(() => Number),
    IsNumber({ maxDecimalPlaces: 2 }),
    Min(0),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "prices_wholesale_price", void 0);
__decorate([
    IsUUID(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "prices_wholesale_currencyId", void 0);
//# sourceMappingURL=create-product.dto.js.map