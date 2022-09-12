import {
  ValidateEmailApiResponse,
  ValidateNicknameApiResponse,
} from "./member.dto";

export interface MemberApiInterface {
  validateEmail(email: string): Promise<ValidateEmailApiResponse>;
  validateNickname(nickname: string): Promise<ValidateNicknameApiResponse>;
}
