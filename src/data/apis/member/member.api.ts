import { axiosBasicClient, axiosClient } from "@/constants/api/client/client";
import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { ApiFailedResponse } from "@/data/statusCode/FailedResponse";
import {
  MemberApiResponse,
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

  get id() {
    return LocalStorage.getItem("id");
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
    const response = await axiosBasicClient.post(
      "/v1/member/with-service-terms",
      body
    );

    return response.data;
  }

  async getCurrentMember(): Promise<MemberApiResponse> {
    const response = await axiosClient.get("/v1/member/me");
    return response.data;
  }

  async updateNickname(nickname: string): Promise<ApiFailedResponse | any> {
    const response = await axiosClient.patch(`/v1/member/${this.id}`, {
      nickname,
    });

    return response.data;
  }

  async updatePassword(
    oldPassword: string,
    newPassword: string
  ): Promise<ApiFailedResponse | any> {
    const response = await axiosClient.patch(`/v1/member/${this.id}/password`, {
      oldPassword,
      newPassword,
    });

    return response.data;
  }

  async updateProfileImage(formData: any): Promise<ApiFailedResponse | any> {
    const response = await axiosClient.patch(
      `/v1/member/${this.id}/profile`,
      formData
    );

    return response.data;
  }
}

export default MemberApiService.Instance;
