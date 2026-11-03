import { CurrencyService } from './currency.service.js';
import { CreateCurrencyDto, UpdateCurrencyDto } from './dto/currency.dto.js';
import { PaginationQueryDto } from '../../common/dto/pagination.dto.js';
export declare class CurrencyController {
    private readonly currencyService;
    constructor(currencyService: CurrencyService);
    findAll(q: PaginationQueryDto): Promise<{
        data: {
            totalCount: number;
            pageNumber: number;
            pageSize: number;
            data: import("./currency.service.js").ICurrency[];
        };
    }>;
    create(dto: CreateCurrencyDto): Promise<import("./currency.service.js").ICurrency>;
    update(dto: UpdateCurrencyDto): Promise<import("./currency.service.js").ICurrency>;
}
