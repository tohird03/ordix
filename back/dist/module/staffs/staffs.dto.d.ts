import { PaginationQueryDto } from '../../common/dto/pagination.dto.js';
export declare class CreateEmployeeDto {
    fullName: string;
    phone: string;
    password: string;
    isActive?: boolean;
    pages?: string[];
}
declare const UpdateEmployeeDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateEmployeeDto>>;
export declare class UpdateEmployeeDto extends UpdateEmployeeDto_base {
}
export declare class EmployeeListQueryDto extends PaginationQueryDto {
    search?: string;
}
export {};
