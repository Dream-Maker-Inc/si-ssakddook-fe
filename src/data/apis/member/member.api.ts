import { axiosClient } from "@/constants/api/client/client";
import {
  ValidateEmailApiResponse,
  ValidateNicknameApiResponse,
} from "./member.dto";
import { MemberApiInterface } from "./member.interface";

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
}

export default MemberApiService.Instance;
