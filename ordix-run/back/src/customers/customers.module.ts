import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller.js';
import { CustomersService } from './customers.service.js';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
  exports: [CustomersService], // sotuv moduli qarz va oxirgi sotuvni yangilash uchun ishlatadi
})
export class CustomersModule {}
