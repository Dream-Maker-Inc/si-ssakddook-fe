import MemberApiService from "./auth.api";
import { useMutation } from "react-query";

export const useLogin = (email: string, password: string) => {
  return useMutation(() => MemberApiService.login(email, password));
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
