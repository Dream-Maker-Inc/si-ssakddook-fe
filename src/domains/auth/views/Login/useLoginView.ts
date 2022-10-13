import { handleGetDeviceInfo } from "@/common/flutter-bridge/flutter-bridge";
import { RoutePath } from "@/constants/Path";
import AuthApiService from "@/data/apis/auth/auth.api";
import { LoginApiResponse } from "@/data/apis/auth/auth.dto";
import LocalStorage from "@/data/LocalStorage/LocalStorage";
import {
  ApiFailedResponse,
  isApiFailedResponse,
} from "@/data/statusCode/FailedResponse";
import { validateEmail } from "@/utils/validation/Email/EmailValidation";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import DeviceApiService from "@/data/apis/device/device.api";
import { StatusCode } from "@/data/statusCode/StatusCode.enum";

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
    const value = e.target.value;

    setEmail(value.trim());
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
  const handleLoginSuccess = async (res: LoginApiResponse | any) => {
    // 로그인 실패
    if (isApiFailedResponse(res)) {
      if (res.statusCode == StatusCode.BLIND_MEMBER) {
        return alert("사용이 차단된 계정입니다.");
      } else {
        return alert("이메일과 비밀번호를 확인해주세요.");
      }
    }

    // flutter 웹뷰가 아닌 경우
    const _window = window as any;
    if (!_window?.flutter_inappwebview) {
      return saveJwtAndGoMain(res.accessToken);
    }

    // 유저 디바이스 정보 서버로 전달
    const deviceInfo = await handleGetDeviceInfo(window);
    await DeviceApiService.registerDevice(res.accessToken, deviceInfo)
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
      alert("이메일 형식을 확인해주세요.");
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
