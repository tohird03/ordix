import { EmployeesService } from './staffs.service.js';
import { CreateEmployeeDto, EmployeeListQueryDto, UpdateEmployeeDto } from './staffs.dto.js';
export declare class EmployeesController {
    private readonly employees;
    constructor(employees: EmployeesService);
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
}
