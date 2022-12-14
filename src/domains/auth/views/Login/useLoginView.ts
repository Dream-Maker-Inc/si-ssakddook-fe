import { handleGetDeviceInfo } from "@/common/flutter-bridge/flutter-bridge";
import { RoutePath } from "@/constants/Path";
import AuthApiService from "@/data/apis/auth/auth.api";
import { LoginApiResponse } from "@/data/apis/auth/auth.dto";
import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { isApiFailedResponse } from "@/data/statusCode/FailedResponse";
import { validateEmail } from "@/utils/validation/Email/EmailValidation";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useMutation } from "react-query";
import DeviceApiService from "@/data/apis/device/device.api";
import { StatusCode } from "@/data/statusCode/StatusCode.enum";

export const useLoginView = () => {
  // 자동 로그인 해제
  const memberId = LocalStorage.getItem("id");
  if (memberId !== "undefined" || memberId !== null) {
    LocalStorage.removeItem("id");
  }
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [isEmailNotValid, setEmailNotValid] = useState(false);
  const emailValidation = validateEmail(email);
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);
  const [noticeText, setNoticeText] = useState("");
  const handleNoticeOpen = () => setIsNoticeOpen(true);
  const handleNoticeClose = () => setIsNoticeOpen(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

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
    router.replace(RoutePath.Main);
  };

  // 로그인 성공 핸들링
  const handleLoginSuccess = async (res: LoginApiResponse | any) => {
    // 로그인 실패
    if (isApiFailedResponse(res)) {
      if (res.statusCode == StatusCode.BLIND_MEMBER) {
        setNoticeText("사용이 차단된 계정입니다.");
        handleNoticeOpen();
        return;
      } else {
        setNoticeText("아이디 또는 비밀번호가 잘못되었습니다.");
        handleNoticeOpen();
        return;
      }
    }

    // flutter 웹뷰가 아닌 경우
    const _window = window as any;
    if (!_window?.flutter_inappwebview) {
      return saveJwtAndGoMain(res.data.accessToken);
    }

    // 유저 디바이스 정보 서버로 전달
    const deviceInfo = await handleGetDeviceInfo(window);
    await DeviceApiService.registerDevice(res.data.accessToken, deviceInfo)
      .then(() => saveJwtAndGoMain(res.data.accessToken))
      .catch((e) => {
        setNoticeText("디바이스 연결에 실패했습니다.");
        handleNoticeOpen();
      });
  };

  // 로그인 뮤테이션
  const { mutate, isLoading } = useMutation(
    () => AuthApiService.login(email, pw),
    {
      onSuccess: handleLoginSuccess,
      onError: (err: AxiosError) => {
        console.error(err);
        setNoticeText("아이디 또는 비밀번호가 잘못되었습니다.");
        handleNoticeOpen();
      },
    }
  );

  useEffect(() => {
    setEmailNotValid(false);
  }, [email]);

  const handleLoginClick = () => {
    if (!emailValidation) {
      setEmailNotValid(true);
      setNoticeText("이메일 형식을 확인해주세요.");
      handleNoticeOpen();
    } else {
      mutate();
    }
  };

  // tab 클릭시 비밀번호 필드로 이동
  const handleKeyPressMovePwField = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key == "Tab") {
      inputRef.current?.focus();
    }
  };

  // enter 클릭 시 로그인
  const handleKeyPressLogin = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter" && email !== "" && pw !== "") {
      if (!emailValidation) {
        setEmailNotValid(true);
        setNoticeText("이메일 형식을 확인해주세요.");
        handleNoticeOpen();
      } else {
        mutate();
      }
    }
  };

  return {
    emailState: {
      value: email,
      onChange: handleEmailChange,
      error: isEmailNotValid,
      onKeyPressMove: handleKeyPressMovePwField,
    },
    pwState: {
      value: pw,
      onChange: handlePwChange,
      onKeyPressLogin: handleKeyPressLogin,
      ref: inputRef,
    },
    login: {
      disabled: !email || !pw || isEmailNotValid,
      onClick: handleLoginClick,
      isLoading: isLoading,
    },

    modalState: {
      isOpen: isNoticeOpen,
      onClose: handleNoticeClose,
      text: noticeText,
    },
  };
};
