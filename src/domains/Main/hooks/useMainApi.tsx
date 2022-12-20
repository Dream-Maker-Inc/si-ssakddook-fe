import {
  useFindAllLife,
  useFindAllLifeByViewCount,
} from "@/data/apis/life/useLifeApiHooks";
import {
  useFindAllPost,
  useFindAllPostByLikeCount,
} from "@/data/apis/posting/usePostingApiHooks";

export const useMainApi = () => {
  // 최근 TOP5 포스팅
  const { data: postData, isError: postDataError } = useFindAllPost(5);

  // 좋아요 TOP5 포스팅
  const { data: postMostLikeData, isError: postMostLikeDataError } =
    useFindAllPostByLikeCount();

  console.log("postData");
  console.log(postData);
  console.log("postMostLikeData");
  console.log(postMostLikeData);

  // 최근 TOP5 라이프 포스팅
  const { data: lifeData, isError: lifeDataError } = useFindAllLife(5);

  // 조회수 TOP5 라이프 포스팅
  const { data: lifeViewData, isError: lifeViewDataError } =
    useFindAllLifeByViewCount(5);

  return {
    post: {
      data: postData?.data.items,
      isError: postDataError,
    },
    postByLike: {
      data: postMostLikeData?.data,
      isError: postMostLikeDataError,
    },
    lifePost: {
      data: lifeData?.data.items,
      isError: lifeDataError,
    },
    lifePostByView: {
      data: lifeViewData?.data.items,
      isError: lifeViewDataError,
    },
  };
};
