import { ApiFailedResponse } from "@/data/statusCode/FailedResponse";
import {
  SignupApiResponse,
  ValidateEmailApiResponse,
  ValidateNicknameApiResponse,
  MemberApiResponse,
} from "./member.dto";
import { MemberModel } from "./type/member.model";

export interface MemberApiInterface {
  validateEmail(email: string): Promise<ValidateEmailApiResponse>;
  validateNickname(nickname: string): Promise<ValidateNicknameApiResponse>;
  signup(body: MemberModel): Promise<SignupApiResponse>;
  getCurrentMember(): Promise<MemberApiResponse>;
  updateNickname(nickname: string): Promise<ApiFailedResponse>;
  updatePassword(
    oldPassword: string,
    newPassword: string
  ): Promise<ApiFailedResponse>;
  updateProfileImage(formData: any): Promise<ApiFailedResponse>;
}
