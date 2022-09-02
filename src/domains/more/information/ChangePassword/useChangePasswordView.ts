import { TextFieldProps } from "@mui/material";
import { useState } from "react";
export const useChangePasswordView = () => {
  const [currPw, setCurrPw] = useState("");
  const [newPw, setNewPw] = useState("");
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
    confirmPw !== newPw && confirmPw !== "" && newPw !== "" ? true : false;

  return {
    currPwStae: {
      value: currPw,
      onChange: handleCurrPwChange,
    },
    newPwStae: {
      value: newPw,
      onChange: handleNewPwChange,
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
