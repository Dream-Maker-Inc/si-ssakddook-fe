import { LightColor } from "@/themes/Color";
import { Regex } from "@/utils/validation/common/CommonRegex";
import { isEmailAddress } from "@/utils/validation/Email/EmailValidation";
import { collapseClasses, colors } from "@mui/material";
import { useEffect, useState } from "react";

export const useSignupView = () => {
  const [id, setId] = useState("");
  const [isIdError, setIsIdError] = useState(false);
  const [isIdValidationPassed, setIsIdValidationPassed] = useState(false);
  const [idHelperText, setIdHelperText] = useState("");

  const idValidation = isEmailAddress(id);

  const [nickname, setNickname] = useState("");
  const [isNicknameError, setIsNicknameError] = useState(false);
  const [isNicknameValidationPassed, setIsNicknameValidationPassed] =
    useState(false);
  const [nicknameHelperText, setNicknameHelperText] = useState("");

  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  // id
  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  useEffect(() => {
    setIsIdError(false);
    setIsIdValidationPassed(false);
  }, [id]);

  const handleIdValidatorClick = () => {
    if (idValidation) {
      setIsIdValidationPassed(true);
      setIdHelperText("이메일을 사용할 수 있어요");
    } else if (!idValidation) {
      setIsIdError(true);
      setIdHelperText("이메일을 형식을 확인해주세요.");
    } else {
      // 중복인 겨우
      setIsIdError(true);
      setIdHelperText("이메일을 사용할 수 없어요");
    }
  };

  // nickname
  const nickValidation = Regex.nickname.test(nickname);

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
    setIsNicknameError(false);
    setIsNicknameValidationPassed(false);
  }, [nickname]);

  const handleNicknameValidatorClick = () => {
    if (nickValidation) {
      setIsNicknameValidationPassed(true);
      setNicknameHelperText("닉네임을 사용할 수 있어요");
    } else if (!nickValidation) {
      setIsNicknameError(true);
      setNicknameHelperText("닉네임을 형식을 확인해주세요.");
    } else {
      // 중복인 경우
      setIsNicknameError(true);
      setNicknameHelperText("닉네임을 사용할 수 없어요");
    }
  };

  // pw
  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const pwValidation = Regex.password.test(pw) ? true : false;

  // confirm pw
  const handleConfirmPwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPw(e.target.value);
  };

  const confirmPwValidation = confirmPw === pw ? true : false;

  return {
    idState: {
      value: id,
      onChange: handleIdChange,
      helperText:
        (isIdError && idHelperText) || (isIdValidationPassed && idHelperText),
      isValidationPassed: isIdValidationPassed,
      error: isIdError,
      color: isIdError ? LightColor.Error : LightColor.PrimaryDark,
      onValidatorClick: handleIdValidatorClick,
      disabled: !id || isIdError || isIdValidationPassed,
    },
    nicknameState: {
      value: nickname,
      onChange: handleNicknameChange,
      helperText:
        (isNicknameError && nicknameHelperText) ||
        (isNicknameValidationPassed && nicknameHelperText),
      isValidationPassed: isNicknameValidationPassed,
      error: isNicknameError,
      color: isNicknameError ? LightColor.Error : LightColor.PrimaryDark,
      onValidatorClick: handleNicknameValidatorClick,
      disabled: !nickname || isNicknameError || isNicknameValidationPassed,
    },
    pwState: {
      value: pw,
      onChange: handlePwChange,
      error: !pwValidation && pw !== "" ? true : false,
      helperText: !pwValidation && pw !== "" && "비밀번호 조건을 확인해주세요.",
    },
    confirmPwState: {
      value: confirmPw,
      onChange: handleConfirmPwChange,
      error: !confirmPwValidation && confirmPw !== "" ? true : false,
      helperText:
        (!confirmPwValidation &&
          confirmPw !== "" &&
          "비밀번호가 일치하지 않아요.") ||
        (confirmPwValidation && confirmPw !== "" && "비밀번호가 일치해요."),
      color: !confirmPwValidation ? LightColor.Error : LightColor.PrimaryDark,
    },
  };
};
