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
  const { data: postCommentData, isError: postCommentDataError } =
    useFindAllPostByLikeCount();

  // 최근 TOP5 라이프 포스팅
  const { data: lifeData, isError: lifeDataError } = useFindAllLife(5);

  // 조회수 TOP5 라이프 포스팅
  const { data: lifeViewData, isError: lifeViewDataError } =
    useFindAllLifeByViewCount(5);

  return {
    post: {
      data: postData?.items,
      isError: postDataError,
    },
    postByLike: {
      data: postCommentData?.items,
      isError: postCommentDataError,
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
