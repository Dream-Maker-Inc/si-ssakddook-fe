import { LoginApiResponse } from "./dto/AuthApiResponse.dto";

export interface AuthApiInterface {
  login(email: string, password: string): Promise<LoginApiResponse>;
}
