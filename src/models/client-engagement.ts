import { Adapter } from "./adapter";

export interface Organization {
  id: number;
  clientId: string;          
  name: string;              
  contactPerson: string;     
  contactNo: string;
  email: string;             
  address: string;           
  state: string;             
  stateCode: string;        
  country: string;           
  zipCode: string;
  feinNo: string;
  renewalDate: string;
  isActive: boolean;
  createdBy: string;
  createdDate: string;
  modifiedBy: string;
  modifiedDate: string;
}


export class OrganizationAdapter implements Adapter<Organization> {
  adapt(data: any): Organization {
    return {
      id: data.id,
      clientId: data.organization_code,
      name: data.organization_name,
      contactPerson: data.contact_person,
      contactNo: data.contact_no,
      email: data.mailid,
      address: `${data.address1 ?? ""} ${data.address2 ?? ""}`.trim(),
      state: data.state?.state_name ?? "",
      stateCode: data.state?.state_code ?? "",
      country: data.state?.country?.country_name ?? "",
      zipCode: data.zip_code,
      feinNo: data.fein_no,
      renewalDate: data.renewal_date,
      isActive: data.is_active,
      createdBy: data.created_by_email,
      createdDate: data.created_date_time,
      modifiedBy: data.modified_by_email,
      modifiedDate: data.modified_date_time,
    };
  }
};


