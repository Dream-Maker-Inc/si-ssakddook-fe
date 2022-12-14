import { RoutePath } from "@/constants/Path";
import { ClickBoxProps } from "../types/MoreType.type";
import IconSmile from "@/img/more/icon-smile.svg";
import IconSetting from "@/img/more/icon-setting.svg";
import IconMore from "@/img/more/icon-more.svg";
import { useRouter } from "next/router";

export const useMoreView = () => {
  const router = useRouter();

  const models: ClickBoxProps[] = [
    {
      title: "내 정보",
      desc: "닉네임과 비밀번호를 변경할 수 있어요.",
      iconSrc: IconSmile,
      nextButtonState: true,
      onClick: () => router.push(RoutePath.MyInformation),
    },
    {
      title: "설정",
      desc: "앱 설정을 변경할 수 있어요.",
      iconSrc: IconSetting,
      nextButtonState: true,
      onClick: () => router.push(RoutePath.Setting),
    },
    {
      title: "기타",
      desc: "공지사항, 앱 정보, 회사 소개 등을 조회할 수 있어요.",
      iconSrc: IconMore,
      nextButtonState: true,
      onClick: () => router.push(RoutePath.Etc),
    },
  ];

  return models;
};
