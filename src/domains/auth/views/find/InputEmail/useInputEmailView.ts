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
import { useNoticeModal } from "@/common/components/modal/NoticeModal/useNoticeModal";
import { ContentPasteSearchOutlined } from "@mui/icons-material";

export const useInputEmailView = () => {
  const router = useRouter();

  const {
    isNoticeOpen,
    onNoticeClose,
    onNoticeOpen,
    noticeText,
    onNoticeTextChange,
  } = useNoticeModal();

  const [email, setEmail] = useState("");
  const [isEmailExisted, setIsEmailExisted] = useState(true);
  const tokenRecoilValue = useSetRecoilState(CertificationTokenAtom);
  const handleChangeEmail = (e: string) => {
    setEmail(e);
  };

  useEffect(() => {
    // 가맹점 식별 코드
    const StoreUid = "imp12349201";
    const imp = window.IMP;
    imp.init(StoreUid);
  }, []);

  // email 존재여부 api
  const { mutate, data } = useMutation(
    () => MemberApiService.validateEmail(email),
    {
      onSuccess(res) {
        if (isApiFailedResponse(res)) {
          if (res.statusCode === "JE0001") {
            handleRequestPw();
            return;
          }
          onNoticeTextChange("에러가 발생했습니다.");
          onNoticeOpen();
        } else {
          setIsEmailExisted(false);
          return;
        }
      },
      onError(err) {
        onNoticeTextChange("에러가 발생했습니다.");
        onNoticeOpen();
        console.log(err);
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

        if (res.data.email == email) {
          return router.push(RoutePath.FindPasswordSuccess);
        }
        return router.push(RoutePath.FindIdFail);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const onKeyPressSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter" && !isEmailError) {
      mutate();
    }
  };
  return {
    fieldState: {
      title: "아이디 (이메일) 입력",
      desc: "회원가입 시 등록한 아이디 (이메일) 을 입력해 주세요.",
      value: email,
      onChange: handleChangeEmail,
      helperText: emailHelperText,
      color: emailHelperTextColor,
      error: isEmailError,
      onKeyPressSubmit: onKeyPressSubmit,
    },
    buttonState: {
      onSubmit: handleExistedEmailCheck,
      disabled: isEmailEmpty || isEmailError,
    },
    modalState: {
      noticeModal: {
        isOpen: isNoticeOpen,
        onClose: onNoticeClose,
        text: noticeText,
      },
    },
  };
};
