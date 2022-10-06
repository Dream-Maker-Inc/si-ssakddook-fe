import { handleGetDeviceInfo } from "@/common/flutter-bridge/flutter-bridge";
import { axiosBasicClient, axiosClient } from "@/constants/api/client/client";
import { RoutePath } from "@/constants/Path";
import AuthApiService from "@/data/apis/auth/auth.api";
import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { isApiFailedResponse } from "@/data/statusCode/FailedResponse";
import { validateEmail } from "@/utils/validation/Email/EmailValidation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";

export const useLoginView = () => {
  // 자동 로그인 해제
  const memberId = LocalStorage.getItem("id");
  if (memberId !== "undefined" || memberId !== null) {
    LocalStorage.setItem("id", "");
  }

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

  const { mutate, isLoading } = useMutation(
    () => AuthApiService.login(email, pw),
    {
      onSuccess: async (res) => {
        if (isApiFailedResponse(res)) {
          alert("이메일과 비밀번호를 확인해주세요.");
        } else {
          const deviceInfo = await handleGetDeviceInfo(window);
          axiosBasicClient
            .post(
              "/v1/device",
              {
                uuid: deviceInfo.uuid,
                modelName: deviceInfo.model,
                deviceToken: deviceInfo.token,
              },
              {
                headers: {
                  Authorization: "Bearer " + res.accessToken,
                },
              }
            )
            .then((e) => {
              LocalStorage.setItem("jwt", res.accessToken);
              router.push(RoutePath.Main);
            })
            .catch((e) => alert(e));
        }
      },
      onError: (err) => {
        alert(err);
      },
    }
  );

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
      isLoading: isLoading,
    },
  };
};
