import { LightColor } from "@/themes/Color";
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
      setIsIdError(true);
      setIdHelperText("이메일을 사용할 수 없어요");
    }
  };

  // nickname

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
    setIsIdError(false);
    setIsIdValidationPassed(false);
  }, [id]);

  const handleNicknameValidatorClick = () => {
    if (idValidation) {
      setIsIdValidationPassed(true);
      setIdHelperText("이메일을 사용할 수 있어요");
    } else if (!idValidation) {
      setIsIdError(true);
      setIdHelperText("이메일을 형식을 확인해주세요.");
    } else {
      setIsIdError(true);
      setIdHelperText("이메일을 사용할 수 없어요");
    }
  };

  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const handleConfirmPwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPw(e.target.value);
  };

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
    },
    pwState: {
      value: nickname,
      onChange: handlePwChange,
    },
    confirmPwState: {
      value: nickname,
      onChange: handleConfirmPwChange,
    },
  };
};
