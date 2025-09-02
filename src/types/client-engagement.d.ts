import { Organization } from "../models/client-engagement";
import { ClientStats } from "../models/client-engagement";


export interface ClientEnagementResponse {
   success: boolean;
   organizations? : Organization[];
   message?: string;
}


export interface ClientWidgetsResponse {
   success: boolean;
   clientStats? : ClientStats;
   message?: string;
}

