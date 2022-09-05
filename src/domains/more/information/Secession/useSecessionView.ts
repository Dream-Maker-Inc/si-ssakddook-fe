import { useEffect, useState } from "react";

export const useSecessionView = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordFieldError, setIsPasswordFieldError] = useState(false);

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordErrorChange = () => {
    setIsPasswordFieldError(true);
  };

  const isPasswordError = password !== "test";
  const isButtonDisabled = password === "" || isChecked === false;

  const onSubmit = () => {
    if (isPasswordError) {
      handlePasswordErrorChange();
    } else {
      alert("submit");
    }
  };

  useEffect(() => {
    setIsPasswordFieldError(false);
  }, [password]);

  return {
    checkboxState: {
      check: isChecked,
      onChange: handleCheckChange,
    },
    passwordState: {
      value: password,
      onChange: handlePasswordChange,
      error: isPasswordFieldError,
      helperText: isPasswordFieldError && "비밀번호를 다시 확인해주세요.",
    },

    buttonState: {
      disable: isButtonDisabled,
      onClick: onSubmit,
    },
  };
};
