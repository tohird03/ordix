import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module.js';
import { EmployeesController } from './staffs.controller.js';
import { EmployeesService } from './staffs.service.js';

@Module({
  imports: [AuthModule],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
