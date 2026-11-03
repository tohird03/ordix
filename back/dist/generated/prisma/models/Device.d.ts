import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DeviceModel = runtime.Types.Result.DefaultSelection<Prisma.$DevicePayload>;
export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null;
    _avg: DeviceAvgAggregateOutputType | null;
    _sum: DeviceSumAggregateOutputType | null;
    _min: DeviceMinAggregateOutputType | null;
    _max: DeviceMaxAggregateOutputType | null;
};
export type DeviceAvgAggregateOutputType = {
    id: number | null;
};
export type DeviceSumAggregateOutputType = {
    id: number | null;
};
export type DeviceMinAggregateOutputType = {
    id: number | null;
    employeeId: string | null;
    tokenHash: string | null;
    fingerprint: string | null;
    type: $Enums.DeviceType | null;
    browser: string | null;
    os: string | null;
    userAgent: string | null;
    ip: string | null;
    country: string | null;
    city: string | null;
    status: $Enums.DeviceStatus | null;
    requestedAt: Date | null;
    decidedAt: Date | null;
    lastSeenAt: Date | null;
};
export type DeviceMaxAggregateOutputType = {
    id: number | null;
    employeeId: string | null;
    tokenHash: string | null;
    fingerprint: string | null;
    type: $Enums.DeviceType | null;
    browser: string | null;
    os: string | null;
    userAgent: string | null;
    ip: string | null;
    country: string | null;
    city: string | null;
    status: $Enums.DeviceStatus | null;
    requestedAt: Date | null;
    decidedAt: Date | null;
    lastSeenAt: Date | null;
};
export type DeviceCountAggregateOutputType = {
    id: number;
    employeeId: number;
    tokenHash: number;
    fingerprint: number;
    type: number;
    browser: number;
    os: number;
    userAgent: number;
    ip: number;
    country: number;
    city: number;
    status: number;
    requestedAt: number;
    decidedAt: number;
    lastSeenAt: number;
    _all: number;
};
export type DeviceAvgAggregateInputType = {
    id?: true;
};
export type DeviceSumAggregateInputType = {
    id?: true;
};
export type DeviceMinAggregateInputType = {
    id?: true;
    employeeId?: true;
    tokenHash?: true;
    fingerprint?: true;
    type?: true;
    browser?: true;
    os?: true;
    userAgent?: true;
    ip?: true;
    country?: true;
    city?: true;
    status?: true;
    requestedAt?: true;
    decidedAt?: true;
    lastSeenAt?: true;
};
export type DeviceMaxAggregateInputType = {
    id?: true;
    employeeId?: true;
    tokenHash?: true;
    fingerprint?: true;
    type?: true;
    browser?: true;
    os?: true;
    userAgent?: true;
    ip?: true;
    country?: true;
    city?: true;
    status?: true;
    requestedAt?: true;
    decidedAt?: true;
    lastSeenAt?: true;
};
export type DeviceCountAggregateInputType = {
    id?: true;
    employeeId?: true;
    tokenHash?: true;
    fingerprint?: true;
    type?: true;
    browser?: true;
    os?: true;
    userAgent?: true;
    ip?: true;
    country?: true;
    city?: true;
    status?: true;
    requestedAt?: true;
    decidedAt?: true;
    lastSeenAt?: true;
    _all?: true;
};
export type DeviceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeviceWhereInput;
    orderBy?: Prisma.DeviceOrderByWithRelationInput | Prisma.DeviceOrderByWithRelationInput[];
    cursor?: Prisma.DeviceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DeviceCountAggregateInputType;
    _avg?: DeviceAvgAggregateInputType;
    _sum?: DeviceSumAggregateInputType;
    _min?: DeviceMinAggregateInputType;
    _max?: DeviceMaxAggregateInputType;
};
export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
    [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDevice[P]> : Prisma.GetScalarType<T[P], AggregateDevice[P]>;
};
export type DeviceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeviceWhereInput;
    orderBy?: Prisma.DeviceOrderByWithAggregationInput | Prisma.DeviceOrderByWithAggregationInput[];
    by: Prisma.DeviceScalarFieldEnum[] | Prisma.DeviceScalarFieldEnum;
    having?: Prisma.DeviceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DeviceCountAggregateInputType | true;
    _avg?: DeviceAvgAggregateInputType;
    _sum?: DeviceSumAggregateInputType;
    _min?: DeviceMinAggregateInputType;
    _max?: DeviceMaxAggregateInputType;
};
export type DeviceGroupByOutputType = {
    id: number;
    employeeId: string;
    tokenHash: string;
    fingerprint: string | null;
    type: $Enums.DeviceType;
    browser: string | null;
    os: string | null;
    userAgent: string | null;
    ip: string | null;
    country: string | null;
    city: string | null;
    status: $Enums.DeviceStatus;
    requestedAt: Date;
    decidedAt: Date | null;
    lastSeenAt: Date | null;
    _count: DeviceCountAggregateOutputType | null;
    _avg: DeviceAvgAggregateOutputType | null;
    _sum: DeviceSumAggregateOutputType | null;
    _min: DeviceMinAggregateOutputType | null;
    _max: DeviceMaxAggregateOutputType | null;
};
export type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DeviceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DeviceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DeviceGroupByOutputType[P]>;
}>>;
export type DeviceWhereInput = {
    AND?: Prisma.DeviceWhereInput | Prisma.DeviceWhereInput[];
    OR?: Prisma.DeviceWhereInput[];
    NOT?: Prisma.DeviceWhereInput | Prisma.DeviceWhereInput[];
    id?: Prisma.IntFilter<"Device"> | number;
    employeeId?: Prisma.UuidFilter<"Device"> | string;
    tokenHash?: Prisma.StringFilter<"Device"> | string;
    fingerprint?: Prisma.StringNullableFilter<"Device"> | string | null;
    type?: Prisma.EnumDeviceTypeFilter<"Device"> | $Enums.DeviceType;
    browser?: Prisma.StringNullableFilter<"Device"> | string | null;
    os?: Prisma.StringNullableFilter<"Device"> | string | null;
    userAgent?: Prisma.StringNullableFilter<"Device"> | string | null;
    ip?: Prisma.StringNullableFilter<"Device"> | string | null;
    country?: Prisma.StringNullableFilter<"Device"> | string | null;
    city?: Prisma.StringNullableFilter<"Device"> | string | null;
    status?: Prisma.EnumDeviceStatusFilter<"Device"> | $Enums.DeviceStatus;
    requestedAt?: Prisma.DateTimeFilter<"Device"> | Date | string;
    decidedAt?: Prisma.DateTimeNullableFilter<"Device"> | Date | string | null;
    lastSeenAt?: Prisma.DateTimeNullableFilter<"Device"> | Date | string | null;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
};
export type DeviceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    fingerprint?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    browser?: Prisma.SortOrderInput | Prisma.SortOrder;
    os?: Prisma.SortOrderInput | Prisma.SortOrder;
    userAgent?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    decidedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
};
export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    tokenHash?: string;
    AND?: Prisma.DeviceWhereInput | Prisma.DeviceWhereInput[];
    OR?: Prisma.DeviceWhereInput[];
    NOT?: Prisma.DeviceWhereInput | Prisma.DeviceWhereInput[];
    employeeId?: Prisma.UuidFilter<"Device"> | string;
    fingerprint?: Prisma.StringNullableFilter<"Device"> | string | null;
    type?: Prisma.EnumDeviceTypeFilter<"Device"> | $Enums.DeviceType;
    browser?: Prisma.StringNullableFilter<"Device"> | string | null;
    os?: Prisma.StringNullableFilter<"Device"> | string | null;
    userAgent?: Prisma.StringNullableFilter<"Device"> | string | null;
    ip?: Prisma.StringNullableFilter<"Device"> | string | null;
    country?: Prisma.StringNullableFilter<"Device"> | string | null;
    city?: Prisma.StringNullableFilter<"Device"> | string | null;
    status?: Prisma.EnumDeviceStatusFilter<"Device"> | $Enums.DeviceStatus;
    requestedAt?: Prisma.DateTimeFilter<"Device"> | Date | string;
    decidedAt?: Prisma.DateTimeNullableFilter<"Device"> | Date | string | null;
    lastSeenAt?: Prisma.DateTimeNullableFilter<"Device"> | Date | string | null;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
}, "id" | "tokenHash">;
export type DeviceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    fingerprint?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    browser?: Prisma.SortOrderInput | Prisma.SortOrder;
    os?: Prisma.SortOrderInput | Prisma.SortOrder;
    userAgent?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    decidedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.DeviceCountOrderByAggregateInput;
    _avg?: Prisma.DeviceAvgOrderByAggregateInput;
    _max?: Prisma.DeviceMaxOrderByAggregateInput;
    _min?: Prisma.DeviceMinOrderByAggregateInput;
    _sum?: Prisma.DeviceSumOrderByAggregateInput;
};
export type DeviceScalarWhereWithAggregatesInput = {
    AND?: Prisma.DeviceScalarWhereWithAggregatesInput | Prisma.DeviceScalarWhereWithAggregatesInput[];
    OR?: Prisma.DeviceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DeviceScalarWhereWithAggregatesInput | Prisma.DeviceScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Device"> | number;
    employeeId?: Prisma.UuidWithAggregatesFilter<"Device"> | string;
    tokenHash?: Prisma.StringWithAggregatesFilter<"Device"> | string;
    fingerprint?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    type?: Prisma.EnumDeviceTypeWithAggregatesFilter<"Device"> | $Enums.DeviceType;
    browser?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    os?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    userAgent?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    ip?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    country?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    city?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    status?: Prisma.EnumDeviceStatusWithAggregatesFilter<"Device"> | $Enums.DeviceStatus;
    requestedAt?: Prisma.DateTimeWithAggregatesFilter<"Device"> | Date | string;
    decidedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Device"> | Date | string | null;
    lastSeenAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Device"> | Date | string | null;
};
export type DeviceCreateInput = {
    tokenHash: string;
    fingerprint?: string | null;
    type?: $Enums.DeviceType;
    browser?: string | null;
    os?: string | null;
    userAgent?: string | null;
    ip?: string | null;
    country?: string | null;
    city?: string | null;
    status?: $Enums.DeviceStatus;
    requestedAt?: Date | string;
    decidedAt?: Date | string | null;
    lastSeenAt?: Date | string | null;
    employee: Prisma.EmployeeCreateNestedOneWithoutDevicesInput;
};
export type DeviceUncheckedCreateInput = {
    id?: number;
    employeeId: string;
    tokenHash: string;
    fingerprint?: string | null;
    type?: $Enums.DeviceType;
    browser?: string | null;
    os?: string | null;
    userAgent?: string | null;
    ip?: string | null;
    country?: string | null;
    city?: string | null;
    status?: $Enums.DeviceStatus;
    requestedAt?: Date | string;
    decidedAt?: Date | string | null;
    lastSeenAt?: Date | string | null;
};
export type DeviceUpdateInput = {
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fingerprint?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType;
    browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutDevicesNestedInput;
};
export type DeviceUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fingerprint?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType;
    browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type DeviceCreateManyInput = {
    id?: number;
    employeeId: string;
    tokenHash: string;
    fingerprint?: string | null;
    type?: $Enums.DeviceType;
    browser?: string | null;
    os?: string | null;
    userAgent?: string | null;
    ip?: string | null;
    country?: string | null;
    city?: string | null;
    status?: $Enums.DeviceStatus;
    requestedAt?: Date | string;
    decidedAt?: Date | string | null;
    lastSeenAt?: Date | string | null;
};
export type DeviceUpdateManyMutationInput = {
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fingerprint?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType;
    browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type DeviceUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fingerprint?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType;
    browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type DeviceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    fingerprint?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    browser?: Prisma.SortOrder;
    os?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    decidedAt?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
};
export type DeviceAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type DeviceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    fingerprint?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    browser?: Prisma.SortOrder;
    os?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    decidedAt?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
};
export type DeviceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    fingerprint?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    browser?: Prisma.SortOrder;
    os?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    decidedAt?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
};
export type DeviceSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type DeviceListRelationFilter = {
    every?: Prisma.DeviceWhereInput;
    some?: Prisma.DeviceWhereInput;
    none?: Prisma.DeviceWhereInput;
};
export type DeviceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumDeviceTypeFieldUpdateOperationsInput = {
    set?: $Enums.DeviceType;
};
export type EnumDeviceStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeviceStatus;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type DeviceCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.DeviceCreateWithoutEmployeeInput, Prisma.DeviceUncheckedCreateWithoutEmployeeInput> | Prisma.DeviceCreateWithoutEmployeeInput[] | Prisma.DeviceUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.DeviceCreateOrConnectWithoutEmployeeInput | Prisma.DeviceCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.DeviceCreateManyEmployeeInputEnvelope;
    connect?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
};
export type DeviceUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.DeviceCreateWithoutEmployeeInput, Prisma.DeviceUncheckedCreateWithoutEmployeeInput> | Prisma.DeviceCreateWithoutEmployeeInput[] | Prisma.DeviceUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.DeviceCreateOrConnectWithoutEmployeeInput | Prisma.DeviceCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.DeviceCreateManyEmployeeInputEnvelope;
    connect?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
};
export type DeviceUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.DeviceCreateWithoutEmployeeInput, Prisma.DeviceUncheckedCreateWithoutEmployeeInput> | Prisma.DeviceCreateWithoutEmployeeInput[] | Prisma.DeviceUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.DeviceCreateOrConnectWithoutEmployeeInput | Prisma.DeviceCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.DeviceUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.DeviceUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.DeviceCreateManyEmployeeInputEnvelope;
    set?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
    disconnect?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
    delete?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
    connect?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
    update?: Prisma.DeviceUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.DeviceUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.DeviceUpdateManyWithWhereWithoutEmployeeInput | Prisma.DeviceUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.DeviceScalarWhereInput | Prisma.DeviceScalarWhereInput[];
};
export type DeviceUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.DeviceCreateWithoutEmployeeInput, Prisma.DeviceUncheckedCreateWithoutEmployeeInput> | Prisma.DeviceCreateWithoutEmployeeInput[] | Prisma.DeviceUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.DeviceCreateOrConnectWithoutEmployeeInput | Prisma.DeviceCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.DeviceUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.DeviceUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.DeviceCreateManyEmployeeInputEnvelope;
    set?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
    disconnect?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
    delete?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
    connect?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
    update?: Prisma.DeviceUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.DeviceUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.DeviceUpdateManyWithWhereWithoutEmployeeInput | Prisma.DeviceUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.DeviceScalarWhereInput | Prisma.DeviceScalarWhereInput[];
};
export type DeviceCreateWithoutEmployeeInput = {
    tokenHash: string;
    fingerprint?: string | null;
    type?: $Enums.DeviceType;
    browser?: string | null;
    os?: string | null;
    userAgent?: string | null;
    ip?: string | null;
    country?: string | null;
    city?: string | null;
    status?: $Enums.DeviceStatus;
    requestedAt?: Date | string;
    decidedAt?: Date | string | null;
    lastSeenAt?: Date | string | null;
};
export type DeviceUncheckedCreateWithoutEmployeeInput = {
    id?: number;
    tokenHash: string;
    fingerprint?: string | null;
    type?: $Enums.DeviceType;
    browser?: string | null;
    os?: string | null;
    userAgent?: string | null;
    ip?: string | null;
    country?: string | null;
    city?: string | null;
    status?: $Enums.DeviceStatus;
    requestedAt?: Date | string;
    decidedAt?: Date | string | null;
    lastSeenAt?: Date | string | null;
};
export type DeviceCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.DeviceWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeviceCreateWithoutEmployeeInput, Prisma.DeviceUncheckedCreateWithoutEmployeeInput>;
};
export type DeviceCreateManyEmployeeInputEnvelope = {
    data: Prisma.DeviceCreateManyEmployeeInput | Prisma.DeviceCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type DeviceUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.DeviceWhereUniqueInput;
    update: Prisma.XOR<Prisma.DeviceUpdateWithoutEmployeeInput, Prisma.DeviceUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.DeviceCreateWithoutEmployeeInput, Prisma.DeviceUncheckedCreateWithoutEmployeeInput>;
};
export type DeviceUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.DeviceWhereUniqueInput;
    data: Prisma.XOR<Prisma.DeviceUpdateWithoutEmployeeInput, Prisma.DeviceUncheckedUpdateWithoutEmployeeInput>;
};
export type DeviceUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.DeviceScalarWhereInput;
    data: Prisma.XOR<Prisma.DeviceUpdateManyMutationInput, Prisma.DeviceUncheckedUpdateManyWithoutEmployeeInput>;
};
export type DeviceScalarWhereInput = {
    AND?: Prisma.DeviceScalarWhereInput | Prisma.DeviceScalarWhereInput[];
    OR?: Prisma.DeviceScalarWhereInput[];
    NOT?: Prisma.DeviceScalarWhereInput | Prisma.DeviceScalarWhereInput[];
    id?: Prisma.IntFilter<"Device"> | number;
    employeeId?: Prisma.UuidFilter<"Device"> | string;
    tokenHash?: Prisma.StringFilter<"Device"> | string;
    fingerprint?: Prisma.StringNullableFilter<"Device"> | string | null;
    type?: Prisma.EnumDeviceTypeFilter<"Device"> | $Enums.DeviceType;
    browser?: Prisma.StringNullableFilter<"Device"> | string | null;
    os?: Prisma.StringNullableFilter<"Device"> | string | null;
    userAgent?: Prisma.StringNullableFilter<"Device"> | string | null;
    ip?: Prisma.StringNullableFilter<"Device"> | string | null;
    country?: Prisma.StringNullableFilter<"Device"> | string | null;
    city?: Prisma.StringNullableFilter<"Device"> | string | null;
    status?: Prisma.EnumDeviceStatusFilter<"Device"> | $Enums.DeviceStatus;
    requestedAt?: Prisma.DateTimeFilter<"Device"> | Date | string;
    decidedAt?: Prisma.DateTimeNullableFilter<"Device"> | Date | string | null;
    lastSeenAt?: Prisma.DateTimeNullableFilter<"Device"> | Date | string | null;
};
export type DeviceCreateManyEmployeeInput = {
    id?: number;
    tokenHash: string;
    fingerprint?: string | null;
    type?: $Enums.DeviceType;
    browser?: string | null;
    os?: string | null;
    userAgent?: string | null;
    ip?: string | null;
    country?: string | null;
    city?: string | null;
    status?: $Enums.DeviceStatus;
    requestedAt?: Date | string;
    decidedAt?: Date | string | null;
    lastSeenAt?: Date | string | null;
};
export type DeviceUpdateWithoutEmployeeInput = {
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fingerprint?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType;
    browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type DeviceUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fingerprint?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType;
    browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type DeviceUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fingerprint?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType;
    browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    decidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type DeviceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    tokenHash?: boolean;
    fingerprint?: boolean;
    type?: boolean;
    browser?: boolean;
    os?: boolean;
    userAgent?: boolean;
    ip?: boolean;
    country?: boolean;
    city?: boolean;
    status?: boolean;
    requestedAt?: boolean;
    decidedAt?: boolean;
    lastSeenAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["device"]>;
export type DeviceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    tokenHash?: boolean;
    fingerprint?: boolean;
    type?: boolean;
    browser?: boolean;
    os?: boolean;
    userAgent?: boolean;
    ip?: boolean;
    country?: boolean;
    city?: boolean;
    status?: boolean;
    requestedAt?: boolean;
    decidedAt?: boolean;
    lastSeenAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["device"]>;
export type DeviceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    tokenHash?: boolean;
    fingerprint?: boolean;
    type?: boolean;
    browser?: boolean;
    os?: boolean;
    userAgent?: boolean;
    ip?: boolean;
    country?: boolean;
    city?: boolean;
    status?: boolean;
    requestedAt?: boolean;
    decidedAt?: boolean;
    lastSeenAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["device"]>;
export type DeviceSelectScalar = {
    id?: boolean;
    employeeId?: boolean;
    tokenHash?: boolean;
    fingerprint?: boolean;
    type?: boolean;
    browser?: boolean;
    os?: boolean;
    userAgent?: boolean;
    ip?: boolean;
    country?: boolean;
    city?: boolean;
    status?: boolean;
    requestedAt?: boolean;
    decidedAt?: boolean;
    lastSeenAt?: boolean;
};
export type DeviceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "employeeId" | "tokenHash" | "fingerprint" | "type" | "browser" | "os" | "userAgent" | "ip" | "country" | "city" | "status" | "requestedAt" | "decidedAt" | "lastSeenAt", ExtArgs["result"]["device"]>;
export type DeviceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type DeviceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type $DevicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Device";
    objects: {
        employee: Prisma.$EmployeePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        employeeId: string;
        tokenHash: string;
        fingerprint: string | null;
        type: $Enums.DeviceType;
        browser: string | null;
        os: string | null;
        userAgent: string | null;
        ip: string | null;
        country: string | null;
        city: string | null;
        status: $Enums.DeviceStatus;
        requestedAt: Date;
        decidedAt: Date | null;
        lastSeenAt: Date | null;
    }, ExtArgs["result"]["device"]>;
    composites: {};
};
export type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DevicePayload, S>;
export type DeviceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DeviceCountAggregateInputType | true;
};
export interface DeviceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Device'];
        meta: {
            name: 'Device';
        };
    };
    findUnique<T extends DeviceFindUniqueArgs>(args: Prisma.SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DeviceFindFirstArgs>(args?: Prisma.SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DeviceFindManyArgs>(args?: Prisma.SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DeviceCreateArgs>(args: Prisma.SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DeviceCreateManyArgs>(args?: Prisma.SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DeviceDeleteArgs>(args: Prisma.SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DeviceUpdateArgs>(args: Prisma.SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DeviceDeleteManyArgs>(args?: Prisma.SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DeviceUpdateManyArgs>(args: Prisma.SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DeviceUpsertArgs>(args: Prisma.SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DeviceCountArgs>(args?: Prisma.Subset<T, DeviceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DeviceCountAggregateOutputType> : number>;
    aggregate<T extends DeviceAggregateArgs>(args: Prisma.Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>;
    groupBy<T extends DeviceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DeviceGroupByArgs['orderBy'];
    } : {
        orderBy?: DeviceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DeviceFieldRefs;
}
export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DeviceFieldRefs {
    readonly id: Prisma.FieldRef<"Device", 'Int'>;
    readonly employeeId: Prisma.FieldRef<"Device", 'String'>;
    readonly tokenHash: Prisma.FieldRef<"Device", 'String'>;
    readonly fingerprint: Prisma.FieldRef<"Device", 'String'>;
    readonly type: Prisma.FieldRef<"Device", 'DeviceType'>;
    readonly browser: Prisma.FieldRef<"Device", 'String'>;
    readonly os: Prisma.FieldRef<"Device", 'String'>;
    readonly userAgent: Prisma.FieldRef<"Device", 'String'>;
    readonly ip: Prisma.FieldRef<"Device", 'String'>;
    readonly country: Prisma.FieldRef<"Device", 'String'>;
    readonly city: Prisma.FieldRef<"Device", 'String'>;
    readonly status: Prisma.FieldRef<"Device", 'DeviceStatus'>;
    readonly requestedAt: Prisma.FieldRef<"Device", 'DateTime'>;
    readonly decidedAt: Prisma.FieldRef<"Device", 'DateTime'>;
    readonly lastSeenAt: Prisma.FieldRef<"Device", 'DateTime'>;
}
export type DeviceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    where: Prisma.DeviceWhereUniqueInput;
};
export type DeviceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    where: Prisma.DeviceWhereUniqueInput;
};
export type DeviceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DeviceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DeviceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DeviceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DeviceCreateInput, Prisma.DeviceUncheckedCreateInput>;
};
export type DeviceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DeviceCreateManyInput | Prisma.DeviceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DeviceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    data: Prisma.DeviceCreateManyInput | Prisma.DeviceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DeviceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DeviceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DeviceUpdateInput, Prisma.DeviceUncheckedUpdateInput>;
    where: Prisma.DeviceWhereUniqueInput;
};
export type DeviceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DeviceUpdateManyMutationInput, Prisma.DeviceUncheckedUpdateManyInput>;
    where?: Prisma.DeviceWhereInput;
    limit?: number;
};
export type DeviceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DeviceUpdateManyMutationInput, Prisma.DeviceUncheckedUpdateManyInput>;
    where?: Prisma.DeviceWhereInput;
    limit?: number;
    include?: Prisma.DeviceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DeviceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    where: Prisma.DeviceWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeviceCreateInput, Prisma.DeviceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DeviceUpdateInput, Prisma.DeviceUncheckedUpdateInput>;
};
export type DeviceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    where: Prisma.DeviceWhereUniqueInput;
};
export type DeviceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeviceWhereInput;
    limit?: number;
};
export type DeviceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
};
