import { deleteDeviceInfo } from "@/common/flutter-bridge/flutter-bridge";
import { RoutePath } from "@/constants/Path";
import MemberApiService from "@/data/apis/member/member.api";
import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";

export const useSecessionView = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordFieldError, setIsPasswordFieldError] = useState(false);

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // 비밀번호 필드 생성시
  const handlePasswordErrorChange = () => {
    setIsPasswordFieldError(true);
  };

  const isPasswordError = password !== "test";
  const isButtonDisabled = isChecked === false;

  const { mutate } = useMutation(() => MemberApiService.deleteMember(), {
    onSuccess: () => {
      LocalStorage.removeItem("jwt");
      LocalStorage.removeItem("id");
      deleteDeviceInfo(window);
      router.push(RoutePath.Home);
    },
    onError: (res: any) => {
      alert("오류가 발생했습니다.");
      console.log(res);
    },
  });

  const onSubmit = () => {
    mutate();
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
