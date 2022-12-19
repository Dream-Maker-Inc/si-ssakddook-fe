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

    return response.data.data;
  }

  async validateNickname(
    nickname: string
  ): Promise<ValidateNicknameApiResponse> {
    const response = await axiosClient.post("/v1/member/validate/nickname", {
      nickname,
    });

    return response.data.data;
  }

  async signup(body: MemberModel): Promise<ApiFailedResponse | any> {
    const response = await axiosBasicClient.post(
      "/v1/member/with-service-terms",
      body
    );

    return response.data.data;
  }

  async getCurrentMember(): Promise<MemberApiResponse> {
    const response = await axiosClient.get("/v1/member/me");
    return response.data.data;
  }

  async updateNickname(nickname: string): Promise<ApiFailedResponse | any> {
    const response = await axiosClient.patch(`/v1/member`, {
      nickname,
    });

    return response.data.data;
  }

  async updatePassword(
    oldPassword: string,
    newPassword: string
  ): Promise<ApiFailedResponse | any> {
    const response = await axiosClient.patch(`/v1/member/password`, {
      oldPassword,
      newPassword,
    });

    return response.data.data;
  }

  async updateProfileImage(formData: any): Promise<ApiFailedResponse | any> {
    const response = await axiosClient.patch(`/v1/member/profile`, formData);

    return response.data.data;
  }

  async deleteMember(): Promise<ApiFailedResponse | any> {
    const response = await axiosClient.delete(`/v1/member`);

    return response.data.data;
  }
}

export default MemberApiService.Instance;
