export declare class CreateCurrencyDto {
    name: string;
    symbol: string;
    exchangeRate: number;
}
export declare class UpdateCurrencyDto {
    id: string;
    name?: string;
    exchangeRate?: number;
}
