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
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards, } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard.js';
import { SuperadminGuard } from '../auth/superadmin.guard.js';
import { EmployeesService } from './staffs.service.js';
import { CreateEmployeeDto, EmployeeListQueryDto, UpdateEmployeeDto } from './staffs.dto.js';
let EmployeesController = class EmployeesController {
    employees;
    constructor(employees) {
        this.employees = employees;
    }
    list(query) {
        return this.employees.list(query);
    }
    findOne(id) {
        return this.employees.findOne(id);
    }
    create(dto) {
        return this.employees.create(dto);
    }
    update(id, dto) {
        return this.employees.update(id, dto);
    }
    remove(id) {
        return this.employees.remove(id);
    }
};
__decorate([
    Get('many'),
    __param(0, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EmployeeListQueryDto]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "list", null);
__decorate([
    Get(':id'),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "findOne", null);
__decorate([
    Post('one'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateEmployeeDto]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "create", null);
__decorate([
    Patch(':id'),
    __param(0, Param('id', ParseIntPipe)),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateEmployeeDto]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "update", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "remove", null);
EmployeesController = __decorate([
    UseGuards(AuthGuard, SuperadminGuard),
    Controller('staff'),
    __metadata("design:paramtypes", [EmployeesService])
], EmployeesController);
export { EmployeesController };
//# sourceMappingURL=staffs.controller.js.map