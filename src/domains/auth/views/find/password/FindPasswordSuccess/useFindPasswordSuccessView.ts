import { CertificationTokenAtom } from "@/recoil/Member/Member.atom";
import { Regex } from "@/utils/validation/common/CommonRegex";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import authApi from "@/data/apis/auth/auth.api";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { RoutePath } from "@/constants/Path";

export const useFindPasswordSuccessView = () => {
  const router = useRouter();
  const [newPassword, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const tokenRecoilValue = useRecoilValue(CertificationTokenAtom);

  const handleNewPwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPw(e.target.value);
  };
  const handleConfirmPwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPw(e.target.value);
  };

  const isConfirmPwError =
    confirmPw !== newPassword && confirmPw !== "" && newPassword !== ""
      ? true
      : false;

  const newPwValidation = Regex.password.test(newPassword);
  const isNewPwError = newPassword !== "" && !newPwValidation;

  console.log(tokenRecoilValue);

  // change password api
  const { mutate } = useMutation(
    () => authApi.findPassword(tokenRecoilValue, confirmPw),
    {
      onSuccess() {
        router.push(RoutePath.Login);
      },
      onError(err) {
        alert(err);
      },
    }
  );

  const onSubmit = () => {
    mutate();
  };
  return {
    tabState: {
      title: "비밀번호 변경",
      onActive:
        confirmPw == newPassword && confirmPw !== "" && newPassword !== "",
      onClick: onSubmit,
    },
    newPwState: {
      value: newPassword,
      onChange: handleNewPwChange,
      error: isNewPwError,
      helperText: isNewPwError ? "비밀번호 형식을 맞춰주세요" : "",
    },
    confirmPwState: {
      value: confirmPw,
      onChange: handleConfirmPwChange,
      error: isConfirmPwError,
      helperText: isConfirmPwError
        ? "입력하신 새 비밀번호와 일치하지 않습니다."
        : "",
    },
  };
};
