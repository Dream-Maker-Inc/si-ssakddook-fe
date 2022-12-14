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

export const useUpdateNickname = (nickname: string) => {
  return useMutation(() => MemberApiService.updateNickname(nickname));
};

export const useUpdatePassword = (oldPassword: string, newPassword: string) => {
  return useMutation(() =>
    MemberApiService.updatePassword(oldPassword, newPassword)
  );
};

export const useUpdateProfileImage = () => {
  return useMutation((formData: any) =>
    MemberApiService.updateProfileImage(formData)
  );
};

export const useDeleteMember = () => {
  return useMutation(() => MemberApiService.deleteMember());
};
