import { OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateCurrencyDto, UpdateCurrencyDto } from './dto/currency.dto.js';
import { PaginationQueryDto } from '../../common/dto/pagination.dto.js';
export interface ICurrency {
    id: string;
    name: string;
    symbol: string;
    exchangeRate: number;
    isDefault: boolean;
}
export declare class CurrencyService implements OnModuleInit {
    private readonly prisma;
    constructor(prisma: PrismaService);
    onModuleInit(): Promise<void>;
    findAll(q: PaginationQueryDto): Promise<{
        data: {
            totalCount: number;
            pageNumber: number;
            pageSize: number;
            data: ICurrency[];
        };
    }>;
    create(dto: CreateCurrencyDto): Promise<ICurrency>;
    update(dto: UpdateCurrencyDto): Promise<ICurrency>;
}
