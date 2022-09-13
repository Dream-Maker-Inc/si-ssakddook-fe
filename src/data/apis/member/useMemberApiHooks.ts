import MemberApiService from "./member.api";
import { useMutation } from "react-query";
import { MemberModel } from "./type/member.model";

export const useValidateEmail = (email: string) => {
  return useMutation(() => MemberApiService.validateEmail(email));
};

export const useValidateNickname = (nickname: string) => {
  return useMutation(() => MemberApiService.validateNickname(nickname));
};

export const useSignup = (body: MemberModel) => {
  return MemberApiService.signup(body);
};

export const useGetCurrentMember = () => {
  return MemberApiService.getCurrentMember();
};

// const {
//   mutate,
//   isSuccess,
//   data,
//   isError,
//   error,
// } = await useMutation(() => SignupApiService.validateEmail(email));

// return {
//   mutateValidateEmail: mutate,
//   valdiateEmailSuccess: isSuccess,
// }
