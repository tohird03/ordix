import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import type { IProduct, IProductTotalCalc } from './functions/product.types.js';
import { PrismaService } from '../../prisma/prisma.service.js';
import { PaginationQueryDto } from '../../common/dto/pagination.dto.js';
export declare class ProductService {
    private readonly prisma;
    private mainWarehouseId?;
    constructor(prisma: PrismaService);
    private getMainWarehouseId;
    private checkCurrencies;
    private priceData;
    private saveImage;
    private removeImage;
    private calcTotal;
    findAll(q: PaginationQueryDto): Promise<{
        data: {
            totalCount: number;
            pageNumber: number;
            pageSize: number;
            data: IProduct[];
            calc: IProductTotalCalc;
        };
    }>;
    create(dto: CreateProductDto, file?: Express.Multer.File): Promise<IProduct>;
    update(dto: UpdateProductDto, file?: Express.Multer.File): Promise<IProduct>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
