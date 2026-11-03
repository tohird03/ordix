import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard.js';
import { SuperadminGuard } from '../auth/superadmin.guard.js';
import { EmployeesService } from './staffs.service.js';
import { CreateEmployeeDto, EmployeeListQueryDto, UpdateEmployeeDto } from './staffs.dto.js';

@UseGuards(AuthGuard, SuperadminGuard)
@Controller('staff')
export class EmployeesController {
  constructor(private readonly employees: EmployeesService) {}

  @Get('many')
  list(@Query() query: EmployeeListQueryDto) {
    return this.employees.list(query);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.employees.findOne(id);
  }

  @Post('one')
  create(@Body() dto: CreateEmployeeDto) {
    return this.employees.create(dto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() dto: UpdateEmployeeDto,
  ) {
    return this.employees.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.employees.remove(id);
  }
}
