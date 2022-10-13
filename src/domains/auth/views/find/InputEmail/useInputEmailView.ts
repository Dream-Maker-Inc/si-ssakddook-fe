import { RoutePath } from "@/constants/Path";
import authApi from "@/data/apis/auth/auth.api";
import IamCertificationApi from "@/data/apis/certification/certification.api";
import { isApiFailedResponse } from "@/data/statusCode/FailedResponse";
import { validateEmail } from "@/utils/validation/Email/EmailValidation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import MemberApiService from "@/data/apis/member/member.api";
import { useSetRecoilState } from "recoil";
import { CertificationTokenAtom } from "@/recoil/Member/Member.atom";

export const useInputEmailView = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isEmailExisted, setIsEmailExisted] = useState(true);
  const tokenRecoilValue = useSetRecoilState(CertificationTokenAtom);
  const handleChangeEmail = (e: string) => {
    setEmail(e);
  };

  // email 존재여부 api
  const { mutate, data } = useMutation(
    () => MemberApiService.validateEmail(email),
    {
      onSuccess(res) {
        if (isApiFailedResponse(res)) {
          handleRequestPw();
        } else if (res.isValid == true) {
          setIsEmailExisted(false);
          return;
        } else {
          console.log(res);
          alert("문제가 발생했습니다.");
        }
      },
      onError(err) {
        alert(err);
      },
    }
  );

  // api 호출
  const handleExistedEmailCheck = () => {
    mutate();
  };

  // 이메일 형식 검사
  const isValidEmail = validateEmail(email);

  const getEmailHelperText = () => {
    if (email === "") return "";
    if (!isValidEmail) return "이메일 형식을 확인해주세요.";
    if (!isEmailExisted) return "존재하지 않는 이메일입니다";
  };

  useEffect(() => {
    setIsEmailExisted(true);
  }, [email]);

  // 이메일 텍스트 필드 헬퍼 텍스트
  const emailHelperText = getEmailHelperText();
  const isEmailEmpty = email === "";
  const isEmailError = (!isEmailEmpty && !isValidEmail) || !isEmailExisted;
  const emailHelperTextColor =
    isEmailError || !isEmailExisted ? "error" : "primary";

  const handleRequestPw = async () => {
    // iamport 인증
    IamCertificationApi.iamportCertificate(
      async (response) => {
        const { imp_uid } = response;

        const { certificationToken } =
          await IamCertificationApi.crossValidateUid(imp_uid);

        // set recoil
        tokenRecoilValue(certificationToken);

        const res = await authApi.findId(certificationToken);

        if (isApiFailedResponse(res)) {
          return router.push(RoutePath.FindIdFail);
        } else {
          if (res.email == email) {
            return router.push(RoutePath.FindPasswordSuccess);
          }
          return router.push(RoutePath.FindIdFail);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const handleSubmit = () => {};
  return {
    fieldState: {
      title: "아이디 (이메일) 입력",
      desc: "회원가입 시 등록한 아이디 (이메일) 을 입력해 주세요.",
      value: email,
      onChange: handleChangeEmail,
      onSubmit: handleSubmit,
      helperText: emailHelperText,
      color: emailHelperTextColor,
      error: isEmailError,
    },
    buttonState: {
      onSubmit: handleExistedEmailCheck,
      disabled: isEmailEmpty || isEmailError,
    },
  };
};
