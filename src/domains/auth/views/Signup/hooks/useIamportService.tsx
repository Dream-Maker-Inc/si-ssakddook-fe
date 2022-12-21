import { RoutePath } from "@/constants/Path";
import IamCertificationApi from "@/data/apis/certification/certification.api";
import memberApi from "@/data/apis/member/member.api";
import { MemberAtom } from "@/recoil/Member/Member.atom";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { StatusCode } from "@/data/statusCode/StatusCode.enum";
import { isApiFailedResponse } from "@/data/statusCode/FailedResponse";

export const useSignupService = () => {
  const router = useRouter();
  const memberModel = useRecoilValue(MemberAtom);
  const { member, termsIds } = memberModel;

  const requestSignup = async () => {
    // iamport 인증
    IamCertificationApi.iamportCertificate(
      async (response) => {
        const { imp_uid } = response;

        const { certificationInfo } =
          await IamCertificationApi.crossValidateUid(imp_uid);
        const { username, phone, birthDay } = certificationInfo;

        const res = await memberApi.signup({
          member: {
            email: member.email,
            password: member.password,
            nickname: member.nickname,
            name: username,
            birthDay,
            phone,
          },
          termsIds,
        });

        if (isApiFailedResponse(res)) {
          // api failed
          getErrorMessage(res.statusCode);
        } else {
          // api success
          router.push(RoutePath.SignupSuccess);
        }
      },
      (error) => {
        alert("오류가 발생했습니다.");
        console.error(error);
      }
    );
  };

  const getErrorMessage = (statusCode: string) => {
    switch (statusCode) {
      case StatusCode.DUPLICATED_PHONE:
        return alert("이미 사용중인 휴대폰 번호입니다.");
      case StatusCode.LACK_OF_AGREEMENTS:
        return alert("필수 서비스 약관이 누락 되었습니다.");
      default:
        return;
    }
  };

  return {
    requestSignup,
  };
};
