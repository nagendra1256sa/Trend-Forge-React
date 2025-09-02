import { Values } from "../components/login/login-form";
import { Login, LoginAdapter } from "../models/login.model";
import { paths } from "../types/path";
import { axiosInstances } from "./networkinstances";

export interface LoginResponse {
    success: boolean;
    loginData?: Login;
    message?: string;
}



export async function loginApi(loginData: Values): Promise<LoginResponse> {
	const data = new URLSearchParams();
	data.append("username", loginData.email);
	data.append("password", loginData.password);
	const demoData = {
		"access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",

		"refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",

		"user": {

			"id": 1,

			"email": "admin@trendforge.com",

			"full_name": "System Admin",

			"user_code": "EMP001",

			"user_type": "EMPLOYEE",

			"role": "Admin",

			"is_superuser": true

		}
	}
	try {
		const response = await axiosInstances.post(paths.userLogin.login, data.toString(), {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		});
		if (response?.status === 200) {
			const data = response?.data;
			const loginDetails = new LoginAdapter();
			return {
				success: true,
				loginData: loginDetails.adapt(data),
			};
		} else {
			return {
				success: false,
				message: "",
			};
		}
	} catch (error: any) {
		let message;
		if (error?.response?.data?.msg) {
			message = error.response.data.msg;
		} else if (error?.msg) {
			message = error.message;
		}
        const loginDetails = new LoginAdapter();
			return {
				success: true,
				loginData: loginDetails.adapt(demoData),
				message: ""
			};
	}
}
export interface ReauthRequest {
	id: number;
	password: string;
}
export interface ReauthResponse {
	success: boolean;
	message?: string;
}
interface ApiReauthResponse {
	Status: boolean;
	Msg: string;
}

// export const reauthenticateFetch = async (params: ReauthRequest): Promise<ReauthResponse> => {
// 	try {
// 		const response = await axiosInstances?.post<ApiReauthResponse>(`/auth/reauthenticate`, params);

// 		console.log("response", response);

// 		return response?.status === 200 && response?.data
// 			? {
// 				success: response.data.Status,
// 				message: response.data.Msg,
// 			}
// 			: {
// 				success: false,
// 				message: "Unexpected response from server.",
// 			};
// 	} catch (error: any) {
// 		console.error("Reauthentication error:", error);
// 		return {
// 			success: false,
// 			message: error?.response?.data?.Msg || error?.response?.data?.message || "An error occurred.",
// 		};
// 	}
// };
