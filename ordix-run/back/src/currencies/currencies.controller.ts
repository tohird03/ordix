import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CurrenciesService } from './currencies.service.js';
import { CreateCurrencyDto } from './dto/create-currency.dto.js';
import { UpdateCurrencyDto } from './dto/update-currency.dto.js';

// TODO: mavjud auth guard'ingizni shu yerga qo'shing (masalan, faqat superadmin)
@Controller('currencies')
export class CurrenciesController {
  constructor(private readonly currencies: CurrenciesService) {}

  @Get()
  findAll() {
    return this.currencies.findAll();
  }

  @Post()
  create(@Body() dto: CreateCurrencyDto) {
    return this.currencies.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCurrencyDto) {
    return this.currencies.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.currencies.remove(id);
  }
}
