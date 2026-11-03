import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CurrenciesModule } from './currencies/currencies.module.js';
import { CustomersModule } from './customers/customers.module.js';
import { PrismaModule } from './prisma/prisma.module.js';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, CurrenciesModule, CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
