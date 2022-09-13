import { axiosClient } from "@/constants/api/client/client";
import { ApiFailedResponse } from "@/data/statusCode/FailedResponse";
import {
  GetCurrentMemberApiResponse,
  SignupApiResponse,
  ValidateEmailApiResponse,
  ValidateNicknameApiResponse,
} from "./member.dto";
import { MemberApiInterface } from "./member.interface";
import { MemberModel } from "./type/member.model";

class MemberApiService implements MemberApiInterface {
  private static instance: MemberApiService;
  static get Instance(): MemberApiService {
    return this.instance || (this.instance = new this());
  }

  async validateEmail(email: string): Promise<ValidateEmailApiResponse> {
    const response = await axiosClient.post("/v1/member/validate/email", {
      email,
    });

    return response.data;
  }

  async validateNickname(
    nickname: string
  ): Promise<ValidateNicknameApiResponse> {
    const response = await axiosClient.post("/v1/member/validate/nickname", {
      nickname,
    });

    return response.data;
  }

  async signup(body: MemberModel): Promise<ApiFailedResponse | any> {
    const response = await axiosClient.post(
      "/v1/member/with-service-terms",
      body
    );

    return response.data;
  }

  async getCurrentMember(): Promise<GetCurrentMemberApiResponse> {
    const jwt = localStorage.getItem("jwt");
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
    };
    const response = await axiosClient.get("/v1/member/me", config);

    return response.data;
  }
}

export default MemberApiService.Instance;
