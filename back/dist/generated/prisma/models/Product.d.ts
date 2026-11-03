import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProductModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductPayload>;
export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
export type ProductAvgAggregateOutputType = {
    quantity: runtime.Decimal | null;
    costPrice: runtime.Decimal | null;
    salePrice: runtime.Decimal | null;
    wholesalePrice: runtime.Decimal | null;
};
export type ProductSumAggregateOutputType = {
    quantity: runtime.Decimal | null;
    costPrice: runtime.Decimal | null;
    salePrice: runtime.Decimal | null;
    wholesalePrice: runtime.Decimal | null;
};
export type ProductMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    quantity: runtime.Decimal | null;
    costPrice: runtime.Decimal | null;
    costCurrencyId: string | null;
    salePrice: runtime.Decimal | null;
    saleCurrencyId: string | null;
    wholesalePrice: runtime.Decimal | null;
    wholesaleCurrencyId: string | null;
    lastSoldAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type ProductMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    quantity: runtime.Decimal | null;
    costPrice: runtime.Decimal | null;
    costCurrencyId: string | null;
    salePrice: runtime.Decimal | null;
    saleCurrencyId: string | null;
    wholesalePrice: runtime.Decimal | null;
    wholesaleCurrencyId: string | null;
    lastSoldAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type ProductCountAggregateOutputType = {
    id: number;
    name: number;
    quantity: number;
    costPrice: number;
    costCurrencyId: number;
    salePrice: number;
    saleCurrencyId: number;
    wholesalePrice: number;
    wholesaleCurrencyId: number;
    lastSoldAt: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
};
export type ProductAvgAggregateInputType = {
    quantity?: true;
    costPrice?: true;
    salePrice?: true;
    wholesalePrice?: true;
};
export type ProductSumAggregateInputType = {
    quantity?: true;
    costPrice?: true;
    salePrice?: true;
    wholesalePrice?: true;
};
export type ProductMinAggregateInputType = {
    id?: true;
    name?: true;
    quantity?: true;
    costPrice?: true;
    costCurrencyId?: true;
    salePrice?: true;
    saleCurrencyId?: true;
    wholesalePrice?: true;
    wholesaleCurrencyId?: true;
    lastSoldAt?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type ProductMaxAggregateInputType = {
    id?: true;
    name?: true;
    quantity?: true;
    costPrice?: true;
    costCurrencyId?: true;
    salePrice?: true;
    saleCurrencyId?: true;
    wholesalePrice?: true;
    wholesaleCurrencyId?: true;
    lastSoldAt?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type ProductCountAggregateInputType = {
    id?: true;
    name?: true;
    quantity?: true;
    costPrice?: true;
    costCurrencyId?: true;
    salePrice?: true;
    saleCurrencyId?: true;
    wholesalePrice?: true;
    wholesaleCurrencyId?: true;
    lastSoldAt?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type ProductAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductCountAggregateInputType;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduct[P]> : Prisma.GetScalarType<T[P], AggregateProduct[P]>;
};
export type ProductGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithAggregationInput | Prisma.ProductOrderByWithAggregationInput[];
    by: Prisma.ProductScalarFieldEnum[] | Prisma.ProductScalarFieldEnum;
    having?: Prisma.ProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInputType | true;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type ProductGroupByOutputType = {
    id: string;
    name: string;
    quantity: runtime.Decimal;
    costPrice: runtime.Decimal;
    costCurrencyId: string | null;
    salePrice: runtime.Decimal;
    saleCurrencyId: string | null;
    wholesalePrice: runtime.Decimal;
    wholesaleCurrencyId: string | null;
    lastSoldAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
export type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]>;
}>>;
export type ProductWhereInput = {
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    id?: Prisma.StringFilter<"Product"> | string;
    name?: Prisma.StringFilter<"Product"> | string;
    quantity?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costCurrencyId?: Prisma.StringNullableFilter<"Product"> | string | null;
    salePrice?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saleCurrencyId?: Prisma.StringNullableFilter<"Product"> | string | null;
    wholesalePrice?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesaleCurrencyId?: Prisma.StringNullableFilter<"Product"> | string | null;
    lastSoldAt?: Prisma.DateTimeNullableFilter<"Product"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Product"> | Date | string | null;
    costCurrency?: Prisma.XOR<Prisma.CurrencyNullableScalarRelationFilter, Prisma.CurrencyWhereInput> | null;
    saleCurrency?: Prisma.XOR<Prisma.CurrencyNullableScalarRelationFilter, Prisma.CurrencyWhereInput> | null;
    wholesaleCurrency?: Prisma.XOR<Prisma.CurrencyNullableScalarRelationFilter, Prisma.CurrencyWhereInput> | null;
};
export type ProductOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    costPrice?: Prisma.SortOrder;
    costCurrencyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    salePrice?: Prisma.SortOrder;
    saleCurrencyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    wholesalePrice?: Prisma.SortOrder;
    wholesaleCurrencyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastSoldAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    costCurrency?: Prisma.CurrencyOrderByWithRelationInput;
    saleCurrency?: Prisma.CurrencyOrderByWithRelationInput;
    wholesaleCurrency?: Prisma.CurrencyOrderByWithRelationInput;
};
export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    name?: Prisma.StringFilter<"Product"> | string;
    quantity?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costCurrencyId?: Prisma.StringNullableFilter<"Product"> | string | null;
    salePrice?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saleCurrencyId?: Prisma.StringNullableFilter<"Product"> | string | null;
    wholesalePrice?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesaleCurrencyId?: Prisma.StringNullableFilter<"Product"> | string | null;
    lastSoldAt?: Prisma.DateTimeNullableFilter<"Product"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Product"> | Date | string | null;
    costCurrency?: Prisma.XOR<Prisma.CurrencyNullableScalarRelationFilter, Prisma.CurrencyWhereInput> | null;
    saleCurrency?: Prisma.XOR<Prisma.CurrencyNullableScalarRelationFilter, Prisma.CurrencyWhereInput> | null;
    wholesaleCurrency?: Prisma.XOR<Prisma.CurrencyNullableScalarRelationFilter, Prisma.CurrencyWhereInput> | null;
}, "id">;
export type ProductOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    costPrice?: Prisma.SortOrder;
    costCurrencyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    salePrice?: Prisma.SortOrder;
    saleCurrencyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    wholesalePrice?: Prisma.SortOrder;
    wholesaleCurrencyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastSoldAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ProductCountOrderByAggregateInput;
    _avg?: Prisma.ProductAvgOrderByAggregateInput;
    _max?: Prisma.ProductMaxOrderByAggregateInput;
    _min?: Prisma.ProductMinOrderByAggregateInput;
    _sum?: Prisma.ProductSumOrderByAggregateInput;
};
export type ProductScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    quantity?: Prisma.DecimalWithAggregatesFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice?: Prisma.DecimalWithAggregatesFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costCurrencyId?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    salePrice?: Prisma.DecimalWithAggregatesFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saleCurrencyId?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    wholesalePrice?: Prisma.DecimalWithAggregatesFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesaleCurrencyId?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    lastSoldAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Product"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null;
};
export type ProductCreateInput = {
    id?: string;
    name: string;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesalePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    lastSoldAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    costCurrency?: Prisma.CurrencyCreateNestedOneWithoutCostProductsInput;
    saleCurrency?: Prisma.CurrencyCreateNestedOneWithoutSaleProductsInput;
    wholesaleCurrency?: Prisma.CurrencyCreateNestedOneWithoutWholesaleProductsInput;
};
export type ProductUncheckedCreateInput = {
    id?: string;
    name: string;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    costCurrencyId?: string | null;
    salePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    saleCurrencyId?: string | null;
    wholesalePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesaleCurrencyId?: string | null;
    lastSoldAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type ProductUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesalePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lastSoldAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    costCurrency?: Prisma.CurrencyUpdateOneWithoutCostProductsNestedInput;
    saleCurrency?: Prisma.CurrencyUpdateOneWithoutSaleProductsNestedInput;
    wholesaleCurrency?: Prisma.CurrencyUpdateOneWithoutWholesaleProductsNestedInput;
};
export type ProductUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costCurrencyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saleCurrencyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wholesalePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesaleCurrencyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSoldAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ProductCreateManyInput = {
    id?: string;
    name: string;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    costCurrencyId?: string | null;
    salePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    saleCurrencyId?: string | null;
    wholesalePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesaleCurrencyId?: string | null;
    lastSoldAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type ProductUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesalePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lastSoldAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ProductUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costCurrencyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saleCurrencyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wholesalePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesaleCurrencyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSoldAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ProductListRelationFilter = {
    every?: Prisma.ProductWhereInput;
    some?: Prisma.ProductWhereInput;
    none?: Prisma.ProductWhereInput;
};
export type ProductOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    costPrice?: Prisma.SortOrder;
    costCurrencyId?: Prisma.SortOrder;
    salePrice?: Prisma.SortOrder;
    saleCurrencyId?: Prisma.SortOrder;
    wholesalePrice?: Prisma.SortOrder;
    wholesaleCurrencyId?: Prisma.SortOrder;
    lastSoldAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type ProductAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    costPrice?: Prisma.SortOrder;
    salePrice?: Prisma.SortOrder;
    wholesalePrice?: Prisma.SortOrder;
};
export type ProductMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    costPrice?: Prisma.SortOrder;
    costCurrencyId?: Prisma.SortOrder;
    salePrice?: Prisma.SortOrder;
    saleCurrencyId?: Prisma.SortOrder;
    wholesalePrice?: Prisma.SortOrder;
    wholesaleCurrencyId?: Prisma.SortOrder;
    lastSoldAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type ProductMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    costPrice?: Prisma.SortOrder;
    costCurrencyId?: Prisma.SortOrder;
    salePrice?: Prisma.SortOrder;
    saleCurrencyId?: Prisma.SortOrder;
    wholesalePrice?: Prisma.SortOrder;
    wholesaleCurrencyId?: Prisma.SortOrder;
    lastSoldAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type ProductSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    costPrice?: Prisma.SortOrder;
    salePrice?: Prisma.SortOrder;
    wholesalePrice?: Prisma.SortOrder;
};
export type ProductCreateNestedManyWithoutCostCurrencyInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCostCurrencyInput, Prisma.ProductUncheckedCreateWithoutCostCurrencyInput> | Prisma.ProductCreateWithoutCostCurrencyInput[] | Prisma.ProductUncheckedCreateWithoutCostCurrencyInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCostCurrencyInput | Prisma.ProductCreateOrConnectWithoutCostCurrencyInput[];
    createMany?: Prisma.ProductCreateManyCostCurrencyInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductCreateNestedManyWithoutSaleCurrencyInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutSaleCurrencyInput, Prisma.ProductUncheckedCreateWithoutSaleCurrencyInput> | Prisma.ProductCreateWithoutSaleCurrencyInput[] | Prisma.ProductUncheckedCreateWithoutSaleCurrencyInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutSaleCurrencyInput | Prisma.ProductCreateOrConnectWithoutSaleCurrencyInput[];
    createMany?: Prisma.ProductCreateManySaleCurrencyInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductCreateNestedManyWithoutWholesaleCurrencyInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutWholesaleCurrencyInput, Prisma.ProductUncheckedCreateWithoutWholesaleCurrencyInput> | Prisma.ProductCreateWithoutWholesaleCurrencyInput[] | Prisma.ProductUncheckedCreateWithoutWholesaleCurrencyInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutWholesaleCurrencyInput | Prisma.ProductCreateOrConnectWithoutWholesaleCurrencyInput[];
    createMany?: Prisma.ProductCreateManyWholesaleCurrencyInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUncheckedCreateNestedManyWithoutCostCurrencyInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCostCurrencyInput, Prisma.ProductUncheckedCreateWithoutCostCurrencyInput> | Prisma.ProductCreateWithoutCostCurrencyInput[] | Prisma.ProductUncheckedCreateWithoutCostCurrencyInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCostCurrencyInput | Prisma.ProductCreateOrConnectWithoutCostCurrencyInput[];
    createMany?: Prisma.ProductCreateManyCostCurrencyInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUncheckedCreateNestedManyWithoutSaleCurrencyInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutSaleCurrencyInput, Prisma.ProductUncheckedCreateWithoutSaleCurrencyInput> | Prisma.ProductCreateWithoutSaleCurrencyInput[] | Prisma.ProductUncheckedCreateWithoutSaleCurrencyInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutSaleCurrencyInput | Prisma.ProductCreateOrConnectWithoutSaleCurrencyInput[];
    createMany?: Prisma.ProductCreateManySaleCurrencyInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUncheckedCreateNestedManyWithoutWholesaleCurrencyInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutWholesaleCurrencyInput, Prisma.ProductUncheckedCreateWithoutWholesaleCurrencyInput> | Prisma.ProductCreateWithoutWholesaleCurrencyInput[] | Prisma.ProductUncheckedCreateWithoutWholesaleCurrencyInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutWholesaleCurrencyInput | Prisma.ProductCreateOrConnectWithoutWholesaleCurrencyInput[];
    createMany?: Prisma.ProductCreateManyWholesaleCurrencyInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUpdateManyWithoutCostCurrencyNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCostCurrencyInput, Prisma.ProductUncheckedCreateWithoutCostCurrencyInput> | Prisma.ProductCreateWithoutCostCurrencyInput[] | Prisma.ProductUncheckedCreateWithoutCostCurrencyInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCostCurrencyInput | Prisma.ProductCreateOrConnectWithoutCostCurrencyInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutCostCurrencyInput | Prisma.ProductUpsertWithWhereUniqueWithoutCostCurrencyInput[];
    createMany?: Prisma.ProductCreateManyCostCurrencyInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutCostCurrencyInput | Prisma.ProductUpdateWithWhereUniqueWithoutCostCurrencyInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutCostCurrencyInput | Prisma.ProductUpdateManyWithWhereWithoutCostCurrencyInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductUpdateManyWithoutSaleCurrencyNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutSaleCurrencyInput, Prisma.ProductUncheckedCreateWithoutSaleCurrencyInput> | Prisma.ProductCreateWithoutSaleCurrencyInput[] | Prisma.ProductUncheckedCreateWithoutSaleCurrencyInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutSaleCurrencyInput | Prisma.ProductCreateOrConnectWithoutSaleCurrencyInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutSaleCurrencyInput | Prisma.ProductUpsertWithWhereUniqueWithoutSaleCurrencyInput[];
    createMany?: Prisma.ProductCreateManySaleCurrencyInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutSaleCurrencyInput | Prisma.ProductUpdateWithWhereUniqueWithoutSaleCurrencyInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutSaleCurrencyInput | Prisma.ProductUpdateManyWithWhereWithoutSaleCurrencyInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductUpdateManyWithoutWholesaleCurrencyNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutWholesaleCurrencyInput, Prisma.ProductUncheckedCreateWithoutWholesaleCurrencyInput> | Prisma.ProductCreateWithoutWholesaleCurrencyInput[] | Prisma.ProductUncheckedCreateWithoutWholesaleCurrencyInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutWholesaleCurrencyInput | Prisma.ProductCreateOrConnectWithoutWholesaleCurrencyInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutWholesaleCurrencyInput | Prisma.ProductUpsertWithWhereUniqueWithoutWholesaleCurrencyInput[];
    createMany?: Prisma.ProductCreateManyWholesaleCurrencyInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutWholesaleCurrencyInput | Prisma.ProductUpdateWithWhereUniqueWithoutWholesaleCurrencyInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutWholesaleCurrencyInput | Prisma.ProductUpdateManyWithWhereWithoutWholesaleCurrencyInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductUncheckedUpdateManyWithoutCostCurrencyNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCostCurrencyInput, Prisma.ProductUncheckedCreateWithoutCostCurrencyInput> | Prisma.ProductCreateWithoutCostCurrencyInput[] | Prisma.ProductUncheckedCreateWithoutCostCurrencyInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCostCurrencyInput | Prisma.ProductCreateOrConnectWithoutCostCurrencyInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutCostCurrencyInput | Prisma.ProductUpsertWithWhereUniqueWithoutCostCurrencyInput[];
    createMany?: Prisma.ProductCreateManyCostCurrencyInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutCostCurrencyInput | Prisma.ProductUpdateWithWhereUniqueWithoutCostCurrencyInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutCostCurrencyInput | Prisma.ProductUpdateManyWithWhereWithoutCostCurrencyInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductUncheckedUpdateManyWithoutSaleCurrencyNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutSaleCurrencyInput, Prisma.ProductUncheckedCreateWithoutSaleCurrencyInput> | Prisma.ProductCreateWithoutSaleCurrencyInput[] | Prisma.ProductUncheckedCreateWithoutSaleCurrencyInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutSaleCurrencyInput | Prisma.ProductCreateOrConnectWithoutSaleCurrencyInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutSaleCurrencyInput | Prisma.ProductUpsertWithWhereUniqueWithoutSaleCurrencyInput[];
    createMany?: Prisma.ProductCreateManySaleCurrencyInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutSaleCurrencyInput | Prisma.ProductUpdateWithWhereUniqueWithoutSaleCurrencyInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutSaleCurrencyInput | Prisma.ProductUpdateManyWithWhereWithoutSaleCurrencyInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductUncheckedUpdateManyWithoutWholesaleCurrencyNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutWholesaleCurrencyInput, Prisma.ProductUncheckedCreateWithoutWholesaleCurrencyInput> | Prisma.ProductCreateWithoutWholesaleCurrencyInput[] | Prisma.ProductUncheckedCreateWithoutWholesaleCurrencyInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutWholesaleCurrencyInput | Prisma.ProductCreateOrConnectWithoutWholesaleCurrencyInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutWholesaleCurrencyInput | Prisma.ProductUpsertWithWhereUniqueWithoutWholesaleCurrencyInput[];
    createMany?: Prisma.ProductCreateManyWholesaleCurrencyInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutWholesaleCurrencyInput | Prisma.ProductUpdateWithWhereUniqueWithoutWholesaleCurrencyInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutWholesaleCurrencyInput | Prisma.ProductUpdateManyWithWhereWithoutWholesaleCurrencyInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type ProductCreateWithoutCostCurrencyInput = {
    id?: string;
    name: string;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesalePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    lastSoldAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    saleCurrency?: Prisma.CurrencyCreateNestedOneWithoutSaleProductsInput;
    wholesaleCurrency?: Prisma.CurrencyCreateNestedOneWithoutWholesaleProductsInput;
};
export type ProductUncheckedCreateWithoutCostCurrencyInput = {
    id?: string;
    name: string;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    saleCurrencyId?: string | null;
    wholesalePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesaleCurrencyId?: string | null;
    lastSoldAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type ProductCreateOrConnectWithoutCostCurrencyInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutCostCurrencyInput, Prisma.ProductUncheckedCreateWithoutCostCurrencyInput>;
};
export type ProductCreateManyCostCurrencyInputEnvelope = {
    data: Prisma.ProductCreateManyCostCurrencyInput | Prisma.ProductCreateManyCostCurrencyInput[];
    skipDuplicates?: boolean;
};
export type ProductCreateWithoutSaleCurrencyInput = {
    id?: string;
    name: string;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesalePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    lastSoldAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    costCurrency?: Prisma.CurrencyCreateNestedOneWithoutCostProductsInput;
    wholesaleCurrency?: Prisma.CurrencyCreateNestedOneWithoutWholesaleProductsInput;
};
export type ProductUncheckedCreateWithoutSaleCurrencyInput = {
    id?: string;
    name: string;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    costCurrencyId?: string | null;
    salePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesalePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesaleCurrencyId?: string | null;
    lastSoldAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type ProductCreateOrConnectWithoutSaleCurrencyInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutSaleCurrencyInput, Prisma.ProductUncheckedCreateWithoutSaleCurrencyInput>;
};
export type ProductCreateManySaleCurrencyInputEnvelope = {
    data: Prisma.ProductCreateManySaleCurrencyInput | Prisma.ProductCreateManySaleCurrencyInput[];
    skipDuplicates?: boolean;
};
export type ProductCreateWithoutWholesaleCurrencyInput = {
    id?: string;
    name: string;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesalePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    lastSoldAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    costCurrency?: Prisma.CurrencyCreateNestedOneWithoutCostProductsInput;
    saleCurrency?: Prisma.CurrencyCreateNestedOneWithoutSaleProductsInput;
};
export type ProductUncheckedCreateWithoutWholesaleCurrencyInput = {
    id?: string;
    name: string;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    costCurrencyId?: string | null;
    salePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    saleCurrencyId?: string | null;
    wholesalePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    lastSoldAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type ProductCreateOrConnectWithoutWholesaleCurrencyInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutWholesaleCurrencyInput, Prisma.ProductUncheckedCreateWithoutWholesaleCurrencyInput>;
};
export type ProductCreateManyWholesaleCurrencyInputEnvelope = {
    data: Prisma.ProductCreateManyWholesaleCurrencyInput | Prisma.ProductCreateManyWholesaleCurrencyInput[];
    skipDuplicates?: boolean;
};
export type ProductUpsertWithWhereUniqueWithoutCostCurrencyInput = {
    where: Prisma.ProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductUpdateWithoutCostCurrencyInput, Prisma.ProductUncheckedUpdateWithoutCostCurrencyInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutCostCurrencyInput, Prisma.ProductUncheckedCreateWithoutCostCurrencyInput>;
};
export type ProductUpdateWithWhereUniqueWithoutCostCurrencyInput = {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutCostCurrencyInput, Prisma.ProductUncheckedUpdateWithoutCostCurrencyInput>;
};
export type ProductUpdateManyWithWhereWithoutCostCurrencyInput = {
    where: Prisma.ProductScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyWithoutCostCurrencyInput>;
};
export type ProductScalarWhereInput = {
    AND?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
    OR?: Prisma.ProductScalarWhereInput[];
    NOT?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
    id?: Prisma.StringFilter<"Product"> | string;
    name?: Prisma.StringFilter<"Product"> | string;
    quantity?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costCurrencyId?: Prisma.StringNullableFilter<"Product"> | string | null;
    salePrice?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saleCurrencyId?: Prisma.StringNullableFilter<"Product"> | string | null;
    wholesalePrice?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesaleCurrencyId?: Prisma.StringNullableFilter<"Product"> | string | null;
    lastSoldAt?: Prisma.DateTimeNullableFilter<"Product"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Product"> | Date | string | null;
};
export type ProductUpsertWithWhereUniqueWithoutSaleCurrencyInput = {
    where: Prisma.ProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductUpdateWithoutSaleCurrencyInput, Prisma.ProductUncheckedUpdateWithoutSaleCurrencyInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutSaleCurrencyInput, Prisma.ProductUncheckedCreateWithoutSaleCurrencyInput>;
};
export type ProductUpdateWithWhereUniqueWithoutSaleCurrencyInput = {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutSaleCurrencyInput, Prisma.ProductUncheckedUpdateWithoutSaleCurrencyInput>;
};
export type ProductUpdateManyWithWhereWithoutSaleCurrencyInput = {
    where: Prisma.ProductScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyWithoutSaleCurrencyInput>;
};
export type ProductUpsertWithWhereUniqueWithoutWholesaleCurrencyInput = {
    where: Prisma.ProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductUpdateWithoutWholesaleCurrencyInput, Prisma.ProductUncheckedUpdateWithoutWholesaleCurrencyInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutWholesaleCurrencyInput, Prisma.ProductUncheckedCreateWithoutWholesaleCurrencyInput>;
};
export type ProductUpdateWithWhereUniqueWithoutWholesaleCurrencyInput = {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutWholesaleCurrencyInput, Prisma.ProductUncheckedUpdateWithoutWholesaleCurrencyInput>;
};
export type ProductUpdateManyWithWhereWithoutWholesaleCurrencyInput = {
    where: Prisma.ProductScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyWithoutWholesaleCurrencyInput>;
};
export type ProductCreateManyCostCurrencyInput = {
    id?: string;
    name: string;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    saleCurrencyId?: string | null;
    wholesalePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesaleCurrencyId?: string | null;
    lastSoldAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type ProductCreateManySaleCurrencyInput = {
    id?: string;
    name: string;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    costCurrencyId?: string | null;
    salePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesalePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesaleCurrencyId?: string | null;
    lastSoldAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type ProductCreateManyWholesaleCurrencyInput = {
    id?: string;
    name: string;
    quantity?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    costCurrencyId?: string | null;
    salePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    saleCurrencyId?: string | null;
    wholesalePrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    lastSoldAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type ProductUpdateWithoutCostCurrencyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesalePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lastSoldAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    saleCurrency?: Prisma.CurrencyUpdateOneWithoutSaleProductsNestedInput;
    wholesaleCurrency?: Prisma.CurrencyUpdateOneWithoutWholesaleProductsNestedInput;
};
export type ProductUncheckedUpdateWithoutCostCurrencyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saleCurrencyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wholesalePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesaleCurrencyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSoldAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ProductUncheckedUpdateManyWithoutCostCurrencyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saleCurrencyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wholesalePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesaleCurrencyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSoldAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ProductUpdateWithoutSaleCurrencyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesalePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lastSoldAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    costCurrency?: Prisma.CurrencyUpdateOneWithoutCostProductsNestedInput;
    wholesaleCurrency?: Prisma.CurrencyUpdateOneWithoutWholesaleProductsNestedInput;
};
export type ProductUncheckedUpdateWithoutSaleCurrencyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costCurrencyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesalePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesaleCurrencyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSoldAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ProductUncheckedUpdateManyWithoutSaleCurrencyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costCurrencyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesalePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesaleCurrencyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSoldAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ProductUpdateWithoutWholesaleCurrencyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    salePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    wholesalePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lastSoldAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    costCurrency?: Prisma.CurrencyUpdateOneWithoutCostProductsNestedInput;
    saleCurrency?: Prisma.CurrencyUpdateOneWithoutSaleProductsNestedInput;
};
export type ProductUncheckedUpdateWithoutWholesaleCurrencyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costCurrencyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saleCurrencyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wholesalePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lastSoldAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ProductUncheckedUpdateManyWithoutWholesaleCurrencyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    costCurrencyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saleCurrencyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wholesalePrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lastSoldAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ProductSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    quantity?: boolean;
    costPrice?: boolean;
    costCurrencyId?: boolean;
    salePrice?: boolean;
    saleCurrencyId?: boolean;
    wholesalePrice?: boolean;
    wholesaleCurrencyId?: boolean;
    lastSoldAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    costCurrency?: boolean | Prisma.Product$costCurrencyArgs<ExtArgs>;
    saleCurrency?: boolean | Prisma.Product$saleCurrencyArgs<ExtArgs>;
    wholesaleCurrency?: boolean | Prisma.Product$wholesaleCurrencyArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    quantity?: boolean;
    costPrice?: boolean;
    costCurrencyId?: boolean;
    salePrice?: boolean;
    saleCurrencyId?: boolean;
    wholesalePrice?: boolean;
    wholesaleCurrencyId?: boolean;
    lastSoldAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    costCurrency?: boolean | Prisma.Product$costCurrencyArgs<ExtArgs>;
    saleCurrency?: boolean | Prisma.Product$saleCurrencyArgs<ExtArgs>;
    wholesaleCurrency?: boolean | Prisma.Product$wholesaleCurrencyArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    quantity?: boolean;
    costPrice?: boolean;
    costCurrencyId?: boolean;
    salePrice?: boolean;
    saleCurrencyId?: boolean;
    wholesalePrice?: boolean;
    wholesaleCurrencyId?: boolean;
    lastSoldAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    costCurrency?: boolean | Prisma.Product$costCurrencyArgs<ExtArgs>;
    saleCurrency?: boolean | Prisma.Product$saleCurrencyArgs<ExtArgs>;
    wholesaleCurrency?: boolean | Prisma.Product$wholesaleCurrencyArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectScalar = {
    id?: boolean;
    name?: boolean;
    quantity?: boolean;
    costPrice?: boolean;
    costCurrencyId?: boolean;
    salePrice?: boolean;
    saleCurrencyId?: boolean;
    wholesalePrice?: boolean;
    wholesaleCurrencyId?: boolean;
    lastSoldAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
};
export type ProductOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "quantity" | "costPrice" | "costCurrencyId" | "salePrice" | "saleCurrencyId" | "wholesalePrice" | "wholesaleCurrencyId" | "lastSoldAt" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["product"]>;
export type ProductInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    costCurrency?: boolean | Prisma.Product$costCurrencyArgs<ExtArgs>;
    saleCurrency?: boolean | Prisma.Product$saleCurrencyArgs<ExtArgs>;
    wholesaleCurrency?: boolean | Prisma.Product$wholesaleCurrencyArgs<ExtArgs>;
};
export type ProductIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    costCurrency?: boolean | Prisma.Product$costCurrencyArgs<ExtArgs>;
    saleCurrency?: boolean | Prisma.Product$saleCurrencyArgs<ExtArgs>;
    wholesaleCurrency?: boolean | Prisma.Product$wholesaleCurrencyArgs<ExtArgs>;
};
export type ProductIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    costCurrency?: boolean | Prisma.Product$costCurrencyArgs<ExtArgs>;
    saleCurrency?: boolean | Prisma.Product$saleCurrencyArgs<ExtArgs>;
    wholesaleCurrency?: boolean | Prisma.Product$wholesaleCurrencyArgs<ExtArgs>;
};
export type $ProductPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Product";
    objects: {
        costCurrency: Prisma.$CurrencyPayload<ExtArgs> | null;
        saleCurrency: Prisma.$CurrencyPayload<ExtArgs> | null;
        wholesaleCurrency: Prisma.$CurrencyPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        quantity: runtime.Decimal;
        costPrice: runtime.Decimal;
        costCurrencyId: string | null;
        salePrice: runtime.Decimal;
        saleCurrencyId: string | null;
        wholesalePrice: runtime.Decimal;
        wholesaleCurrencyId: string | null;
        lastSoldAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["product"]>;
    composites: {};
};
export type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductPayload, S>;
export type ProductCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductCountAggregateInputType | true;
};
export interface ProductDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Product'];
        meta: {
            name: 'Product';
        };
    };
    findUnique<T extends ProductFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductFindManyArgs>(args?: Prisma.SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductCreateArgs>(args: Prisma.SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductDeleteArgs>(args: Prisma.SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductUpdateArgs>(args: Prisma.SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductUpsertArgs>(args: Prisma.SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductCountArgs>(args?: Prisma.Subset<T, ProductCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductCountAggregateOutputType> : number>;
    aggregate<T extends ProductAggregateArgs>(args: Prisma.Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>;
    groupBy<T extends ProductGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductFieldRefs;
}
export interface Prisma__ProductClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    costCurrency<T extends Prisma.Product$costCurrencyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$costCurrencyArgs<ExtArgs>>): Prisma.Prisma__CurrencyClient<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    saleCurrency<T extends Prisma.Product$saleCurrencyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$saleCurrencyArgs<ExtArgs>>): Prisma.Prisma__CurrencyClient<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    wholesaleCurrency<T extends Prisma.Product$wholesaleCurrencyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$wholesaleCurrencyArgs<ExtArgs>>): Prisma.Prisma__CurrencyClient<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductFieldRefs {
    readonly id: Prisma.FieldRef<"Product", 'String'>;
    readonly name: Prisma.FieldRef<"Product", 'String'>;
    readonly quantity: Prisma.FieldRef<"Product", 'Decimal'>;
    readonly costPrice: Prisma.FieldRef<"Product", 'Decimal'>;
    readonly costCurrencyId: Prisma.FieldRef<"Product", 'String'>;
    readonly salePrice: Prisma.FieldRef<"Product", 'Decimal'>;
    readonly saleCurrencyId: Prisma.FieldRef<"Product", 'String'>;
    readonly wholesalePrice: Prisma.FieldRef<"Product", 'Decimal'>;
    readonly wholesaleCurrencyId: Prisma.FieldRef<"Product", 'String'>;
    readonly lastSoldAt: Prisma.FieldRef<"Product", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Product", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Product", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"Product", 'DateTime'>;
}
export type ProductFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
};
export type ProductCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type ProductUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
    include?: Prisma.ProductIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
};
export type ProductDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type Product$costCurrencyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelect<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    include?: Prisma.CurrencyInclude<ExtArgs> | null;
    where?: Prisma.CurrencyWhereInput;
};
export type Product$saleCurrencyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelect<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    include?: Prisma.CurrencyInclude<ExtArgs> | null;
    where?: Prisma.CurrencyWhereInput;
};
export type Product$wholesaleCurrencyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelect<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    include?: Prisma.CurrencyInclude<ExtArgs> | null;
    where?: Prisma.CurrencyWhereInput;
};
export type ProductDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
};
