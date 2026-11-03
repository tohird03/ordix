import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EmployeeModel = runtime.Types.Result.DefaultSelection<Prisma.$EmployeePayload>;
export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
};
export type EmployeeMinAggregateOutputType = {
    id: string | null;
    fullName: string | null;
    phone: string | null;
    passwordHash: string | null;
    isSuperadmin: boolean | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EmployeeMaxAggregateOutputType = {
    id: string | null;
    fullName: string | null;
    phone: string | null;
    passwordHash: string | null;
    isSuperadmin: boolean | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EmployeeCountAggregateOutputType = {
    id: number;
    fullName: number;
    phone: number;
    passwordHash: number;
    isSuperadmin: number;
    isActive: number;
    pages: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type EmployeeMinAggregateInputType = {
    id?: true;
    fullName?: true;
    phone?: true;
    passwordHash?: true;
    isSuperadmin?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EmployeeMaxAggregateInputType = {
    id?: true;
    fullName?: true;
    phone?: true;
    passwordHash?: true;
    isSuperadmin?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EmployeeCountAggregateInputType = {
    id?: true;
    fullName?: true;
    phone?: true;
    passwordHash?: true;
    isSuperadmin?: true;
    isActive?: true;
    pages?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type EmployeeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithRelationInput | Prisma.EmployeeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EmployeeCountAggregateInputType;
    _min?: EmployeeMinAggregateInputType;
    _max?: EmployeeMaxAggregateInputType;
};
export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
    [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEmployee[P]> : Prisma.GetScalarType<T[P], AggregateEmployee[P]>;
};
export type EmployeeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithAggregationInput | Prisma.EmployeeOrderByWithAggregationInput[];
    by: Prisma.EmployeeScalarFieldEnum[] | Prisma.EmployeeScalarFieldEnum;
    having?: Prisma.EmployeeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployeeCountAggregateInputType | true;
    _min?: EmployeeMinAggregateInputType;
    _max?: EmployeeMaxAggregateInputType;
};
export type EmployeeGroupByOutputType = {
    id: string;
    fullName: string;
    phone: string;
    passwordHash: string;
    isSuperadmin: boolean;
    isActive: boolean;
    pages: string[];
    createdAt: Date;
    updatedAt: Date;
    _count: EmployeeCountAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
};
export type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EmployeeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EmployeeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EmployeeGroupByOutputType[P]>;
}>>;
export type EmployeeWhereInput = {
    AND?: Prisma.EmployeeWhereInput | Prisma.EmployeeWhereInput[];
    OR?: Prisma.EmployeeWhereInput[];
    NOT?: Prisma.EmployeeWhereInput | Prisma.EmployeeWhereInput[];
    id?: Prisma.UuidFilter<"Employee"> | string;
    fullName?: Prisma.StringFilter<"Employee"> | string;
    phone?: Prisma.StringFilter<"Employee"> | string;
    passwordHash?: Prisma.StringFilter<"Employee"> | string;
    isSuperadmin?: Prisma.BoolFilter<"Employee"> | boolean;
    isActive?: Prisma.BoolFilter<"Employee"> | boolean;
    pages?: Prisma.StringNullableListFilter<"Employee">;
    createdAt?: Prisma.DateTimeFilter<"Employee"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Employee"> | Date | string;
    devices?: Prisma.DeviceListRelationFilter;
};
export type EmployeeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    isSuperadmin?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    pages?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    devices?: Prisma.DeviceOrderByRelationAggregateInput;
};
export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    phone?: string;
    AND?: Prisma.EmployeeWhereInput | Prisma.EmployeeWhereInput[];
    OR?: Prisma.EmployeeWhereInput[];
    NOT?: Prisma.EmployeeWhereInput | Prisma.EmployeeWhereInput[];
    fullName?: Prisma.StringFilter<"Employee"> | string;
    passwordHash?: Prisma.StringFilter<"Employee"> | string;
    isSuperadmin?: Prisma.BoolFilter<"Employee"> | boolean;
    isActive?: Prisma.BoolFilter<"Employee"> | boolean;
    pages?: Prisma.StringNullableListFilter<"Employee">;
    createdAt?: Prisma.DateTimeFilter<"Employee"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Employee"> | Date | string;
    devices?: Prisma.DeviceListRelationFilter;
}, "id" | "phone">;
export type EmployeeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    isSuperadmin?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    pages?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EmployeeCountOrderByAggregateInput;
    _max?: Prisma.EmployeeMaxOrderByAggregateInput;
    _min?: Prisma.EmployeeMinOrderByAggregateInput;
};
export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: Prisma.EmployeeScalarWhereWithAggregatesInput | Prisma.EmployeeScalarWhereWithAggregatesInput[];
    OR?: Prisma.EmployeeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EmployeeScalarWhereWithAggregatesInput | Prisma.EmployeeScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Employee"> | string;
    fullName?: Prisma.StringWithAggregatesFilter<"Employee"> | string;
    phone?: Prisma.StringWithAggregatesFilter<"Employee"> | string;
    passwordHash?: Prisma.StringWithAggregatesFilter<"Employee"> | string;
    isSuperadmin?: Prisma.BoolWithAggregatesFilter<"Employee"> | boolean;
    isActive?: Prisma.BoolWithAggregatesFilter<"Employee"> | boolean;
    pages?: Prisma.StringNullableListFilter<"Employee">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Employee"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Employee"> | Date | string;
};
export type EmployeeCreateInput = {
    id?: string;
    fullName: string;
    phone: string;
    passwordHash: string;
    isSuperadmin?: boolean;
    isActive?: boolean;
    pages?: Prisma.EmployeeCreatepagesInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    devices?: Prisma.DeviceCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeUncheckedCreateInput = {
    id?: string;
    fullName: string;
    phone: string;
    passwordHash: string;
    isSuperadmin?: boolean;
    isActive?: boolean;
    pages?: Prisma.EmployeeCreatepagesInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    devices?: Prisma.DeviceUncheckedCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    isSuperadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pages?: Prisma.EmployeeUpdatepagesInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    devices?: Prisma.DeviceUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    isSuperadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pages?: Prisma.EmployeeUpdatepagesInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    devices?: Prisma.DeviceUncheckedUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeCreateManyInput = {
    id?: string;
    fullName: string;
    phone: string;
    passwordHash: string;
    isSuperadmin?: boolean;
    isActive?: boolean;
    pages?: Prisma.EmployeeCreatepagesInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EmployeeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    isSuperadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pages?: Prisma.EmployeeUpdatepagesInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    isSuperadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pages?: Prisma.EmployeeUpdatepagesInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeScalarRelationFilter = {
    is?: Prisma.EmployeeWhereInput;
    isNot?: Prisma.EmployeeWhereInput;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type EmployeeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    isSuperadmin?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    pages?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EmployeeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    isSuperadmin?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EmployeeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    isSuperadmin?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EmployeeCreateNestedOneWithoutDevicesInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutDevicesInput, Prisma.EmployeeUncheckedCreateWithoutDevicesInput>;
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutDevicesInput;
    connect?: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutDevicesInput, Prisma.EmployeeUncheckedCreateWithoutDevicesInput>;
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutDevicesInput;
    upsert?: Prisma.EmployeeUpsertWithoutDevicesInput;
    connect?: Prisma.EmployeeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EmployeeUpdateToOneWithWhereWithoutDevicesInput, Prisma.EmployeeUpdateWithoutDevicesInput>, Prisma.EmployeeUncheckedUpdateWithoutDevicesInput>;
};
export type EmployeeCreatepagesInput = {
    set: string[];
};
export type EmployeeUpdatepagesInput = {
    set?: string[];
    push?: string | string[];
};
export type EmployeeCreateWithoutDevicesInput = {
    id?: string;
    fullName: string;
    phone: string;
    passwordHash: string;
    isSuperadmin?: boolean;
    isActive?: boolean;
    pages?: Prisma.EmployeeCreatepagesInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EmployeeUncheckedCreateWithoutDevicesInput = {
    id?: string;
    fullName: string;
    phone: string;
    passwordHash: string;
    isSuperadmin?: boolean;
    isActive?: boolean;
    pages?: Prisma.EmployeeCreatepagesInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EmployeeCreateOrConnectWithoutDevicesInput = {
    where: Prisma.EmployeeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeCreateWithoutDevicesInput, Prisma.EmployeeUncheckedCreateWithoutDevicesInput>;
};
export type EmployeeUpsertWithoutDevicesInput = {
    update: Prisma.XOR<Prisma.EmployeeUpdateWithoutDevicesInput, Prisma.EmployeeUncheckedUpdateWithoutDevicesInput>;
    create: Prisma.XOR<Prisma.EmployeeCreateWithoutDevicesInput, Prisma.EmployeeUncheckedCreateWithoutDevicesInput>;
    where?: Prisma.EmployeeWhereInput;
};
export type EmployeeUpdateToOneWithWhereWithoutDevicesInput = {
    where?: Prisma.EmployeeWhereInput;
    data: Prisma.XOR<Prisma.EmployeeUpdateWithoutDevicesInput, Prisma.EmployeeUncheckedUpdateWithoutDevicesInput>;
};
export type EmployeeUpdateWithoutDevicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    isSuperadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pages?: Prisma.EmployeeUpdatepagesInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeUncheckedUpdateWithoutDevicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    isSuperadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pages?: Prisma.EmployeeUpdatepagesInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeCountOutputType = {
    devices: number;
};
export type EmployeeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    devices?: boolean | EmployeeCountOutputTypeCountDevicesArgs;
};
export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeCountOutputTypeSelect<ExtArgs> | null;
};
export type EmployeeCountOutputTypeCountDevicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeviceWhereInput;
};
export type EmployeeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fullName?: boolean;
    phone?: boolean;
    passwordHash?: boolean;
    isSuperadmin?: boolean;
    isActive?: boolean;
    pages?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    devices?: boolean | Prisma.Employee$devicesArgs<ExtArgs>;
    _count?: boolean | Prisma.EmployeeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employee"]>;
export type EmployeeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fullName?: boolean;
    phone?: boolean;
    passwordHash?: boolean;
    isSuperadmin?: boolean;
    isActive?: boolean;
    pages?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["employee"]>;
export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fullName?: boolean;
    phone?: boolean;
    passwordHash?: boolean;
    isSuperadmin?: boolean;
    isActive?: boolean;
    pages?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["employee"]>;
export type EmployeeSelectScalar = {
    id?: boolean;
    fullName?: boolean;
    phone?: boolean;
    passwordHash?: boolean;
    isSuperadmin?: boolean;
    isActive?: boolean;
    pages?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type EmployeeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fullName" | "phone" | "passwordHash" | "isSuperadmin" | "isActive" | "pages" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>;
export type EmployeeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    devices?: boolean | Prisma.Employee$devicesArgs<ExtArgs>;
    _count?: boolean | Prisma.EmployeeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $EmployeePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Employee";
    objects: {
        devices: Prisma.$DevicePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        fullName: string;
        phone: string;
        passwordHash: string;
        isSuperadmin: boolean;
        isActive: boolean;
        pages: string[];
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["employee"]>;
    composites: {};
};
export type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EmployeePayload, S>;
export type EmployeeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EmployeeCountAggregateInputType | true;
};
export interface EmployeeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Employee'];
        meta: {
            name: 'Employee';
        };
    };
    findUnique<T extends EmployeeFindUniqueArgs>(args: Prisma.SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EmployeeFindFirstArgs>(args?: Prisma.SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EmployeeFindManyArgs>(args?: Prisma.SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EmployeeCreateArgs>(args: Prisma.SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EmployeeCreateManyArgs>(args?: Prisma.SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EmployeeDeleteArgs>(args: Prisma.SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EmployeeUpdateArgs>(args: Prisma.SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: Prisma.SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EmployeeUpdateManyArgs>(args: Prisma.SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EmployeeUpsertArgs>(args: Prisma.SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EmployeeCountArgs>(args?: Prisma.Subset<T, EmployeeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EmployeeCountAggregateOutputType> : number>;
    aggregate<T extends EmployeeAggregateArgs>(args: Prisma.Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>;
    groupBy<T extends EmployeeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EmployeeGroupByArgs['orderBy'];
    } : {
        orderBy?: EmployeeGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EmployeeFieldRefs;
}
export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    devices<T extends Prisma.Employee$devicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Employee$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EmployeeFieldRefs {
    readonly id: Prisma.FieldRef<"Employee", 'String'>;
    readonly fullName: Prisma.FieldRef<"Employee", 'String'>;
    readonly phone: Prisma.FieldRef<"Employee", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"Employee", 'String'>;
    readonly isSuperadmin: Prisma.FieldRef<"Employee", 'Boolean'>;
    readonly isActive: Prisma.FieldRef<"Employee", 'Boolean'>;
    readonly pages: Prisma.FieldRef<"Employee", 'String[]'>;
    readonly createdAt: Prisma.FieldRef<"Employee", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Employee", 'DateTime'>;
}
export type EmployeeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithRelationInput | Prisma.EmployeeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeScalarFieldEnum | Prisma.EmployeeScalarFieldEnum[];
};
export type EmployeeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithRelationInput | Prisma.EmployeeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeScalarFieldEnum | Prisma.EmployeeScalarFieldEnum[];
};
export type EmployeeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithRelationInput | Prisma.EmployeeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeScalarFieldEnum | Prisma.EmployeeScalarFieldEnum[];
};
export type EmployeeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeCreateInput, Prisma.EmployeeUncheckedCreateInput>;
};
export type EmployeeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EmployeeCreateManyInput | Prisma.EmployeeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EmployeeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    data: Prisma.EmployeeCreateManyInput | Prisma.EmployeeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EmployeeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeUpdateInput, Prisma.EmployeeUncheckedUpdateInput>;
    where: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EmployeeUpdateManyMutationInput, Prisma.EmployeeUncheckedUpdateManyInput>;
    where?: Prisma.EmployeeWhereInput;
    limit?: number;
};
export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeUpdateManyMutationInput, Prisma.EmployeeUncheckedUpdateManyInput>;
    where?: Prisma.EmployeeWhereInput;
    limit?: number;
};
export type EmployeeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where: Prisma.EmployeeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeCreateInput, Prisma.EmployeeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EmployeeUpdateInput, Prisma.EmployeeUncheckedUpdateInput>;
};
export type EmployeeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeWhereInput;
    limit?: number;
};
export type Employee$devicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    where?: Prisma.DeviceWhereInput;
    orderBy?: Prisma.DeviceOrderByWithRelationInput | Prisma.DeviceOrderByWithRelationInput[];
    cursor?: Prisma.DeviceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeviceScalarFieldEnum | Prisma.DeviceScalarFieldEnum[];
};
export type EmployeeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
};
