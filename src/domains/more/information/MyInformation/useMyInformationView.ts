import { RoutePath } from "@/constants/Path";
import { useGetCurrentMember } from "@/data/apis/member/useMemberApiHooks";
import { logoutAndGoSplash } from "@/domains/auth/functions/auth.func";
import IconExit from "@/img/more/icon-exit.svg";
import IconId from "@/img/more/icon-id.svg";
import IconPassword from "@/img/more/icon-password.svg";
import IconSmile from "@/img/more/icon-smile.svg";
import IconUnsmile from "@/img/more/icon-unsmile.svg";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { ClickBoxProps } from "../../types/MoreType.type";

export const useMyInformationView = () => {
  const router = useRouter();

  const { data } = useQuery("get-curr-member", useGetCurrentMember);

  const handleLogout = () => {
    logoutAndGoSplash();
  };

  const models: ClickBoxProps[] = [
    {
      title: "아이디",
      desc: data?.email as string,
      iconSrc: IconId,
      nextButtonState: false,
      onClick: () => router.push(RoutePath.MyInformation),
    },
    {
      title: "닉네임",
      desc: data?.nickname as string,
      iconSrc: IconSmile,
      nextButtonState: true,
      onClick: () => router.push(RoutePath.ChangeNickname),
    },
    {
      title: "프로필 이미지",
      desc: "프로필 이미지를 변경할 수 있어요.",
      iconSrc: IconSmile,
      nextButtonState: true,
      onClick: () => router.push(RoutePath.ChangeProfileImage),
    },
    {
      title: "비밀번호 변경",
      desc: "새로운 비밀번호로 변경할 수 있어요.",
      iconSrc: IconPassword,
      nextButtonState: true,
      onClick: () => router.push(RoutePath.ChangePassword),
    },
    {
      title: "로그아웃",
      desc: "로그아웃하면, 다음 접속 시 다시 로그인하셔야 해요.",
      iconSrc: IconUnsmile,
      nextButtonState: true,
      onClick: handleLogout,
    },
    {
      title: "회원 탈퇴",
      desc: "더이상 싹둑을 사용하지 않으시려면, 회원 탈퇴가 가능해요.",
      iconSrc: IconExit,
      nextButtonState: true,
      onClick: () => router.push(RoutePath.Secession),
    },
  ];

  return models;
};
