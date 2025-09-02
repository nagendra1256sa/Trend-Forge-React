import { Organization } from "../models/client-engagement";

export interface ClientEnagementResponse {
   success: boolean;
   organizations? : Organization[];
   message?: string;
}

