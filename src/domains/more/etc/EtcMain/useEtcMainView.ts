import { EtcBoxProps } from "../../types/MoreType.type";

export const useEtcMainView = () => {
  const models: EtcBoxProps[] = [
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

  return models;
};
