import { axiosBasicClient } from "@/constants/api/client/client";
import { ApiFailedResponse } from "@/data/statusCode/FailedResponse";
import { LoginApiResponse } from "./auth.dto";
import { AuthApiInterface } from "./auth.interface";

class AuthApiService implements AuthApiInterface {
  private static instance: AuthApiService;
  static get Instance(): AuthApiService {
    return this.instance || (this.instance = new this());
  }

  async login(email: string, password: string): Promise<LoginApiResponse> {
    const response = await axiosBasicClient.post("/v1/auth/login", {
      email,
      password,
    });

    return response.data;
  }
}

export default AuthApiService.Instance;
