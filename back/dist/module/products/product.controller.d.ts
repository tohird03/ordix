import { ProductService } from './product.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { PaginationQueryDto } from '../../common/dto/pagination.dto.js';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(q: PaginationQueryDto): Promise<{
        data: {
            totalCount: number;
            pageNumber: number;
            pageSize: number;
            data: import("./functions/product.types.js").IProduct[];
            calc: import("./functions/product.types.js").IProductTotalCalc;
        };
    }>;
    create(dto: CreateProductDto, image?: Express.Multer.File): Promise<import("./functions/product.types.js").IProduct>;
    update(dto: UpdateProductDto, image?: Express.Multer.File): Promise<import("./functions/product.types.js").IProduct>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
