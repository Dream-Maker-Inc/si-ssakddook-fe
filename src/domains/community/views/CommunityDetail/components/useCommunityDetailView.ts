import { useFindOneByPostId } from "@/data/apis/posting/usePostingApiHooks";
import { getDateDiff } from "@/utils/DateDif/DateDiff";
import { useRouter } from "next/router";
import { useState } from "react";

export const useCommunityDetailView = () => {
  const router = useRouter();
  const postId = router.query.postId + "";

  const [like, setLike] = useState(false);
  const handleLikeChange = () => {
    setLike(!like);
  };

  const { data, isLoading, isError } = useFindOneByPostId(postId);

  if (!data) {
    return {
      fetchState: {
        isLoading: isLoading,
        isError: isError,
      },
      result: {
        category: "",
        title: "",
        nickname: "",
        date: "",
        content: "",
        attachments: [],
        likeCount: 0,
        onLike: handleLikeChange,
        isLike: like,
        commentCount: 0,
      },
      postId: postId,
    };
  }

  return {
    fetchState: {
      isLoading: isLoading,
      isError: isError,
    },
    result: {
      category: data.category,
      title: data.title,
      nickname: data.author.nickname,
      date: getDateDiff(data.createdAt),
      content: data.content,
      attachments: data.attachments,
      likeCount: data.likedCount,
      onLike: handleLikeChange,
      isLike: like,
      commentCount: data.commentCount,
    },
    postId: postId,
  };
};
