import { EtcBoxProps } from "../../types/MoreType.type";
import IconNotice from "@/img/more/etc/icon-notice.svg";
import IconCompany from "@/img/more/etc/icon-company.svg";
import IconService from "@/img/more/etc/icon-policy.svg";

export const useEtcMainView = () => {
  const models: EtcBoxProps[] = [
    {
      title: "공지 사항",
      iconSrc: IconNotice,
      onClickPath: "https://ssakduk.com/notice",
    },
    {
      title: "회사 소개",
      iconSrc: IconCompany,
      onClickPath: "https://ssakduk.com/intro/index.html",
    },
    {
      title: "약관 및 정책",
      iconSrc: IconService,
      onClickPath: "https://ssakduk.com/policy",
    },
  ];

  return models;
};
