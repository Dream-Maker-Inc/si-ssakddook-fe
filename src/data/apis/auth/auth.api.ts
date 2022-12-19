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

    return response.data.data;
  }

  async findId(token: string): Promise<ApiFailedResponse | any> {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axiosBasicClient.get("/v1/member/email", config);

    return response.data.data;
  }

  async findPassword(
    token: string,
    newPassword: string
  ): Promise<ApiFailedResponse | any> {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axiosBasicClient.patch(
      "/v1/member/password-with-certification",
      { newPassword: newPassword },
      config
    );

    return response.data.data;
  }
}

export default AuthApiService.Instance;
