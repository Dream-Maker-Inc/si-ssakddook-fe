import {
  SignupApiResponse,
  ValidateEmailApiResponse,
  ValidateNicknameApiResponse,
  GetCurrentMemberApiResponse,
} from "./member.dto";
import { MemberModel } from "./type/member.model";

export interface MemberApiInterface {
  validateEmail(email: string): Promise<ValidateEmailApiResponse>;
  validateNickname(nickname: string): Promise<ValidateNicknameApiResponse>;
  signup(body: MemberModel): Promise<SignupApiResponse>;
  getCurrentMember(): Promise<GetCurrentMemberApiResponse>;
}
