import { useState } from "react";

export const useSignupView = () => {
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
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
