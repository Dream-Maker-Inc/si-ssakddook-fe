import { useValidateEmail } from "@/data/apis/member/useMemberApiHooks";
import { MemberAtom } from "@/recoil/Member/Member.atom";
import { validateEmail } from "@/utils/validation/Email/EmailValidation";
import { useState } from "react";
import { useSetRecoilState } from "recoil";

export const useValidationEmail = () => {
  // id
  // 이메일 값
  const [email, setEmail] = useState("");
  const serRecoil = useSetRecoilState(MemberAtom);

  // 중복 확인 요청 여부
  const [isRequestedEmailValidation, setIsRequestedEmailValidation] =
    useState(false);

  // api
  const { mutate, isSuccess, data, isError, error } = useValidateEmail(email);

  // 이메일 형식 검사
  const isValidEmail = validateEmail(email);

  // button
  const isEmailValidationButotnDisabled =
    isRequestedEmailValidation || !isValidEmail;

  // functions
  const handleEmailChange = (e: string) => {
    setIsRequestedEmailValidation(false);
    setEmail(e);
    serRecoil((old) => ({
      ...old,
      member: {
        ...old.member,
        email: e,
      },
    }));
  };
  const handleRequestEmailValidation = () => {
    mutate();
    setIsRequestedEmailValidation(true);
  };

  // 서버 이메일 중복확인 성공 여부
  const isEmailValidationPassed = data?.isValid ?? false;

  const getEmailHelperText = () => {
    if (email === "") return "";
    if (!isValidEmail) return "이메일 형식을 확인해주세요.";
    if (!isRequestedEmailValidation) return;

    return isEmailValidationPassed
      ? "이메일을 사용할 수 있어요"
      : "이메일을 사용할 수 없어요";
  };

  // 이메일 텍스트 필드 헬퍼 텍스트
  const emailHelperText = getEmailHelperText();
  const emailHelperTextColor =
    isRequestedEmailValidation && isEmailValidationPassed ? "primary" : "error";
  const isEmailError = email !== "" && !isValidEmail;

  return {
    email,
    handleEmailChange,
    isEmailError,
    isEmailValidationPassed,
    emailHelperText,
    emailHelperTextColor,
    isEmailValidationButotnDisabled,
    handleRequestEmailValidation,
  };
};
