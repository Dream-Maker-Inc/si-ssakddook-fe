import { LightColor } from "@/themes/Color";
import { useEffect, useState } from "react";
import { useSignupService } from "./useIamportService";
import { useValidatePw } from "./useValidatePw";
import { useValidationEmail } from "./useValidationEmail";
import { useValidationNickname } from "./useValidationNickname";

export const useSignupView = () => {
  // email
  const {
    email,
    handleEmailChange,
    isEmailError,
    isEmailValidationPassed,
    emailHelperText,
    emailHelperTextColor,
    isEmailValidationButotnDisabled,
    handleRequestEmailValidation,
  } = useValidationEmail();

  const emailState = {
    value: email,
    onChange: handleEmailChange,
    isError: isEmailError,
    helperText: {
      text: emailHelperText,
      color: emailHelperTextColor,
    },
    button: {
      disabled: isEmailValidationButotnDisabled,
      onClick: handleRequestEmailValidation,
    },
  };

  // nickname
  const {
    nickname,
    handleNicknameChange,
    isNicknameError,
    isNicknameValidationPassed,
    nicknameHelperText,
    nicknameHelperTextColor,
    isNicknameValidationButotnDisabled,
    handleRequestNicknameValidation,
  } = useValidationNickname();

  const nicknameState = {
    value: nickname,
    onChange: handleNicknameChange,
    isError: isNicknameError,
    helperText: {
      text: nicknameHelperText,
      color: nicknameHelperTextColor,
    },
    button: {
      disabled: isNicknameValidationButotnDisabled,
      onClick: handleRequestNicknameValidation,
    },
  };

  // password
  const {
    pw,
    handlePwChange,
    confirmPw,
    handleConfirmPwChange,
    isPwError,
    isConfirmPwError,
    getConfrimPwHelperText,
  } = useValidatePw();

  const passwordState = {
    value: pw,
    onChange: handlePwChange,
    isError: isPwError,
    helperText: isPwError && "비밀번호 조건을 확인해주세요.",
  };
  const confirmPasswordState = {
    value: confirmPw,
    onChange: handleConfirmPwChange,
    isError: isConfirmPwError,
    helperText: getConfrimPwHelperText,
    color: isConfirmPwError ? LightColor.Error : LightColor.PrimaryDark,
  };

  // checkbox
  const [firstCheck, setFirstCheck] = useState(false);
  const [secondCheck, setSecondCheck] = useState(false);
  const [thirdCheck, setThirdCheck] = useState(false);

  const handleFirstCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstCheck(e.target.checked);
  };
  const handleSecondCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondCheck(e.target.checked);
  };
  const handleThirdCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setThirdCheck(e.target.checked);
  };

  //submit button
  const isButtonDisabled =
    !isEmailValidationPassed ||
    !isNicknameValidationPassed ||
    !pw ||
    !confirmPw ||
    isPwError ||
    isConfirmPwError ||
    firstCheck === false ||
    secondCheck === false;

  useEffect(() => {
    // 가맹점 식별 코드
    const StoreUid = "imp12349201";
    const imp = window.IMP;
    imp.init(StoreUid);
  }, []);

  const { requestSignup } = useSignupService();

  return {
    emailState,
    nicknameState,
    passwordState,
    confirmPasswordState,

    checkState: {
      firstCheck: {
        value: firstCheck,
        onChange: handleFirstCheckChange,
      },
      secondCheck: {
        value: secondCheck,
        onChange: handleSecondCheckChange,
      },
      thirdCheck: {
        value: thirdCheck,
        onChange: handleThirdCheckChange,
      },
    },
    buttonState: {
      disabled: isButtonDisabled,
      onClick: requestSignup,
    },
  };
};
