import { RoutePath } from "@/constants/Path";
import { useGetCurrentMember } from "@/data/apis/member/useMemberApiHooks";
import { useQuery } from "react-query";
import { ClickBoxProps } from "../../types/MoreType.type";

export const useMyInformationView = () => {
  const { data } = useQuery("get-curr-member", useGetCurrentMember);

  const models: ClickBoxProps[] = [
    {
      title: "아이디",
      desc: data?.email as string,
      iconSrc: "/img/more/icon-id.svg",
      nextButtonState: false,
      onClickPath: RoutePath.MyInformation,
    },
    {
      title: "닉네임",
      desc: data?.nickname as string,
      iconSrc: "/img/more/icon-smile.svg",
      nextButtonState: true,
      onClickPath: RoutePath.ChangeNickname,
    },
    {
      title: "프로필 이미지",
      desc: "프로필 이미지를 변경할 수 있어요.",
      iconSrc: "/img/more/icon-smile.svg",
      nextButtonState: true,
      onClickPath: RoutePath.ChangeProfileImage,
    },
    {
      title: "비밀번호 변경",
      desc: "비밀번호를 잊으셨나요? 새로운 비밀번호로 변경할 수 있어요.",
      iconSrc: "/img/more/icon-password.svg",
      nextButtonState: true,
      onClickPath: RoutePath.ChangePassword,
    },
    {
      title: "로그아웃",
      desc: "로그아웃하면, 다음 접속 시 다시 로그인하셔야 해요.",
      iconSrc: "/img/more/icon-unsmile.svg",
      nextButtonState: true,
      onClickPath: RoutePath.Login,
    },
    {
      title: "회원 탈퇴",
      desc: "더이상 싹둑을 사용하지 않으시려면, 회원 탈퇴가 가능해요.",
      iconSrc: "/img/more/icon-exit.svg",
      nextButtonState: true,
      onClickPath: RoutePath.Secession,
    },
  ];

  return models;
};
