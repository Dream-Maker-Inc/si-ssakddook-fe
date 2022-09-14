import { axiosClient } from "@/constants/api/client/client";
import { ApiFailedResponse } from "@/data/statusCode/FailedResponse";
import {
  GetCurrentMemberApiResponse,
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

  jwt = localStorage.getItem("jwt");
  config = {
    headers: { Authorization: `Bearer ${this.jwt}` },
  };

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
    const response = await axiosClient.get("/v1/member/me", this.config);

    return response.data;
  }

  async updateNickname(
    id: string,
    nickname: string
  ): Promise<ApiFailedResponse | any> {
    const response = await axiosClient.patch(
      `/v1/member/${id}`,
      { nickname },
      this.config
    );

    return response.data;
  }

  async updatePassword(
    id: string,
    oldPassword: string,
    newPassword: string
  ): Promise<ApiFailedResponse | any> {
    const response = await axiosClient.patch(
      `/v1/member/${id}/password`,
      { oldPassword, newPassword },
      this.config
    );

    return response.data;
  }

  async updateProfileImage(
    id: string,
    formData: any
  ): Promise<ApiFailedResponse | any> {
    const response = await axiosClient.patch(
      `/v1/member/${id}/profile`,
      formData,
      this.config
    );

    return response.data;
  }
}

export default MemberApiService.Instance;
