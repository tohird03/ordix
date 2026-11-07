import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ClientDebtModel = runtime.Types.Result.DefaultSelection<Prisma.$ClientDebtPayload>;
export type AggregateClientDebt = {
    _count: ClientDebtCountAggregateOutputType | null;
    _avg: ClientDebtAvgAggregateOutputType | null;
    _sum: ClientDebtSumAggregateOutputType | null;
    _min: ClientDebtMinAggregateOutputType | null;
    _max: ClientDebtMaxAggregateOutputType | null;
};
export type ClientDebtAvgAggregateOutputType = {
    amount: number | null;
};
export type ClientDebtSumAggregateOutputType = {
    amount: number | null;
};
export type ClientDebtMinAggregateOutputType = {
    id: string | null;
    clientId: string | null;
    currencyId: string | null;
    amount: number | null;
};
export type ClientDebtMaxAggregateOutputType = {
    id: string | null;
    clientId: string | null;
    currencyId: string | null;
    amount: number | null;
};
export type ClientDebtCountAggregateOutputType = {
    id: number;
    clientId: number;
    currencyId: number;
    amount: number;
    _all: number;
};
export type ClientDebtAvgAggregateInputType = {
    amount?: true;
};
export type ClientDebtSumAggregateInputType = {
    amount?: true;
};
export type ClientDebtMinAggregateInputType = {
    id?: true;
    clientId?: true;
    currencyId?: true;
    amount?: true;
};
export type ClientDebtMaxAggregateInputType = {
    id?: true;
    clientId?: true;
    currencyId?: true;
    amount?: true;
};
export type ClientDebtCountAggregateInputType = {
    id?: true;
    clientId?: true;
    currencyId?: true;
    amount?: true;
    _all?: true;
};
export type ClientDebtAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientDebtWhereInput;
    orderBy?: Prisma.ClientDebtOrderByWithRelationInput | Prisma.ClientDebtOrderByWithRelationInput[];
    cursor?: Prisma.ClientDebtWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClientDebtCountAggregateInputType;
    _avg?: ClientDebtAvgAggregateInputType;
    _sum?: ClientDebtSumAggregateInputType;
    _min?: ClientDebtMinAggregateInputType;
    _max?: ClientDebtMaxAggregateInputType;
};
export type GetClientDebtAggregateType<T extends ClientDebtAggregateArgs> = {
    [P in keyof T & keyof AggregateClientDebt]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClientDebt[P]> : Prisma.GetScalarType<T[P], AggregateClientDebt[P]>;
};
export type ClientDebtGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientDebtWhereInput;
    orderBy?: Prisma.ClientDebtOrderByWithAggregationInput | Prisma.ClientDebtOrderByWithAggregationInput[];
    by: Prisma.ClientDebtScalarFieldEnum[] | Prisma.ClientDebtScalarFieldEnum;
    having?: Prisma.ClientDebtScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClientDebtCountAggregateInputType | true;
    _avg?: ClientDebtAvgAggregateInputType;
    _sum?: ClientDebtSumAggregateInputType;
    _min?: ClientDebtMinAggregateInputType;
    _max?: ClientDebtMaxAggregateInputType;
};
export type ClientDebtGroupByOutputType = {
    id: string;
    clientId: string;
    currencyId: string;
    amount: number;
    _count: ClientDebtCountAggregateOutputType | null;
    _avg: ClientDebtAvgAggregateOutputType | null;
    _sum: ClientDebtSumAggregateOutputType | null;
    _min: ClientDebtMinAggregateOutputType | null;
    _max: ClientDebtMaxAggregateOutputType | null;
};
export type GetClientDebtGroupByPayload<T extends ClientDebtGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClientDebtGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClientDebtGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClientDebtGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClientDebtGroupByOutputType[P]>;
}>>;
export type ClientDebtWhereInput = {
    AND?: Prisma.ClientDebtWhereInput | Prisma.ClientDebtWhereInput[];
    OR?: Prisma.ClientDebtWhereInput[];
    NOT?: Prisma.ClientDebtWhereInput | Prisma.ClientDebtWhereInput[];
    id?: Prisma.StringFilter<"ClientDebt"> | string;
    clientId?: Prisma.StringFilter<"ClientDebt"> | string;
    currencyId?: Prisma.StringFilter<"ClientDebt"> | string;
    amount?: Prisma.IntFilter<"ClientDebt"> | number;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
    currency?: Prisma.XOR<Prisma.CurrencyScalarRelationFilter, Prisma.CurrencyWhereInput>;
};
export type ClientDebtOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    currencyId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    client?: Prisma.ClientOrderByWithRelationInput;
    currency?: Prisma.CurrencyOrderByWithRelationInput;
};
export type ClientDebtWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    clientId_currencyId?: Prisma.ClientDebtClientIdCurrencyIdCompoundUniqueInput;
    AND?: Prisma.ClientDebtWhereInput | Prisma.ClientDebtWhereInput[];
    OR?: Prisma.ClientDebtWhereInput[];
    NOT?: Prisma.ClientDebtWhereInput | Prisma.ClientDebtWhereInput[];
    clientId?: Prisma.StringFilter<"ClientDebt"> | string;
    currencyId?: Prisma.StringFilter<"ClientDebt"> | string;
    amount?: Prisma.IntFilter<"ClientDebt"> | number;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
    currency?: Prisma.XOR<Prisma.CurrencyScalarRelationFilter, Prisma.CurrencyWhereInput>;
}, "id" | "clientId_currencyId">;
export type ClientDebtOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    currencyId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    _count?: Prisma.ClientDebtCountOrderByAggregateInput;
    _avg?: Prisma.ClientDebtAvgOrderByAggregateInput;
    _max?: Prisma.ClientDebtMaxOrderByAggregateInput;
    _min?: Prisma.ClientDebtMinOrderByAggregateInput;
    _sum?: Prisma.ClientDebtSumOrderByAggregateInput;
};
export type ClientDebtScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClientDebtScalarWhereWithAggregatesInput | Prisma.ClientDebtScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClientDebtScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClientDebtScalarWhereWithAggregatesInput | Prisma.ClientDebtScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ClientDebt"> | string;
    clientId?: Prisma.StringWithAggregatesFilter<"ClientDebt"> | string;
    currencyId?: Prisma.StringWithAggregatesFilter<"ClientDebt"> | string;
    amount?: Prisma.IntWithAggregatesFilter<"ClientDebt"> | number;
};
export type ClientDebtCreateInput = {
    id?: string;
    amount?: number;
    client: Prisma.ClientCreateNestedOneWithoutDebtByCurrencyInput;
    currency: Prisma.CurrencyCreateNestedOneWithoutClientDebtsInput;
};
export type ClientDebtUncheckedCreateInput = {
    id?: string;
    clientId: string;
    currencyId: string;
    amount?: number;
};
export type ClientDebtUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    client?: Prisma.ClientUpdateOneRequiredWithoutDebtByCurrencyNestedInput;
    currency?: Prisma.CurrencyUpdateOneRequiredWithoutClientDebtsNestedInput;
};
export type ClientDebtUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    currencyId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ClientDebtCreateManyInput = {
    id?: string;
    clientId: string;
    currencyId: string;
    amount?: number;
};
export type ClientDebtUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ClientDebtUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    currencyId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ClientDebtListRelationFilter = {
    every?: Prisma.ClientDebtWhereInput;
    some?: Prisma.ClientDebtWhereInput;
    none?: Prisma.ClientDebtWhereInput;
};
export type ClientDebtOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ClientDebtClientIdCurrencyIdCompoundUniqueInput = {
    clientId: string;
    currencyId: string;
};
export type ClientDebtCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    currencyId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type ClientDebtAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type ClientDebtMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    currencyId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type ClientDebtMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    currencyId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type ClientDebtSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type ClientDebtCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.ClientDebtCreateWithoutClientInput, Prisma.ClientDebtUncheckedCreateWithoutClientInput> | Prisma.ClientDebtCreateWithoutClientInput[] | Prisma.ClientDebtUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.ClientDebtCreateOrConnectWithoutClientInput | Prisma.ClientDebtCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.ClientDebtCreateManyClientInputEnvelope;
    connect?: Prisma.ClientDebtWhereUniqueInput | Prisma.ClientDebtWhereUniqueInput[];
};
export type ClientDebtUncheckedCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.ClientDebtCreateWithoutClientInput, Prisma.ClientDebtUncheckedCreateWithoutClientInput> | Prisma.ClientDebtCreateWithoutClientInput[] | Prisma.ClientDebtUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.ClientDebtCreateOrConnectWithoutClientInput | Prisma.ClientDebtCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.ClientDebtCreateManyClientInputEnvelope;
    connect?: Prisma.ClientDebtWhereUniqueInput | Prisma.ClientDebtWhereUniqueInput[];
};
export type ClientDebtUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.ClientDebtCreateWithoutClientInput, Prisma.ClientDebtUncheckedCreateWithoutClientInput> | Prisma.ClientDebtCreateWithoutClientInput[] | Prisma.ClientDebtUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.ClientDebtCreateOrConnectWithoutClientInput | Prisma.ClientDebtCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.ClientDebtUpsertWithWhereUniqueWithoutClientInput | Prisma.ClientDebtUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.ClientDebtCreateManyClientInputEnvelope;
    set?: Prisma.ClientDebtWhereUniqueInput | Prisma.ClientDebtWhereUniqueInput[];
    disconnect?: Prisma.ClientDebtWhereUniqueInput | Prisma.ClientDebtWhereUniqueInput[];
    delete?: Prisma.ClientDebtWhereUniqueInput | Prisma.ClientDebtWhereUniqueInput[];
    connect?: Prisma.ClientDebtWhereUniqueInput | Prisma.ClientDebtWhereUniqueInput[];
    update?: Prisma.ClientDebtUpdateWithWhereUniqueWithoutClientInput | Prisma.ClientDebtUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.ClientDebtUpdateManyWithWhereWithoutClientInput | Prisma.ClientDebtUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.ClientDebtScalarWhereInput | Prisma.ClientDebtScalarWhereInput[];
};
export type ClientDebtUncheckedUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.ClientDebtCreateWithoutClientInput, Prisma.ClientDebtUncheckedCreateWithoutClientInput> | Prisma.ClientDebtCreateWithoutClientInput[] | Prisma.ClientDebtUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.ClientDebtCreateOrConnectWithoutClientInput | Prisma.ClientDebtCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.ClientDebtUpsertWithWhereUniqueWithoutClientInput | Prisma.ClientDebtUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.ClientDebtCreateManyClientInputEnvelope;
    set?: Prisma.ClientDebtWhereUniqueInput | Prisma.ClientDebtWhereUniqueInput[];
    disconnect?: Prisma.ClientDebtWhereUniqueInput | Prisma.ClientDebtWhereUniqueInput[];
    delete?: Prisma.ClientDebtWhereUniqueInput | Prisma.ClientDebtWhereUniqueInput[];
    connect?: Prisma.ClientDebtWhereUniqueInput | Prisma.ClientDebtWhereUniqueInput[];
    update?: Prisma.ClientDebtUpdateWithWhereUniqueWithoutClientInput | Prisma.ClientDebtUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.ClientDebtUpdateManyWithWhereWithoutClientInput | Prisma.ClientDebtUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.ClientDebtScalarWhereInput | Prisma.ClientDebtScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ClientDebtCreateNestedManyWithoutCurrencyInput = {
    create?: Prisma.XOR<Prisma.ClientDebtCreateWithoutCurrencyInput, Prisma.ClientDebtUncheckedCreateWithoutCurrencyInput> | Prisma.ClientDebtCreateWithoutCurrencyInput[] | Prisma.ClientDebtUncheckedCreateWithoutCurrencyInput[];
    connectOrCreate?: Prisma.ClientDebtCreateOrConnectWithoutCurrencyInput | Prisma.ClientDebtCreateOrConnectWithoutCurrencyInput[];
    createMany?: Prisma.ClientDebtCreateManyCurrencyInputEnvelope;
    connect?: Prisma.ClientDebtWhereUniqueInput | Prisma.ClientDebtWhereUniqueInput[];
};
export type ClientDebtUncheckedCreateNestedManyWithoutCurrencyInput = {
    create?: Prisma.XOR<Prisma.ClientDebtCreateWithoutCurrencyInput, Prisma.ClientDebtUncheckedCreateWithoutCurrencyInput> | Prisma.ClientDebtCreateWithoutCurrencyInput[] | Prisma.ClientDebtUncheckedCreateWithoutCurrencyInput[];
    connectOrCreate?: Prisma.ClientDebtCreateOrConnectWithoutCurrencyInput | Prisma.ClientDebtCreateOrConnectWithoutCurrencyInput[];
    createMany?: Prisma.ClientDebtCreateManyCurrencyInputEnvelope;
    connect?: Prisma.ClientDebtWhereUniqueInput | Prisma.ClientDebtWhereUniqueInput[];
};
export type ClientDebtUpdateManyWithoutCurrencyNestedInput = {
    create?: Prisma.XOR<Prisma.ClientDebtCreateWithoutCurrencyInput, Prisma.ClientDebtUncheckedCreateWithoutCurrencyInput> | Prisma.ClientDebtCreateWithoutCurrencyInput[] | Prisma.ClientDebtUncheckedCreateWithoutCurrencyInput[];
    connectOrCreate?: Prisma.ClientDebtCreateOrConnectWithoutCurrencyInput | Prisma.ClientDebtCreateOrConnectWithoutCurrencyInput[];
    upsert?: Prisma.ClientDebtUpsertWithWhereUniqueWithoutCurrencyInput | Prisma.ClientDebtUpsertWithWhereUniqueWithoutCurrencyInput[];
    createMany?: Prisma.ClientDebtCreateManyCurrencyInputEnvelope;
    set?: Prisma.ClientDebtWhereUniqueInput | Prisma.ClientDebtWhereUniqueInput[];
    disconnect?: Prisma.ClientDebtWhereUniqueInput | Prisma.ClientDebtWhereUniqueInput[];
    delete?: Prisma.ClientDebtWhereUniqueInput | Prisma.ClientDebtWhereUniqueInput[];
    connect?: Prisma.ClientDebtWhereUniqueInput | Prisma.ClientDebtWhereUniqueInput[];
    update?: Prisma.ClientDebtUpdateWithWhereUniqueWithoutCurrencyInput | Prisma.ClientDebtUpdateWithWhereUniqueWithoutCurrencyInput[];
    updateMany?: Prisma.ClientDebtUpdateManyWithWhereWithoutCurrencyInput | Prisma.ClientDebtUpdateManyWithWhereWithoutCurrencyInput[];
    deleteMany?: Prisma.ClientDebtScalarWhereInput | Prisma.ClientDebtScalarWhereInput[];
};
export type ClientDebtUncheckedUpdateManyWithoutCurrencyNestedInput = {
    create?: Prisma.XOR<Prisma.ClientDebtCreateWithoutCurrencyInput, Prisma.ClientDebtUncheckedCreateWithoutCurrencyInput> | Prisma.ClientDebtCreateWithoutCurrencyInput[] | Prisma.ClientDebtUncheckedCreateWithoutCurrencyInput[];
    connectOrCreate?: Prisma.ClientDebtCreateOrConnectWithoutCurrencyInput | Prisma.ClientDebtCreateOrConnectWithoutCurrencyInput[];
    upsert?: Prisma.ClientDebtUpsertWithWhereUniqueWithoutCurrencyInput | Prisma.ClientDebtUpsertWithWhereUniqueWithoutCurrencyInput[];
    createMany?: Prisma.ClientDebtCreateManyCurrencyInputEnvelope;
    set?: Prisma.ClientDebtWhereUniqueInput | Prisma.ClientDebtWhereUniqueInput[];
    disconnect?: Prisma.ClientDebtWhereUniqueInput | Prisma.ClientDebtWhereUniqueInput[];
    delete?: Prisma.ClientDebtWhereUniqueInput | Prisma.ClientDebtWhereUniqueInput[];
    connect?: Prisma.ClientDebtWhereUniqueInput | Prisma.ClientDebtWhereUniqueInput[];
    update?: Prisma.ClientDebtUpdateWithWhereUniqueWithoutCurrencyInput | Prisma.ClientDebtUpdateWithWhereUniqueWithoutCurrencyInput[];
    updateMany?: Prisma.ClientDebtUpdateManyWithWhereWithoutCurrencyInput | Prisma.ClientDebtUpdateManyWithWhereWithoutCurrencyInput[];
    deleteMany?: Prisma.ClientDebtScalarWhereInput | Prisma.ClientDebtScalarWhereInput[];
};
export type ClientDebtCreateWithoutClientInput = {
    id?: string;
    amount?: number;
    currency: Prisma.CurrencyCreateNestedOneWithoutClientDebtsInput;
};
export type ClientDebtUncheckedCreateWithoutClientInput = {
    id?: string;
    currencyId: string;
    amount?: number;
};
export type ClientDebtCreateOrConnectWithoutClientInput = {
    where: Prisma.ClientDebtWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientDebtCreateWithoutClientInput, Prisma.ClientDebtUncheckedCreateWithoutClientInput>;
};
export type ClientDebtCreateManyClientInputEnvelope = {
    data: Prisma.ClientDebtCreateManyClientInput | Prisma.ClientDebtCreateManyClientInput[];
    skipDuplicates?: boolean;
};
export type ClientDebtUpsertWithWhereUniqueWithoutClientInput = {
    where: Prisma.ClientDebtWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClientDebtUpdateWithoutClientInput, Prisma.ClientDebtUncheckedUpdateWithoutClientInput>;
    create: Prisma.XOR<Prisma.ClientDebtCreateWithoutClientInput, Prisma.ClientDebtUncheckedCreateWithoutClientInput>;
};
export type ClientDebtUpdateWithWhereUniqueWithoutClientInput = {
    where: Prisma.ClientDebtWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClientDebtUpdateWithoutClientInput, Prisma.ClientDebtUncheckedUpdateWithoutClientInput>;
};
export type ClientDebtUpdateManyWithWhereWithoutClientInput = {
    where: Prisma.ClientDebtScalarWhereInput;
    data: Prisma.XOR<Prisma.ClientDebtUpdateManyMutationInput, Prisma.ClientDebtUncheckedUpdateManyWithoutClientInput>;
};
export type ClientDebtScalarWhereInput = {
    AND?: Prisma.ClientDebtScalarWhereInput | Prisma.ClientDebtScalarWhereInput[];
    OR?: Prisma.ClientDebtScalarWhereInput[];
    NOT?: Prisma.ClientDebtScalarWhereInput | Prisma.ClientDebtScalarWhereInput[];
    id?: Prisma.StringFilter<"ClientDebt"> | string;
    clientId?: Prisma.StringFilter<"ClientDebt"> | string;
    currencyId?: Prisma.StringFilter<"ClientDebt"> | string;
    amount?: Prisma.IntFilter<"ClientDebt"> | number;
};
export type ClientDebtCreateWithoutCurrencyInput = {
    id?: string;
    amount?: number;
    client: Prisma.ClientCreateNestedOneWithoutDebtByCurrencyInput;
};
export type ClientDebtUncheckedCreateWithoutCurrencyInput = {
    id?: string;
    clientId: string;
    amount?: number;
};
export type ClientDebtCreateOrConnectWithoutCurrencyInput = {
    where: Prisma.ClientDebtWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientDebtCreateWithoutCurrencyInput, Prisma.ClientDebtUncheckedCreateWithoutCurrencyInput>;
};
export type ClientDebtCreateManyCurrencyInputEnvelope = {
    data: Prisma.ClientDebtCreateManyCurrencyInput | Prisma.ClientDebtCreateManyCurrencyInput[];
    skipDuplicates?: boolean;
};
export type ClientDebtUpsertWithWhereUniqueWithoutCurrencyInput = {
    where: Prisma.ClientDebtWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClientDebtUpdateWithoutCurrencyInput, Prisma.ClientDebtUncheckedUpdateWithoutCurrencyInput>;
    create: Prisma.XOR<Prisma.ClientDebtCreateWithoutCurrencyInput, Prisma.ClientDebtUncheckedCreateWithoutCurrencyInput>;
};
export type ClientDebtUpdateWithWhereUniqueWithoutCurrencyInput = {
    where: Prisma.ClientDebtWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClientDebtUpdateWithoutCurrencyInput, Prisma.ClientDebtUncheckedUpdateWithoutCurrencyInput>;
};
export type ClientDebtUpdateManyWithWhereWithoutCurrencyInput = {
    where: Prisma.ClientDebtScalarWhereInput;
    data: Prisma.XOR<Prisma.ClientDebtUpdateManyMutationInput, Prisma.ClientDebtUncheckedUpdateManyWithoutCurrencyInput>;
};
export type ClientDebtCreateManyClientInput = {
    id?: string;
    currencyId: string;
    amount?: number;
};
export type ClientDebtUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    currency?: Prisma.CurrencyUpdateOneRequiredWithoutClientDebtsNestedInput;
};
export type ClientDebtUncheckedUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    currencyId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ClientDebtUncheckedUpdateManyWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    currencyId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ClientDebtCreateManyCurrencyInput = {
    id?: string;
    clientId: string;
    amount?: number;
};
export type ClientDebtUpdateWithoutCurrencyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    client?: Prisma.ClientUpdateOneRequiredWithoutDebtByCurrencyNestedInput;
};
export type ClientDebtUncheckedUpdateWithoutCurrencyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ClientDebtUncheckedUpdateManyWithoutCurrencyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ClientDebtSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clientId?: boolean;
    currencyId?: boolean;
    amount?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    currency?: boolean | Prisma.CurrencyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["clientDebt"]>;
