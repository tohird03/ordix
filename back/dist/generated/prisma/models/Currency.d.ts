import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CurrencyModel = runtime.Types.Result.DefaultSelection<Prisma.$CurrencyPayload>;
export type AggregateCurrency = {
    _count: CurrencyCountAggregateOutputType | null;
    _avg: CurrencyAvgAggregateOutputType | null;
    _sum: CurrencySumAggregateOutputType | null;
    _min: CurrencyMinAggregateOutputType | null;
    _max: CurrencyMaxAggregateOutputType | null;
};
export type CurrencyAvgAggregateOutputType = {
    exchangeRate: number | null;
};
export type CurrencySumAggregateOutputType = {
    exchangeRate: number | null;
};
export type CurrencyMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    symbol: string | null;
    exchangeRate: number | null;
    isDefault: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CurrencyMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    symbol: string | null;
    exchangeRate: number | null;
    isDefault: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CurrencyCountAggregateOutputType = {
    id: number;
    name: number;
    symbol: number;
    exchangeRate: number;
    isDefault: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CurrencyAvgAggregateInputType = {
    exchangeRate?: true;
};
export type CurrencySumAggregateInputType = {
    exchangeRate?: true;
};
export type CurrencyMinAggregateInputType = {
    id?: true;
    name?: true;
    symbol?: true;
    exchangeRate?: true;
    isDefault?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CurrencyMaxAggregateInputType = {
    id?: true;
    name?: true;
    symbol?: true;
    exchangeRate?: true;
    isDefault?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CurrencyCountAggregateInputType = {
    id?: true;
    name?: true;
    symbol?: true;
    exchangeRate?: true;
    isDefault?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CurrencyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CurrencyWhereInput;
    orderBy?: Prisma.CurrencyOrderByWithRelationInput | Prisma.CurrencyOrderByWithRelationInput[];
    cursor?: Prisma.CurrencyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CurrencyCountAggregateInputType;
    _avg?: CurrencyAvgAggregateInputType;
    _sum?: CurrencySumAggregateInputType;
    _min?: CurrencyMinAggregateInputType;
    _max?: CurrencyMaxAggregateInputType;
};
export type GetCurrencyAggregateType<T extends CurrencyAggregateArgs> = {
    [P in keyof T & keyof AggregateCurrency]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCurrency[P]> : Prisma.GetScalarType<T[P], AggregateCurrency[P]>;
};
export type CurrencyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CurrencyWhereInput;
    orderBy?: Prisma.CurrencyOrderByWithAggregationInput | Prisma.CurrencyOrderByWithAggregationInput[];
    by: Prisma.CurrencyScalarFieldEnum[] | Prisma.CurrencyScalarFieldEnum;
    having?: Prisma.CurrencyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CurrencyCountAggregateInputType | true;
    _avg?: CurrencyAvgAggregateInputType;
    _sum?: CurrencySumAggregateInputType;
    _min?: CurrencyMinAggregateInputType;
    _max?: CurrencyMaxAggregateInputType;
};
export type CurrencyGroupByOutputType = {
    id: string;
    name: string;
    symbol: string;
    exchangeRate: number;
    isDefault: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: CurrencyCountAggregateOutputType | null;
    _avg: CurrencyAvgAggregateOutputType | null;
    _sum: CurrencySumAggregateOutputType | null;
    _min: CurrencyMinAggregateOutputType | null;
    _max: CurrencyMaxAggregateOutputType | null;
};
export type GetCurrencyGroupByPayload<T extends CurrencyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CurrencyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CurrencyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CurrencyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CurrencyGroupByOutputType[P]>;
}>>;
export type CurrencyWhereInput = {
    AND?: Prisma.CurrencyWhereInput | Prisma.CurrencyWhereInput[];
    OR?: Prisma.CurrencyWhereInput[];
    NOT?: Prisma.CurrencyWhereInput | Prisma.CurrencyWhereInput[];
    id?: Prisma.StringFilter<"Currency"> | string;
    name?: Prisma.StringFilter<"Currency"> | string;
    symbol?: Prisma.StringFilter<"Currency"> | string;
    exchangeRate?: Prisma.IntFilter<"Currency"> | number;
    isDefault?: Prisma.BoolFilter<"Currency"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Currency"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Currency"> | Date | string;
    costProducts?: Prisma.ProductListRelationFilter;
    saleProducts?: Prisma.ProductListRelationFilter;
    wholesaleProducts?: Prisma.ProductListRelationFilter;
};
export type CurrencyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    symbol?: Prisma.SortOrder;
    exchangeRate?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    costProducts?: Prisma.ProductOrderByRelationAggregateInput;
    saleProducts?: Prisma.ProductOrderByRelationAggregateInput;
    wholesaleProducts?: Prisma.ProductOrderByRelationAggregateInput;
};
export type CurrencyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    symbol?: string;
    AND?: Prisma.CurrencyWhereInput | Prisma.CurrencyWhereInput[];
    OR?: Prisma.CurrencyWhereInput[];
    NOT?: Prisma.CurrencyWhereInput | Prisma.CurrencyWhereInput[];
    name?: Prisma.StringFilter<"Currency"> | string;
    exchangeRate?: Prisma.IntFilter<"Currency"> | number;
    isDefault?: Prisma.BoolFilter<"Currency"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Currency"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Currency"> | Date | string;
    costProducts?: Prisma.ProductListRelationFilter;
    saleProducts?: Prisma.ProductListRelationFilter;
    wholesaleProducts?: Prisma.ProductListRelationFilter;
}, "id" | "symbol">;
export type CurrencyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    symbol?: Prisma.SortOrder;
    exchangeRate?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CurrencyCountOrderByAggregateInput;
    _avg?: Prisma.CurrencyAvgOrderByAggregateInput;
    _max?: Prisma.CurrencyMaxOrderByAggregateInput;
    _min?: Prisma.CurrencyMinOrderByAggregateInput;
    _sum?: Prisma.CurrencySumOrderByAggregateInput;
};
export type CurrencyScalarWhereWithAggregatesInput = {
    AND?: Prisma.CurrencyScalarWhereWithAggregatesInput | Prisma.CurrencyScalarWhereWithAggregatesInput[];
    OR?: Prisma.CurrencyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CurrencyScalarWhereWithAggregatesInput | Prisma.CurrencyScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Currency"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Currency"> | string;
    symbol?: Prisma.StringWithAggregatesFilter<"Currency"> | string;
    exchangeRate?: Prisma.IntWithAggregatesFilter<"Currency"> | number;
    isDefault?: Prisma.BoolWithAggregatesFilter<"Currency"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Currency"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Currency"> | Date | string;
};
export type CurrencyCreateInput = {
    id?: string;
    name: string;
    symbol: string;
    exchangeRate: number;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    costProducts?: Prisma.ProductCreateNestedManyWithoutCostCurrencyInput;
    saleProducts?: Prisma.ProductCreateNestedManyWithoutSaleCurrencyInput;
    wholesaleProducts?: Prisma.ProductCreateNestedManyWithoutWholesaleCurrencyInput;
};
export type CurrencyUncheckedCreateInput = {
    id?: string;
    name: string;
    symbol: string;
    exchangeRate: number;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    costProducts?: Prisma.ProductUncheckedCreateNestedManyWithoutCostCurrencyInput;
    saleProducts?: Prisma.ProductUncheckedCreateNestedManyWithoutSaleCurrencyInput;
    wholesaleProducts?: Prisma.ProductUncheckedCreateNestedManyWithoutWholesaleCurrencyInput;
};
export type CurrencyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    exchangeRate?: Prisma.IntFieldUpdateOperationsInput | number;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    costProducts?: Prisma.ProductUpdateManyWithoutCostCurrencyNestedInput;
    saleProducts?: Prisma.ProductUpdateManyWithoutSaleCurrencyNestedInput;
    wholesaleProducts?: Prisma.ProductUpdateManyWithoutWholesaleCurrencyNestedInput;
};
export type CurrencyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    exchangeRate?: Prisma.IntFieldUpdateOperationsInput | number;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    costProducts?: Prisma.ProductUncheckedUpdateManyWithoutCostCurrencyNestedInput;
    saleProducts?: Prisma.ProductUncheckedUpdateManyWithoutSaleCurrencyNestedInput;
    wholesaleProducts?: Prisma.ProductUncheckedUpdateManyWithoutWholesaleCurrencyNestedInput;
};
export type CurrencyCreateManyInput = {
    id?: string;
    name: string;
    symbol: string;
    exchangeRate: number;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CurrencyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    exchangeRate?: Prisma.IntFieldUpdateOperationsInput | number;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CurrencyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    exchangeRate?: Prisma.IntFieldUpdateOperationsInput | number;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CurrencyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    symbol?: Prisma.SortOrder;
    exchangeRate?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CurrencyAvgOrderByAggregateInput = {
    exchangeRate?: Prisma.SortOrder;
};
export type CurrencyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    symbol?: Prisma.SortOrder;
    exchangeRate?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CurrencyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    symbol?: Prisma.SortOrder;
    exchangeRate?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CurrencySumOrderByAggregateInput = {
    exchangeRate?: Prisma.SortOrder;
};
export type CurrencyNullableScalarRelationFilter = {
    is?: Prisma.CurrencyWhereInput | null;
    isNot?: Prisma.CurrencyWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type CurrencyCreateNestedOneWithoutCostProductsInput = {
    create?: Prisma.XOR<Prisma.CurrencyCreateWithoutCostProductsInput, Prisma.CurrencyUncheckedCreateWithoutCostProductsInput>;
    connectOrCreate?: Prisma.CurrencyCreateOrConnectWithoutCostProductsInput;
    connect?: Prisma.CurrencyWhereUniqueInput;
};
export type CurrencyCreateNestedOneWithoutSaleProductsInput = {
    create?: Prisma.XOR<Prisma.CurrencyCreateWithoutSaleProductsInput, Prisma.CurrencyUncheckedCreateWithoutSaleProductsInput>;
    connectOrCreate?: Prisma.CurrencyCreateOrConnectWithoutSaleProductsInput;
    connect?: Prisma.CurrencyWhereUniqueInput;
};
export type CurrencyCreateNestedOneWithoutWholesaleProductsInput = {
    create?: Prisma.XOR<Prisma.CurrencyCreateWithoutWholesaleProductsInput, Prisma.CurrencyUncheckedCreateWithoutWholesaleProductsInput>;
    connectOrCreate?: Prisma.CurrencyCreateOrConnectWithoutWholesaleProductsInput;
    connect?: Prisma.CurrencyWhereUniqueInput;
};
export type CurrencyUpdateOneWithoutCostProductsNestedInput = {
    create?: Prisma.XOR<Prisma.CurrencyCreateWithoutCostProductsInput, Prisma.CurrencyUncheckedCreateWithoutCostProductsInput>;
    connectOrCreate?: Prisma.CurrencyCreateOrConnectWithoutCostProductsInput;
    upsert?: Prisma.CurrencyUpsertWithoutCostProductsInput;
    disconnect?: Prisma.CurrencyWhereInput | boolean;
    delete?: Prisma.CurrencyWhereInput | boolean;
    connect?: Prisma.CurrencyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CurrencyUpdateToOneWithWhereWithoutCostProductsInput, Prisma.CurrencyUpdateWithoutCostProductsInput>, Prisma.CurrencyUncheckedUpdateWithoutCostProductsInput>;
};
export type CurrencyUpdateOneWithoutSaleProductsNestedInput = {
    create?: Prisma.XOR<Prisma.CurrencyCreateWithoutSaleProductsInput, Prisma.CurrencyUncheckedCreateWithoutSaleProductsInput>;
    connectOrCreate?: Prisma.CurrencyCreateOrConnectWithoutSaleProductsInput;
    upsert?: Prisma.CurrencyUpsertWithoutSaleProductsInput;
    disconnect?: Prisma.CurrencyWhereInput | boolean;
    delete?: Prisma.CurrencyWhereInput | boolean;
    connect?: Prisma.CurrencyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CurrencyUpdateToOneWithWhereWithoutSaleProductsInput, Prisma.CurrencyUpdateWithoutSaleProductsInput>, Prisma.CurrencyUncheckedUpdateWithoutSaleProductsInput>;
};
export type CurrencyUpdateOneWithoutWholesaleProductsNestedInput = {
    create?: Prisma.XOR<Prisma.CurrencyCreateWithoutWholesaleProductsInput, Prisma.CurrencyUncheckedCreateWithoutWholesaleProductsInput>;
    connectOrCreate?: Prisma.CurrencyCreateOrConnectWithoutWholesaleProductsInput;
    upsert?: Prisma.CurrencyUpsertWithoutWholesaleProductsInput;
    disconnect?: Prisma.CurrencyWhereInput | boolean;
    delete?: Prisma.CurrencyWhereInput | boolean;
    connect?: Prisma.CurrencyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CurrencyUpdateToOneWithWhereWithoutWholesaleProductsInput, Prisma.CurrencyUpdateWithoutWholesaleProductsInput>, Prisma.CurrencyUncheckedUpdateWithoutWholesaleProductsInput>;
};
export type CurrencyCreateWithoutCostProductsInput = {
    id?: string;
    name: string;
    symbol: string;
    exchangeRate: number;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    saleProducts?: Prisma.ProductCreateNestedManyWithoutSaleCurrencyInput;
    wholesaleProducts?: Prisma.ProductCreateNestedManyWithoutWholesaleCurrencyInput;
};
export type CurrencyUncheckedCreateWithoutCostProductsInput = {
    id?: string;
    name: string;
    symbol: string;
    exchangeRate: number;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    saleProducts?: Prisma.ProductUncheckedCreateNestedManyWithoutSaleCurrencyInput;
    wholesaleProducts?: Prisma.ProductUncheckedCreateNestedManyWithoutWholesaleCurrencyInput;
};
export type CurrencyCreateOrConnectWithoutCostProductsInput = {
    where: Prisma.CurrencyWhereUniqueInput;
    create: Prisma.XOR<Prisma.CurrencyCreateWithoutCostProductsInput, Prisma.CurrencyUncheckedCreateWithoutCostProductsInput>;
};
export type CurrencyCreateWithoutSaleProductsInput = {
    id?: string;
    name: string;
    symbol: string;
    exchangeRate: number;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    costProducts?: Prisma.ProductCreateNestedManyWithoutCostCurrencyInput;
    wholesaleProducts?: Prisma.ProductCreateNestedManyWithoutWholesaleCurrencyInput;
};
export type CurrencyUncheckedCreateWithoutSaleProductsInput = {
    id?: string;
    name: string;
    symbol: string;
    exchangeRate: number;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    costProducts?: Prisma.ProductUncheckedCreateNestedManyWithoutCostCurrencyInput;
    wholesaleProducts?: Prisma.ProductUncheckedCreateNestedManyWithoutWholesaleCurrencyInput;
};
export type CurrencyCreateOrConnectWithoutSaleProductsInput = {
    where: Prisma.CurrencyWhereUniqueInput;
    create: Prisma.XOR<Prisma.CurrencyCreateWithoutSaleProductsInput, Prisma.CurrencyUncheckedCreateWithoutSaleProductsInput>;
};
export type CurrencyCreateWithoutWholesaleProductsInput = {
    id?: string;
    name: string;
    symbol: string;
    exchangeRate: number;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    costProducts?: Prisma.ProductCreateNestedManyWithoutCostCurrencyInput;
    saleProducts?: Prisma.ProductCreateNestedManyWithoutSaleCurrencyInput;
};
export type CurrencyUncheckedCreateWithoutWholesaleProductsInput = {
    id?: string;
    name: string;
    symbol: string;
    exchangeRate: number;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    costProducts?: Prisma.ProductUncheckedCreateNestedManyWithoutCostCurrencyInput;
    saleProducts?: Prisma.ProductUncheckedCreateNestedManyWithoutSaleCurrencyInput;
};
export type CurrencyCreateOrConnectWithoutWholesaleProductsInput = {
    where: Prisma.CurrencyWhereUniqueInput;
    create: Prisma.XOR<Prisma.CurrencyCreateWithoutWholesaleProductsInput, Prisma.CurrencyUncheckedCreateWithoutWholesaleProductsInput>;
};
export type CurrencyUpsertWithoutCostProductsInput = {
    update: Prisma.XOR<Prisma.CurrencyUpdateWithoutCostProductsInput, Prisma.CurrencyUncheckedUpdateWithoutCostProductsInput>;
    create: Prisma.XOR<Prisma.CurrencyCreateWithoutCostProductsInput, Prisma.CurrencyUncheckedCreateWithoutCostProductsInput>;
    where?: Prisma.CurrencyWhereInput;
};
export type CurrencyUpdateToOneWithWhereWithoutCostProductsInput = {
    where?: Prisma.CurrencyWhereInput;
    data: Prisma.XOR<Prisma.CurrencyUpdateWithoutCostProductsInput, Prisma.CurrencyUncheckedUpdateWithoutCostProductsInput>;
};
export type CurrencyUpdateWithoutCostProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    exchangeRate?: Prisma.IntFieldUpdateOperationsInput | number;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    saleProducts?: Prisma.ProductUpdateManyWithoutSaleCurrencyNestedInput;
    wholesaleProducts?: Prisma.ProductUpdateManyWithoutWholesaleCurrencyNestedInput;
};
export type CurrencyUncheckedUpdateWithoutCostProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    exchangeRate?: Prisma.IntFieldUpdateOperationsInput | number;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    saleProducts?: Prisma.ProductUncheckedUpdateManyWithoutSaleCurrencyNestedInput;
    wholesaleProducts?: Prisma.ProductUncheckedUpdateManyWithoutWholesaleCurrencyNestedInput;
};
export type CurrencyUpsertWithoutSaleProductsInput = {
    update: Prisma.XOR<Prisma.CurrencyUpdateWithoutSaleProductsInput, Prisma.CurrencyUncheckedUpdateWithoutSaleProductsInput>;
    create: Prisma.XOR<Prisma.CurrencyCreateWithoutSaleProductsInput, Prisma.CurrencyUncheckedCreateWithoutSaleProductsInput>;
    where?: Prisma.CurrencyWhereInput;
};
export type CurrencyUpdateToOneWithWhereWithoutSaleProductsInput = {
    where?: Prisma.CurrencyWhereInput;
    data: Prisma.XOR<Prisma.CurrencyUpdateWithoutSaleProductsInput, Prisma.CurrencyUncheckedUpdateWithoutSaleProductsInput>;
};
export type CurrencyUpdateWithoutSaleProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    exchangeRate?: Prisma.IntFieldUpdateOperationsInput | number;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    costProducts?: Prisma.ProductUpdateManyWithoutCostCurrencyNestedInput;
    wholesaleProducts?: Prisma.ProductUpdateManyWithoutWholesaleCurrencyNestedInput;
};
export type CurrencyUncheckedUpdateWithoutSaleProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    exchangeRate?: Prisma.IntFieldUpdateOperationsInput | number;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    costProducts?: Prisma.ProductUncheckedUpdateManyWithoutCostCurrencyNestedInput;
    wholesaleProducts?: Prisma.ProductUncheckedUpdateManyWithoutWholesaleCurrencyNestedInput;
};
export type CurrencyUpsertWithoutWholesaleProductsInput = {
    update: Prisma.XOR<Prisma.CurrencyUpdateWithoutWholesaleProductsInput, Prisma.CurrencyUncheckedUpdateWithoutWholesaleProductsInput>;
    create: Prisma.XOR<Prisma.CurrencyCreateWithoutWholesaleProductsInput, Prisma.CurrencyUncheckedCreateWithoutWholesaleProductsInput>;
    where?: Prisma.CurrencyWhereInput;
};
export type CurrencyUpdateToOneWithWhereWithoutWholesaleProductsInput = {
    where?: Prisma.CurrencyWhereInput;
    data: Prisma.XOR<Prisma.CurrencyUpdateWithoutWholesaleProductsInput, Prisma.CurrencyUncheckedUpdateWithoutWholesaleProductsInput>;
};
export type CurrencyUpdateWithoutWholesaleProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    exchangeRate?: Prisma.IntFieldUpdateOperationsInput | number;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    costProducts?: Prisma.ProductUpdateManyWithoutCostCurrencyNestedInput;
    saleProducts?: Prisma.ProductUpdateManyWithoutSaleCurrencyNestedInput;
};
export type CurrencyUncheckedUpdateWithoutWholesaleProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    exchangeRate?: Prisma.IntFieldUpdateOperationsInput | number;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    costProducts?: Prisma.ProductUncheckedUpdateManyWithoutCostCurrencyNestedInput;
    saleProducts?: Prisma.ProductUncheckedUpdateManyWithoutSaleCurrencyNestedInput;
};
export type CurrencyCountOutputType = {
    costProducts: number;
    saleProducts: number;
    wholesaleProducts: number;
};
export type CurrencyCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    costProducts?: boolean | CurrencyCountOutputTypeCountCostProductsArgs;
    saleProducts?: boolean | CurrencyCountOutputTypeCountSaleProductsArgs;
    wholesaleProducts?: boolean | CurrencyCountOutputTypeCountWholesaleProductsArgs;
};
export type CurrencyCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencyCountOutputTypeSelect<ExtArgs> | null;
};
export type CurrencyCountOutputTypeCountCostProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
};
export type CurrencyCountOutputTypeCountSaleProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
};
export type CurrencyCountOutputTypeCountWholesaleProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
};
export type CurrencySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    symbol?: boolean;
    exchangeRate?: boolean;
    isDefault?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    costProducts?: boolean | Prisma.Currency$costProductsArgs<ExtArgs>;
    saleProducts?: boolean | Prisma.Currency$saleProductsArgs<ExtArgs>;
    wholesaleProducts?: boolean | Prisma.Currency$wholesaleProductsArgs<ExtArgs>;
    _count?: boolean | Prisma.CurrencyCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["currency"]>;
