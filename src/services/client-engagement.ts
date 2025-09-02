import { OrganizationAdapter } from './../models/client-engagement';
import { paths } from "../types/path"
import { axiosInstances } from "./networkinstances"
import { ClientEnagementResponse } from "../types/client-engagement";


export const getClientEngagements = async (): Promise<ClientEnagementResponse> => {
    try {
          const response = await axiosInstances.get(paths?.clientEngagement?.getClientEngagements || '');
          if(response?.status === 200){
             return {
                success: true,
                organizations: (response?.data as any[])?.map((client) => new OrganizationAdapter().adapt(client)) || []
             }
          }

          return {
            success: false,
          }
    } catch(error: any) {
        let message;
		if (error?.response?.data?.msg) {
			message = error.response.data.msg;
		} else if (error?.msg) {
			message = error.message;
		}

		return {
			success: false,
			message,
		};
    }

}