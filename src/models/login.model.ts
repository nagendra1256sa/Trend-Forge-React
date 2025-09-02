import { Adapter } from "./adapter";

export class User {
  id!: number;
  email!: string;
  fullName!: string;
  userCode!: string;
  user_type!: string;
  role!: string;
  isSuperuser?: boolean;
}

export class Login {
  id?: number;
  accessToken?: string;
  refreshToken?: string;
  user?: User;
}

export class LoginAdapter implements Adapter<Login> {
  adapt(data: any): Login {
    const loginData = new Login();
    try {
      loginData.id = data?.id;
      loginData.accessToken = data?.access;
      loginData.refreshToken = data?.refresh;
      loginData.user = new User();
      loginData.user.id = data?.user?.id;
      loginData.user.email = data?.user?.email;
      loginData.user.fullName = data?.user?.full_name;
      loginData.user.userCode = data?.user?.user_code;
      loginData.user.user_type = data?.user?.user_type;
      loginData.user.role = data?.user?.role;
      loginData.user.isSuperuser = data?.user?.is_superuser;
    } catch (error) {
      console.error("[LoginAdapter] Adaptation failed:", error);
    }
    return loginData;
  }
}
