import { RoutePath } from "@/constants/Path";
import { useFindAllPost } from "@/data/apis/posting/usePostingApiHooks";
import { useRouter } from "next/router";

export const useCommunityMainView = () => {
  const router = useRouter();
  const communitBoxInfos = [
    {
      imgSrc: "/img/community/boxIcons/icon-person.svg",
      hoverImgSrc: "/img/community/hoverBoxIcons/icon-person.svg",
      address: "/community",
      content: "직장 폭력",
    },
    {
      imgSrc: "/img/community/boxIcons/icon-heart.svg",
      hoverImgSrc: "/img/community/hoverBoxIcons/icon-person.svg",
      address: "/community",
      content: "데이트 폭력",
    },
    {
      imgSrc: "/img/community/boxIcons/icon-school.svg",
      hoverImgSrc: "/img/community/hoverBoxIcons/icon-person.svg",
      address: "/community",
      content: "학교 폭력",
    },
    {
      imgSrc: "/img/community/boxIcons/icon-house.svg",
      hoverImgSrc: "/img/community/hoverBoxIcons/icon-person.svg",
      address: "/community",
      content: "가정 폭력",
    },
    {
      imgSrc: "/img/community/boxIcons/icon-violence.svg",
      hoverImgSrc: "/img/community/hoverBoxIcons/icon-person.svg",
      address: "/community",
      content: "성폭력",
    },
    {
      imgSrc: "/img/community/boxIcons/icon-cyber-violence.svg",
      hoverImgSrc: "/img/community/hoverBoxIcons/icon-person.svg",
      address: "/community",
      content: "사이버 폭력",
    },
    {
      imgSrc: "/img/community/boxIcons/icon-emoji.svg",
      hoverImgSrc: "/img/community/hoverBoxIcons/icon-person.svg",
      address: "/community",
      content: "우울증",
    },
    {
      imgSrc: "/img/community/boxIcons/icon-gift.svg",
      hoverImgSrc: "/img/community/hoverBoxIcons/icon-person.svg",
      address: "/community",
      content: "비밀",
    },
    {
      imgSrc: "/img/community/boxIcons/icon-star.svg",
      hoverImgSrc: "/img/community/hoverBoxIcons/icon-person.svg",
      address: "/community",
      content: "취미 공유",
    },
    {
      imgSrc: "/img/community/boxIcons/icon-concern.svg",
      hoverImgSrc: "/img/community/hoverBoxIcons/icon-person.svg",
      address: "/community",
      content: "고민",
    },
    {
      imgSrc: "/img/community/boxIcons/icon-etc.svg",
      hoverImgSrc: "/img/community/hoverBoxIcons/icon-person.svg",
      address: "/community",
      content: "기타",
    },
  ];

  const size = "5";
  const page = "1";
  const { data, isLoading, isError } = useFindAllPost(page, size);

  const handlePostView = () => {
    router.push(RoutePath.CommunityList);
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
    onRecentView: handlePostView,
  };
};
