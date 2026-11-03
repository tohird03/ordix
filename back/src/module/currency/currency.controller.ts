import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Query } from '@nestjs/common';
import { CurrencyService } from './currency.service.js';
import { CreateCurrencyDto, UpdateCurrencyDto } from './dto/currency.dto.js';
import { PaginationQueryDto } from '../../common/dto/pagination.dto.js';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get('many')
  findAll(@Query() q: PaginationQueryDto) {
    return this.currencyService.findAll(q);
  }

  @Post('one')
  create(@Body() dto: CreateCurrencyDto) {
    return this.currencyService.create(dto);
  }

  @Patch('one')
  update(@Body() dto: UpdateCurrencyDto) {
    return this.currencyService.update(dto);
  }
}
