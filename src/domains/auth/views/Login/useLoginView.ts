import {
  DeviceInfo,
  handleGetDeviceInfo,
} from "@/common/flutter-bridge/flutter-bridge";
import { axiosBasicClient, axiosClient } from "@/constants/api/client/client";
import { RoutePath } from "@/constants/Path";
import AuthApiService from "@/data/apis/auth/auth.api";
import { LoginApiResponse } from "@/data/apis/auth/auth.dto";
import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { isApiFailedResponse } from "@/data/statusCode/FailedResponse";
import { validateEmail } from "@/utils/validation/Email/EmailValidation";
import { AxiosError } from "axios";
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

  // JWT 저장 후 메인 화면 이동
  const saveJwtAndGoMain = (accessToken: string) => {
    LocalStorage.setItem("jwt", accessToken);
    router.push(RoutePath.Main);
  };

  // 로그인 성공 핸들링
  const handleLoginSuccess = async (res: LoginApiResponse) => {
    // 로그인 실패
    if (isApiFailedResponse(res)) {
      return alert("이메일과 비밀번호를 확인해주세요.");
    }

    // flutter 웹뷰가 아닌 경우
    const _window = window as any;
    if (!_window?.flutter_inappwebview) {
      return saveJwtAndGoMain(res.accessToken);
    }

    //
    const deviceInfo = await handleGetDeviceInfo(window);
    await registerUserDevice(res.accessToken, deviceInfo)
      .then(() => saveJwtAndGoMain(res.accessToken))
      .catch((e) => alert(e));
  };

  // 로그인 뮤테이션
  const { mutate, isLoading } = useMutation(
    () => AuthApiService.login(email, pw),
    {
      onSuccess: handleLoginSuccess,
      onError: (err: AxiosError) => {
        console.error(err);
        alert(`로그인에 실패했습니다. (${err.status})`);
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

// 유저 디바이스 정보 서버로 전달
const registerUserDevice = (accessToken: string, deviceInfo: DeviceInfo) => {
  return axiosBasicClient.post(
    "/v1/device",
    {
      uuid: deviceInfo.uuid,
      modelName: deviceInfo.model,
      deviceToken: deviceInfo.token,
    },
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  );
};
