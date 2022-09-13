import { LoginApiResponse } from "./auth.dto";

export interface AuthApiInterface {
  login(email: string, password: string): Promise<LoginApiResponse>;
}
