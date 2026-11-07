import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ClientsService } from './clients.service.js';
import { CreateClientDto } from './dto/create-client.dto.js';
import { UpdateClientDto } from './dto/update-client.dto.js';
import { GetClientsDto } from './dto/get-client.dto.js';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  // 'many' :id dan oldin turishi shart
  @Get('many')
  findMany(@Query() query: GetClientsDto) {
    return this.clientsService.findMany(query);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.clientsService.findOne(id);
  }

  @Post('one')
  create(@Body() dto: CreateClientDto) {
    return this.clientsService.create(dto);
  }

  @Patch('one')
  update(@Body() dto: UpdateClientDto) {
    return this.clientsService.update(dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.clientsService.remove(id);
  }
}
