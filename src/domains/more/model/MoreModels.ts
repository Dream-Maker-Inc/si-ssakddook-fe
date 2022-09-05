import { RoutePath } from "@/constants/Path";

export type ClickBoxProps = {
  title: string;
  desc: string;
  iconSrc: string;
  nextButtonState: boolean;
  onClickPath: string;
};

export type EtcBoxProps = {
  title: string;
  iconSrc: string;
  onClickPath: string;
};
export const moreModel: ClickBoxProps[] = [
  {
    title: "내 정보",
    desc: "닉네임과 비밀번호를 변경할 수 있어요.",
    iconSrc: "/img/more/icon-smile.svg",
    nextButtonState: true,
    onClickPath: RoutePath.MyInformation,
  },
  {
    title: "설정",
    desc: "앱 설정을 변경할 수 있어요.",
    iconSrc: "/img/more/icon-setting.svg",
    nextButtonState: true,
    onClickPath: RoutePath.MyInformation,
  },
  {
    title: "기타",
    desc: "공지사항, 앱 정보, 회사 소개 등을 조회할 수 있어요.",
    iconSrc: "/img/more/icon-more.svg",
    nextButtonState: true,
    onClickPath: RoutePath.MyInformation,
  },
];

export const myInformationModel: ClickBoxProps[] = [
  {
    title: "아이디",
    desc: "lonelycat123",
    iconSrc: "/img/more/icon-id.svg",
    nextButtonState: false,
    onClickPath: RoutePath.MyInformation,
  },
  {
    title: "닉네임",
    desc: "고독한 강아지",
    iconSrc: "/img/more/icon-smile.svg",
    nextButtonState: true,
    onClickPath: RoutePath.ChangeNickname,
  },
  {
    title: "프로필 이미지",
    desc: "프로필 이미지를 변경할 수 있어요.",
    iconSrc: "/img/more/icon-smile.svg",
    nextButtonState: true,
    onClickPath: RoutePath.MyInformation,
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
    onClickPath: RoutePath.MyInformation,
  },
  {
    title: "회원 탈퇴",
    desc: "더이상 싹둑을 사용하지 않으시려면, 회원 탈퇴가 가능해요.",
    iconSrc: "/img/more/icon-exit.svg",
    nextButtonState: true,
    onClickPath: RoutePath.MyInformation,
  },
];

export const etcModel: EtcBoxProps[] = [
  {
    title: "공지 사항",
    iconSrc: "/img/more/etc/icon-notice.svg",
    onClickPath: "",
  },
  {
    title: "회사 소개",
    iconSrc: "/img/more/etc/icon-company.svg",
    onClickPath: "",
  },
  {
    title: "약관 및 정책",
    iconSrc: "/img/more/etc/icon-policy.svg",
    onClickPath: "",
  },
];
