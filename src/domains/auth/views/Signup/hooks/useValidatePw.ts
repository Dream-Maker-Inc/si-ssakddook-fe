import { MemberAtom } from "@/recoil/Member/Member.atom";
import { Regex } from "@/utils/validation/common/CommonRegex";
import { useState } from "react";
import { useSetRecoilState } from "recoil";

export const useValidatePw = () => {
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const serRecoil = useSetRecoilState(MemberAtom);

  const handlePwChange = (e: string) => {
    setPw(e);
    serRecoil((old) => ({
      ...old,
      member: {
        ...old.member,
        password: e,
      },
    }));
  };

  const handleConfirmPwChange = (e: string) => {
    setConfirmPw(e);
  };
  const pwValidation = Regex.password.test(pw);
  const confirmPwValidation = confirmPw === pw;

  const isPwError = pw !== "" && !pwValidation;
  const isConfirmPwError = confirmPw !== "" && !confirmPwValidation && true;

  const getConfrimPwHelperText = isConfirmPwError
    ? "비밀번호가 일치하지 않아요 "
    : "";

  return {
    pw,
    handlePwChange,
    confirmPw,
    handleConfirmPwChange,
    isPwError,
    isConfirmPwError,
    getConfrimPwHelperText,
  };
};
