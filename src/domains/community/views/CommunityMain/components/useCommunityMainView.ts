import { RoutePath } from "@/constants/Path";
import { useFindAllPost } from "@/data/apis/posting/usePostingApiHooks";
import { useRouter } from "next/router";
import IconPerson from "@/img/community/boxIcons/icon-person.svg";
import IconHeart from "@/img/community/boxIcons/icon-heart.svg";
import IconSchool from "@/img/community/boxIcons/icon-school.svg";
import IconHouse from "@/img/community/boxIcons/icon-house.svg";
import IconViolence from "@/img/community/boxIcons/icon-violence.svg";
import IconCyberViolence from "@/img/community/boxIcons/icon-cyber-violence.svg";
import IconEmoji from "@/img/community/boxIcons/icon-emoji.svg";
import IconGift from "@/img/community/boxIcons/icon-gift.svg";
import IconStar from "@/img/community/boxIcons/icon-star.svg";
import IconConcern from "@/img/community/boxIcons/icon-concern.svg";
import IconEtc from "@/img/community/boxIcons/icon-etc.svg";

export const useCommunityMainView = () => {
  const router = useRouter();
  const communitBoxInfos = [
    {
      imgSrc: IconPerson,
      hoverImgSrc: IconPerson,
      address: "/community",
      content: "직장 폭력",
    },
    {
      imgSrc: IconHeart,
      hoverImgSrc: IconHeart,
      address: "/community",
      content: "데이트 폭력",
    },
    {
      imgSrc: IconSchool,
      hoverImgSrc: IconSchool,
      address: "/community",
      content: "학교 폭력",
    },
    {
      imgSrc: IconHouse,
      hoverImgSrc: IconHouse,
      address: "/community",
      content: "가정 폭력",
    },
    {
      imgSrc: IconViolence,
      hoverImgSrc: IconViolence,
      address: "/community",
      content: "성폭력",
    },
    {
      imgSrc: IconCyberViolence,
      hoverImgSrc: IconCyberViolence,
      address: "/community",
      content: "사이버 폭력",
    },
    {
      imgSrc: IconEmoji,
      hoverImgSrc: IconEmoji,
      address: "/community",
      content: "우울증",
    },
    {
      imgSrc: IconGift,
      hoverImgSrc: IconGift,
      address: "/community",
      content: "비밀",
    },
    {
      imgSrc: IconStar,
      hoverImgSrc: IconStar,
      address: "/community",
      content: "취미 공유",
    },
    {
      imgSrc: IconConcern,
      hoverImgSrc: IconConcern,
      address: "/community",
      content: "고민",
    },
    {
      imgSrc: IconEtc,
      hoverImgSrc: IconEtc,
      address: "/community",
      content: "기타",
    },
  ];

  const size = 5;
  const { data, isLoading, isError } = useFindAllPost(size);

  const handleViewRecentPost = () => {
    router.push({ pathname: RoutePath.CommunityList, query: { category: "" } });
  };

  if (!data) {
    return {
      fetchState: {
        isLoading,
        isError,
      },
      result: null,
    };
  }
  return {
    boxData: communitBoxInfos,
    fetchState: {
      isLoading,
      isError,
    },
    result: data.items,
    onRecentView: handleViewRecentPost,
  };
};
