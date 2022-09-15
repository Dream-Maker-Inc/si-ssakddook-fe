import { RoutePath } from "@/constants/Path";
import { ClickBoxProps } from "../types/MoreType.type";

export const useMoreView = () => {
  const models: ClickBoxProps[] = [
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
      onClickPath: RoutePath.Setting,
    },
    {
      title: "기타",
      desc: "공지사항, 앱 정보, 회사 소개 등을 조회할 수 있어요.",
      iconSrc: "/img/more/icon-more.svg",
      nextButtonState: true,
      onClickPath: RoutePath.Etc,
    },
  ];

  return models;
};