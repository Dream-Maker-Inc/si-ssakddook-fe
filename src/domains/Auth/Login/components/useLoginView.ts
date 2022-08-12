import { isEmailAddress } from "@/utils/validation/Email/EmailValidation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useLoginView = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [isEmailNotValid, setEmailNotValid] = useState(false);
  const router = useRouter();

  const emailValidation = isEmailAddress(email);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  useEffect(() => {
    setEmailNotValid(false);
  }, [email]);

  const handleLoginClick = () => {
    if (!emailValidation) {
      setEmailNotValid(true);
    } else {
      router.push("/auth/login");
      setEmailNotValid(false);
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
