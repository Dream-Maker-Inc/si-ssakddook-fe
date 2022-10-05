import MemberApiService from "./auth.api";
import { useMutation } from "react-query";

export const useLogin = (email: string, password: string) => {
  return useMutation(() => MemberApiService.login(email, password));
};
