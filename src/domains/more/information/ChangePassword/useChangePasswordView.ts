import { RoutePath } from "@/constants/Path";
import { useUpdatePassword } from "@/data/apis/member/useMemberApiHooks";
import { useRouter } from "next/router";
import { useState } from "react";
import { Regex } from "@/utils/validation/common/CommonRegex";
export const useChangePasswordView = () => {
  const router = useRouter();
  const [oldPassword, setCurrPw] = useState("");
  const [newPassword, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  const handleCurrPwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrPw(e.target.value);
  };
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

  // change nickname api
  const id = localStorage.getItem("id");
  const { mutate, isSuccess, isError } = useUpdatePassword(
    id!!,
    oldPassword,
    newPassword
  );

  if (isSuccess) {
    console.log("password change success");
    router.push(RoutePath.MyInformation);
  }
  if (isError) {
    console.log("password change failed");
  }

  const onSubmit = () => {
    mutate();
  };

  return {
    currPwState: {
      value: oldPassword,
      onChange: handleCurrPwChange,
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

    tabState: {
      title: "비밀번호 변경",
      onActive: oldPassword !== "" && newPassword !== "" && confirmPw != "",
      onClick: onSubmit,
    },
  };
};
