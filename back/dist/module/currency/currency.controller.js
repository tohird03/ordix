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
import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { CurrencyService } from './currency.service.js';
import { CreateCurrencyDto, UpdateCurrencyDto } from './dto/currency.dto.js';
import { PaginationQueryDto } from '../../common/dto/pagination.dto.js';
let CurrencyController = class CurrencyController {
    currencyService;
    constructor(currencyService) {
        this.currencyService = currencyService;
    }
    findAll(q) {
        return this.currencyService.findAll(q);
    }
    create(dto) {
        return this.currencyService.create(dto);
    }
    update(dto) {
        return this.currencyService.update(dto);
    }
};
__decorate([
    Get('many'),
    __param(0, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PaginationQueryDto]),
    __metadata("design:returntype", void 0)
], CurrencyController.prototype, "findAll", null);
__decorate([
    Post('one'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateCurrencyDto]),
    __metadata("design:returntype", void 0)
], CurrencyController.prototype, "create", null);
__decorate([
    Patch('one'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateCurrencyDto]),
    __metadata("design:returntype", void 0)
], CurrencyController.prototype, "update", null);
CurrencyController = __decorate([
    Controller('currency'),
    __metadata("design:paramtypes", [CurrencyService])
], CurrencyController);
export { CurrencyController };
//# sourceMappingURL=currency.controller.js.map