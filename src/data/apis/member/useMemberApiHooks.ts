import MemberApiService from "./member.api";
import { useMutation } from "react-query";

export const useValidateEmail = (email: string) => {
  return useMutation(() => MemberApiService.validateEmail(email));
};

export const useValidateNickname = (nickname: string) => {
  return useMutation(() => MemberApiService.validateNickname(nickname));
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
