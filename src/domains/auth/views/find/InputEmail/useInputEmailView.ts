import { RoutePath } from "@/constants/Path";
import authApi from "@/data/apis/auth/auth.api";
import IamCertificationApi from "@/data/apis/certification/certification.api";
import { isApiFailedResponse } from "@/data/statusCode/FailedResponse";
import { useRouter } from "next/router";
import { useState } from "react";

export const useInputEmailView = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const handleChangeEmail = (e: string) => {
    setEmail(e);
  };

  const handleRequestPw = async () => {
    // iamport 인증
    IamCertificationApi.iamportCertificate(
      async (response) => {
        const { imp_uid } = response;

        const { certificationToken } =
          await IamCertificationApi.crossValidateUid(imp_uid);

        const res = await authApi.findId(certificationToken);

        if (isApiFailedResponse(res)) {
          router.push(RoutePath.FindIdFail);
        } else {
          router.push(
            {
              pathname: RoutePath.FindIdSuccess,
              query: {
                email: res.email,
              },
            },
            RoutePath.FindIdSuccess
          );
        }
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const isTextFilled = email.length == 0;

  const handleSubmit = () => {};
  return {
    fieldState: {
      title: "아이디 (이메일) 입력",
      desc: "회원가입 시 등록한 아이디 (이메일) 을 입력해 주세요.",
      value: email,
      onChange: handleChangeEmail,
      onSubmit: handleSubmit,
    },
    buttonState: {
      onSubmit: handleRequestPw,
      disabled: isTextFilled ? true : false,
    },
  };
};
