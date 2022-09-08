import { formatToPhoneNumberWithDash } from "@/utils/format/PhoneWithDash";
import { useEffect, useState } from "react";

export const useInputPhoneNumberView = () => {
  const [phone, setPhone] = useState("");
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  let test;

  useEffect(() => {
    formatToPhoneNumberWithDash(phone);
  }, [phone]);

  return {
    phoneState: {
      value: test,
      onChange: handlePhoneChange,
    },
  };
};
