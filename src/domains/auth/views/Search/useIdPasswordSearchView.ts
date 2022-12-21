import { useNoticeModal } from "@/common/components/modal/NoticeModal/useNoticeModal";
import { RoutePath } from "@/constants/Path";
import authApi from "@/data/apis/auth/auth.api";
import IamCertificationApi from "@/data/apis/certification/certification.api";
import { isApiFailedResponse } from "@/data/statusCode/FailedResponse";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useIdPasswordSearchView = () => {
  const router = useRouter();

  useEffect(() => {
    // 가맹점 식별 코드
    const StoreUid = "imp12349201";
    const imp = window.IMP;
    imp.init(StoreUid);
  }, []);

  const { isNoticeOpen, onNoticeOpen, noticeText, onNoticeTextChange } =
    useNoticeModal();

  const onNoticeClose = () => {
    router.push(RoutePath.Login);
  };

  const handleRequestId = async () => {
    // iamport 인증
    IamCertificationApi.iamportCertificate(
      async (response) => {
        const { imp_uid } = response;

        const { certificationToken } =
          await IamCertificationApi.crossValidateUid(imp_uid);

        const res = await authApi.findId(certificationToken);

        if (isApiFailedResponse(res)) {
          if (res.statusCode === "CE0002") {
            onNoticeTextChange("가입되지 않은 사용자입니다");
            onNoticeOpen();
            return;
          }
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

  const handleFindId = () => {
    handleRequestId();
  };

  const handleFindPw = () => {
    router.push(RoutePath.FindPassword);
  };

  return {
    titleState: {
      title: "회원 정보 찾기",
      desc: "찾으실 회원 정보를 선택해 주세요.",
    },
    idFieldState: {
      title: "아이디 (이메일) 찾기",
      desc: "휴대폰 번호를 통해 아이디 (이메일) 을 찾을 수 있어요.",
      onClick: handleFindId,
    },
    pwFieldState: {
      title: "비밀번호 찾기",
      desc: "휴대폰 번호를 통해 비밀번호를 찾을 수 있어요.",
      onClick: handleFindPw,
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
