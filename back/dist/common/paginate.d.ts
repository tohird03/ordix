import { PaginationQueryDto } from "./dto/pagination.dto.js";
export declare function pageArgs(q: PaginationQueryDto): {
    skip: number;
    take: number;
};
export declare function paginated<T>(items: T[], totalCount: number, q: PaginationQueryDto): {
    data: {
        totalCount: number;
        pageNumber: number;
        pageSize: number;
        data: T[];
    };
};
