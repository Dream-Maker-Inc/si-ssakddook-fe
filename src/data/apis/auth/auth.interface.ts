import { ApiFailedResponse } from "@/data/statusCode/FailedResponse";
import { LoginApiResponse } from "./auth.dto";

export interface AuthApiInterface {
  login(email: string, password: string): Promise<LoginApiResponse>;
  findId(token: string): Promise<ApiFailedResponse>;
  findPassword(token: string, newPassword: string): Promise<ApiFailedResponse>;
}