export type CurrencySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    symbol?: boolean;
    exchangeRate?: boolean;
    isDefault?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["currency"]>;
export type CurrencySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    symbol?: boolean;
    exchangeRate?: boolean;
    isDefault?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["currency"]>;
export type CurrencySelectScalar = {
    id?: boolean;
    name?: boolean;
    symbol?: boolean;
    exchangeRate?: boolean;
    isDefault?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CurrencyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "symbol" | "exchangeRate" | "isDefault" | "createdAt" | "updatedAt", ExtArgs["result"]["currency"]>;
export type CurrencyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    costProducts?: boolean | Prisma.Currency$costProductsArgs<ExtArgs>;
    saleProducts?: boolean | Prisma.Currency$saleProductsArgs<ExtArgs>;
    wholesaleProducts?: boolean | Prisma.Currency$wholesaleProductsArgs<ExtArgs>;
    _count?: boolean | Prisma.CurrencyCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CurrencyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CurrencyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CurrencyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Currency";
    objects: {
        costProducts: Prisma.$ProductPayload<ExtArgs>[];
        saleProducts: Prisma.$ProductPayload<ExtArgs>[];
        wholesaleProducts: Prisma.$ProductPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        symbol: string;
        exchangeRate: number;
        isDefault: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["currency"]>;
    composites: {};
};
export type CurrencyGetPayload<S extends boolean | null | undefined | CurrencyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CurrencyPayload, S>;
export type CurrencyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CurrencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CurrencyCountAggregateInputType | true;
};
export interface CurrencyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Currency'];
        meta: {
            name: 'Currency';
        };
    };
    findUnique<T extends CurrencyFindUniqueArgs>(args: Prisma.SelectSubset<T, CurrencyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CurrencyClient<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CurrencyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CurrencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CurrencyClient<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CurrencyFindFirstArgs>(args?: Prisma.SelectSubset<T, CurrencyFindFirstArgs<ExtArgs>>): Prisma.Prisma__CurrencyClient<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CurrencyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CurrencyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CurrencyClient<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CurrencyFindManyArgs>(args?: Prisma.SelectSubset<T, CurrencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CurrencyCreateArgs>(args: Prisma.SelectSubset<T, CurrencyCreateArgs<ExtArgs>>): Prisma.Prisma__CurrencyClient<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CurrencyCreateManyArgs>(args?: Prisma.SelectSubset<T, CurrencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CurrencyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CurrencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CurrencyDeleteArgs>(args: Prisma.SelectSubset<T, CurrencyDeleteArgs<ExtArgs>>): Prisma.Prisma__CurrencyClient<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CurrencyUpdateArgs>(args: Prisma.SelectSubset<T, CurrencyUpdateArgs<ExtArgs>>): Prisma.Prisma__CurrencyClient<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CurrencyDeleteManyArgs>(args?: Prisma.SelectSubset<T, CurrencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CurrencyUpdateManyArgs>(args: Prisma.SelectSubset<T, CurrencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CurrencyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CurrencyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CurrencyUpsertArgs>(args: Prisma.SelectSubset<T, CurrencyUpsertArgs<ExtArgs>>): Prisma.Prisma__CurrencyClient<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CurrencyCountArgs>(args?: Prisma.Subset<T, CurrencyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CurrencyCountAggregateOutputType> : number>;
    aggregate<T extends CurrencyAggregateArgs>(args: Prisma.Subset<T, CurrencyAggregateArgs>): Prisma.PrismaPromise<GetCurrencyAggregateType<T>>;
    groupBy<T extends CurrencyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CurrencyGroupByArgs['orderBy'];
    } : {
        orderBy?: CurrencyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CurrencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CurrencyFieldRefs;
}
export interface Prisma__CurrencyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    costProducts<T extends Prisma.Currency$costProductsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Currency$costProductsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    saleProducts<T extends Prisma.Currency$saleProductsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Currency$saleProductsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wholesaleProducts<T extends Prisma.Currency$wholesaleProductsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Currency$wholesaleProductsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CurrencyFieldRefs {
    readonly id: Prisma.FieldRef<"Currency", 'String'>;
    readonly name: Prisma.FieldRef<"Currency", 'String'>;
    readonly symbol: Prisma.FieldRef<"Currency", 'String'>;
    readonly exchangeRate: Prisma.FieldRef<"Currency", 'Int'>;
    readonly isDefault: Prisma.FieldRef<"Currency", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Currency", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Currency", 'DateTime'>;
}
export type CurrencyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelect<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    include?: Prisma.CurrencyInclude<ExtArgs> | null;
    where: Prisma.CurrencyWhereUniqueInput;
};
export type CurrencyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelect<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    include?: Prisma.CurrencyInclude<ExtArgs> | null;
    where: Prisma.CurrencyWhereUniqueInput;
};
export type CurrencyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelect<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    include?: Prisma.CurrencyInclude<ExtArgs> | null;
    where?: Prisma.CurrencyWhereInput;
    orderBy?: Prisma.CurrencyOrderByWithRelationInput | Prisma.CurrencyOrderByWithRelationInput[];
    cursor?: Prisma.CurrencyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CurrencyScalarFieldEnum | Prisma.CurrencyScalarFieldEnum[];
};
export type CurrencyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelect<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    include?: Prisma.CurrencyInclude<ExtArgs> | null;
    where?: Prisma.CurrencyWhereInput;
    orderBy?: Prisma.CurrencyOrderByWithRelationInput | Prisma.CurrencyOrderByWithRelationInput[];
    cursor?: Prisma.CurrencyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CurrencyScalarFieldEnum | Prisma.CurrencyScalarFieldEnum[];
};
export type CurrencyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelect<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    include?: Prisma.CurrencyInclude<ExtArgs> | null;
    where?: Prisma.CurrencyWhereInput;
    orderBy?: Prisma.CurrencyOrderByWithRelationInput | Prisma.CurrencyOrderByWithRelationInput[];
    cursor?: Prisma.CurrencyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CurrencyScalarFieldEnum | Prisma.CurrencyScalarFieldEnum[];
};
export type CurrencyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelect<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    include?: Prisma.CurrencyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CurrencyCreateInput, Prisma.CurrencyUncheckedCreateInput>;
};
export type CurrencyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CurrencyCreateManyInput | Prisma.CurrencyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CurrencyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    data: Prisma.CurrencyCreateManyInput | Prisma.CurrencyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CurrencyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelect<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    include?: Prisma.CurrencyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CurrencyUpdateInput, Prisma.CurrencyUncheckedUpdateInput>;
    where: Prisma.CurrencyWhereUniqueInput;
};
export type CurrencyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CurrencyUpdateManyMutationInput, Prisma.CurrencyUncheckedUpdateManyInput>;
    where?: Prisma.CurrencyWhereInput;
    limit?: number;
};
export type CurrencyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CurrencyUpdateManyMutationInput, Prisma.CurrencyUncheckedUpdateManyInput>;
    where?: Prisma.CurrencyWhereInput;
    limit?: number;
};
export type CurrencyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelect<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    include?: Prisma.CurrencyInclude<ExtArgs> | null;
    where: Prisma.CurrencyWhereUniqueInput;
    create: Prisma.XOR<Prisma.CurrencyCreateInput, Prisma.CurrencyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CurrencyUpdateInput, Prisma.CurrencyUncheckedUpdateInput>;
};
export type CurrencyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelect<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    include?: Prisma.CurrencyInclude<ExtArgs> | null;
    where: Prisma.CurrencyWhereUniqueInput;
};
export type CurrencyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CurrencyWhereInput;
    limit?: number;
};
export type Currency$costProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type Currency$saleProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type Currency$wholesaleProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type CurrencyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelect<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    include?: Prisma.CurrencyInclude<ExtArgs> | null;
};
