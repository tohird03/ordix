import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateEmployeeDto, EmployeeListQueryDto, UpdateEmployeeDto } from './staffs.dto.js';
export declare class EmployeesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private buildSearch;
    list(query: EmployeeListQueryDto): Promise<{
        data: {
            totalCount: number;
            pagesCount: number;
            pageSize: number;
            data: {
                phone: string;
                id: string;
                fullName: string;
                isSuperadmin: boolean;
                isActive: boolean;
                pages: string[];
                createdAt: Date;
                updatedAt: Date;
            }[];
        };
    }>;
    findOne(id: string): Promise<{
        phone: string;
        id: string;
        fullName: string;
        isSuperadmin: boolean;
        isActive: boolean;
        pages: string[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(dto: CreateEmployeeDto): Promise<{
        phone: string;
        id: string;
        fullName: string;
        isSuperadmin: boolean;
        isActive: boolean;
        pages: string[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, dto: UpdateEmployeeDto): Promise<{
        phone: string;
        id: string;
        fullName: string;
        isSuperadmin: boolean;
        isActive: boolean;
        pages: string[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
    private getEditable;
    private ensurePhoneFree;
}