export type ClientDebtSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clientId?: boolean;
    currencyId?: boolean;
    amount?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    currency?: boolean | Prisma.CurrencyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["clientDebt"]>;
export type ClientDebtSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clientId?: boolean;
    currencyId?: boolean;
    amount?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    currency?: boolean | Prisma.CurrencyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["clientDebt"]>;
export type ClientDebtSelectScalar = {
    id?: boolean;
    clientId?: boolean;
    currencyId?: boolean;
    amount?: boolean;
};
export type ClientDebtOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clientId" | "currencyId" | "amount", ExtArgs["result"]["clientDebt"]>;
export type ClientDebtInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    currency?: boolean | Prisma.CurrencyDefaultArgs<ExtArgs>;
};
export type ClientDebtIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    currency?: boolean | Prisma.CurrencyDefaultArgs<ExtArgs>;
};
export type ClientDebtIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    currency?: boolean | Prisma.CurrencyDefaultArgs<ExtArgs>;
};
export type $ClientDebtPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ClientDebt";
    objects: {
        client: Prisma.$ClientPayload<ExtArgs>;
        currency: Prisma.$CurrencyPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        clientId: string;
        currencyId: string;
        amount: number;
    }, ExtArgs["result"]["clientDebt"]>;
    composites: {};
};
export type ClientDebtGetPayload<S extends boolean | null | undefined | ClientDebtDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClientDebtPayload, S>;
export type ClientDebtCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClientDebtFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClientDebtCountAggregateInputType | true;
};
export interface ClientDebtDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ClientDebt'];
        meta: {
            name: 'ClientDebt';
        };
    };
    findUnique<T extends ClientDebtFindUniqueArgs>(args: Prisma.SelectSubset<T, ClientDebtFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClientDebtClient<runtime.Types.Result.GetResult<Prisma.$ClientDebtPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClientDebtFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClientDebtFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClientDebtClient<runtime.Types.Result.GetResult<Prisma.$ClientDebtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClientDebtFindFirstArgs>(args?: Prisma.SelectSubset<T, ClientDebtFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClientDebtClient<runtime.Types.Result.GetResult<Prisma.$ClientDebtPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClientDebtFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClientDebtFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClientDebtClient<runtime.Types.Result.GetResult<Prisma.$ClientDebtPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClientDebtFindManyArgs>(args?: Prisma.SelectSubset<T, ClientDebtFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientDebtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClientDebtCreateArgs>(args: Prisma.SelectSubset<T, ClientDebtCreateArgs<ExtArgs>>): Prisma.Prisma__ClientDebtClient<runtime.Types.Result.GetResult<Prisma.$ClientDebtPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClientDebtCreateManyArgs>(args?: Prisma.SelectSubset<T, ClientDebtCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ClientDebtCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClientDebtCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientDebtPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ClientDebtDeleteArgs>(args: Prisma.SelectSubset<T, ClientDebtDeleteArgs<ExtArgs>>): Prisma.Prisma__ClientDebtClient<runtime.Types.Result.GetResult<Prisma.$ClientDebtPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClientDebtUpdateArgs>(args: Prisma.SelectSubset<T, ClientDebtUpdateArgs<ExtArgs>>): Prisma.Prisma__ClientDebtClient<runtime.Types.Result.GetResult<Prisma.$ClientDebtPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClientDebtDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClientDebtDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClientDebtUpdateManyArgs>(args: Prisma.SelectSubset<T, ClientDebtUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ClientDebtUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClientDebtUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientDebtPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ClientDebtUpsertArgs>(args: Prisma.SelectSubset<T, ClientDebtUpsertArgs<ExtArgs>>): Prisma.Prisma__ClientDebtClient<runtime.Types.Result.GetResult<Prisma.$ClientDebtPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClientDebtCountArgs>(args?: Prisma.Subset<T, ClientDebtCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClientDebtCountAggregateOutputType> : number>;
    aggregate<T extends ClientDebtAggregateArgs>(args: Prisma.Subset<T, ClientDebtAggregateArgs>): Prisma.PrismaPromise<GetClientDebtAggregateType<T>>;
    groupBy<T extends ClientDebtGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClientDebtGroupByArgs['orderBy'];
    } : {
        orderBy?: ClientDebtGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClientDebtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientDebtGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClientDebtFieldRefs;
}
export interface Prisma__ClientDebtClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    client<T extends Prisma.ClientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientDefaultArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    currency<T extends Prisma.CurrencyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CurrencyDefaultArgs<ExtArgs>>): Prisma.Prisma__CurrencyClient<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClientDebtFieldRefs {
    readonly id: Prisma.FieldRef<"ClientDebt", 'String'>;
    readonly clientId: Prisma.FieldRef<"ClientDebt", 'String'>;
    readonly currencyId: Prisma.FieldRef<"ClientDebt", 'String'>;
    readonly amount: Prisma.FieldRef<"ClientDebt", 'Int'>;
}
export type ClientDebtFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientDebtSelect<ExtArgs> | null;
    omit?: Prisma.ClientDebtOmit<ExtArgs> | null;
    include?: Prisma.ClientDebtInclude<ExtArgs> | null;
    where: Prisma.ClientDebtWhereUniqueInput;
};
export type ClientDebtFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientDebtSelect<ExtArgs> | null;
    omit?: Prisma.ClientDebtOmit<ExtArgs> | null;
    include?: Prisma.ClientDebtInclude<ExtArgs> | null;
    where: Prisma.ClientDebtWhereUniqueInput;
};
export type ClientDebtFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientDebtSelect<ExtArgs> | null;
    omit?: Prisma.ClientDebtOmit<ExtArgs> | null;
    include?: Prisma.ClientDebtInclude<ExtArgs> | null;
    where?: Prisma.ClientDebtWhereInput;
    orderBy?: Prisma.ClientDebtOrderByWithRelationInput | Prisma.ClientDebtOrderByWithRelationInput[];
    cursor?: Prisma.ClientDebtWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientDebtScalarFieldEnum | Prisma.ClientDebtScalarFieldEnum[];
};
export type ClientDebtFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientDebtSelect<ExtArgs> | null;
    omit?: Prisma.ClientDebtOmit<ExtArgs> | null;
    include?: Prisma.ClientDebtInclude<ExtArgs> | null;
    where?: Prisma.ClientDebtWhereInput;
    orderBy?: Prisma.ClientDebtOrderByWithRelationInput | Prisma.ClientDebtOrderByWithRelationInput[];
    cursor?: Prisma.ClientDebtWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientDebtScalarFieldEnum | Prisma.ClientDebtScalarFieldEnum[];
};
export type ClientDebtFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientDebtSelect<ExtArgs> | null;
    omit?: Prisma.ClientDebtOmit<ExtArgs> | null;
    include?: Prisma.ClientDebtInclude<ExtArgs> | null;
    where?: Prisma.ClientDebtWhereInput;
    orderBy?: Prisma.ClientDebtOrderByWithRelationInput | Prisma.ClientDebtOrderByWithRelationInput[];
    cursor?: Prisma.ClientDebtWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientDebtScalarFieldEnum | Prisma.ClientDebtScalarFieldEnum[];
};
export type ClientDebtCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientDebtSelect<ExtArgs> | null;
    omit?: Prisma.ClientDebtOmit<ExtArgs> | null;
    include?: Prisma.ClientDebtInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientDebtCreateInput, Prisma.ClientDebtUncheckedCreateInput>;
};
export type ClientDebtCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClientDebtCreateManyInput | Prisma.ClientDebtCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClientDebtCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientDebtSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClientDebtOmit<ExtArgs> | null;
    data: Prisma.ClientDebtCreateManyInput | Prisma.ClientDebtCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ClientDebtIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ClientDebtUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientDebtSelect<ExtArgs> | null;
    omit?: Prisma.ClientDebtOmit<ExtArgs> | null;
    include?: Prisma.ClientDebtInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientDebtUpdateInput, Prisma.ClientDebtUncheckedUpdateInput>;
    where: Prisma.ClientDebtWhereUniqueInput;
};
export type ClientDebtUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClientDebtUpdateManyMutationInput, Prisma.ClientDebtUncheckedUpdateManyInput>;
    where?: Prisma.ClientDebtWhereInput;
    limit?: number;
};
export type ClientDebtUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientDebtSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClientDebtOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientDebtUpdateManyMutationInput, Prisma.ClientDebtUncheckedUpdateManyInput>;
    where?: Prisma.ClientDebtWhereInput;
    limit?: number;
    include?: Prisma.ClientDebtIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ClientDebtUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientDebtSelect<ExtArgs> | null;
    omit?: Prisma.ClientDebtOmit<ExtArgs> | null;
    include?: Prisma.ClientDebtInclude<ExtArgs> | null;
    where: Prisma.ClientDebtWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientDebtCreateInput, Prisma.ClientDebtUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClientDebtUpdateInput, Prisma.ClientDebtUncheckedUpdateInput>;
};
export type ClientDebtDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientDebtSelect<ExtArgs> | null;
    omit?: Prisma.ClientDebtOmit<ExtArgs> | null;
    include?: Prisma.ClientDebtInclude<ExtArgs> | null;
    where: Prisma.ClientDebtWhereUniqueInput;
};
export type ClientDebtDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientDebtWhereInput;
    limit?: number;
};
export type ClientDebtDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientDebtSelect<ExtArgs> | null;
    omit?: Prisma.ClientDebtOmit<ExtArgs> | null;
    include?: Prisma.ClientDebtInclude<ExtArgs> | null;
};
