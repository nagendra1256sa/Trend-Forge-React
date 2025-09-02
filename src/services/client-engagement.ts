import { ClientStatsAdapter, OrganizationAdapter } from './../models/client-engagement';
import { paths } from "../types/path"
import { axiosInstances } from "./networkinstances"
import { ClientEnagementResponse, ClientWidgetsResponse } from "../types/client-engagement";


export const getClientEngagements = async (search: string, isActive: string, organizationId: string): Promise<ClientEnagementResponse> => {
  try {
    const params: Record<string, any> = {};
    if (search) params.search = search;
    if (typeof isActive === "boolean") params.isActive = isActive;
    if (organizationId) params.organizationId = organizationId;
    const response = await axiosInstances.get(paths?.clientEngagement?.getClientEngagements || '', {
      params: params
          });
    if (response?.status === 200) {
      return {
        success: true,
        organizations: (response?.data as any[])?.map((client) => new OrganizationAdapter().adapt(client)) || []
      }
    }

    return {
      success: false,
    }
  } catch (error: any) {
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

};

export const getWidgetsList = async (): Promise<ClientWidgetsResponse> => {
  try {

    const response = await axiosInstances.get(paths?.clientEngagement?.getWidgetsList || '');
    if (response?.status === 200) {
      return {
        success: true,
        clientStats: new ClientStatsAdapter().adapt(response?.data)
      }
    }

    return {
      success: false,
    }
  } catch (error: any) {
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