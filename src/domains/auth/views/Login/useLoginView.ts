import { RoutePath } from "@/constants/Path";
import { useLogin } from "@/data/apis/auth/useAuthApiHooks";
import { validateEmail } from "@/utils/validation/Email/EmailValidation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useLoginView = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [isEmailNotValid, setEmailNotValid] = useState(false);
  const emailValidation = validateEmail(email);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const { mutate, isSuccess, isError, data } = useLogin(email, pw);

  if (isSuccess) {
    if (data.accessToken !== null) {
      console.log(data.accessToken);
      localStorage.setItem("jwt", data.accessToken);
      router.push(RoutePath.Main);
    } else {
      console.log("로그인에 실패했습니다.");
    }
  } else if (isError) {
    console.log(data);
  }

  useEffect(() => {
    setEmailNotValid(false);
  }, [email]);

  const handleLoginClick = () => {
    if (!emailValidation) {
      setEmailNotValid(true);
    } else {
      mutate();
    }
  };

  return {
    emailState: {
      value: email,
      onChange: handleEmailChange,
      error: isEmailNotValid,
    },
    pwState: {
      value: pw,
      onChange: handlePwChange,
    },
    login: {
      disabled: !email || !pw || isEmailNotValid,
      onClick: handleLoginClick,
    },
  };
};
