import { ClientsService } from './clients.service.js';
import { CreateClientDto } from './dto/create-client.dto.js';
import { UpdateClientDto } from './dto/update-client.dto.js';
import { GetClientsDto } from './dto/get-client.dto.js';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    findMany(query: GetClientsDto): Promise<{
        data: {
            totalCount: number;
            pageNumber: number;
            pageSize: number;
            data: {
                id: string;
                fullname: string;
                phone: string;
                debtByCurrency: {
                    amount: number;
                    currency: {
                        id: string;
                        name: string;
                        symbol: string;
                        exchangeRate: number;
                    };
                }[];
                lastSellingDate: string | null;
            }[];
        };
    }>;
    findOne(id: string): Promise<{
        data: {
            address: string | null;
            latitude: number | null;
            longitude: number | null;
            createdAt: string;
            id: string;
            fullname: string;
            phone: string;
            debtByCurrency: {
                amount: number;
                currency: {
                    id: string;
                    name: string;
                    symbol: string;
                    exchangeRate: number;
                };
            }[];
            lastSellingDate: string | null;
        };
    }>;
    create(dto: CreateClientDto): Promise<{
        data: {
            id: string;
            name: string;
        };
    }>;
    update(dto: UpdateClientDto): Promise<{
        success: boolean;
    }>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
