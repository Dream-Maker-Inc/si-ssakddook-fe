import { axiosClient } from "@/constants/api/client/client";
import { AuthApiInterface } from "./AuthApi.interface";
import { LoginApiResponse } from "./dto/AuthApiResponse.dto";

export class AuthApiService implements AuthApiInterface {
  private static instance: AuthApiService;
  static get Instance(): AuthApiService {
    return this.instance || (this.instance = new this());
  }

  async login(email: string, password: string): Promise<LoginApiResponse> {
    const response = await axiosClient.post("/v1/auth/login", {
      email,
      password,
    });

    return response.data;
  }
}

export default AuthApiService.Instance;
