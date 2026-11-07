import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { AuthModule } from './module/auth/auth.module.js';
import { DevicesModule } from './module/devices/devices.module.js';
import { EmployeesModule } from './module/staffs/staffs.module.js';
import { CurrencyModule } from './module/currency/currency.module.js';
import { ProductModule } from './module/products/product.module.js';
import { ClientsModule } from './module/client/clients.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    DevicesModule,
    EmployeesModule,
    CurrencyModule,
    ProductModule,
    ClientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
