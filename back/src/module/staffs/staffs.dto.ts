import { PartialType } from '@nestjs/mapped-types';

import {
  IsArray,
  IsBoolean,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { MaxLength } from 'class-validator';
import { PaginationQueryDto } from '../../common/dto/pagination.dto.js';
import { PAGES } from '../../common/pages.js';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  fullName!: string;

  @IsString()
  @IsNotEmpty()
  phone!: string;

  @IsString()
  @MinLength(6)
  password!: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsArray()
  @IsIn(PAGES, { each: true })
  pages?: string[];
}

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}

export class EmployeeListQueryDto extends PaginationQueryDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  search?: string;
}
