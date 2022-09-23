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
      category: data.posting.category,
      title: data.posting.title,
      nickname: data.member.nickname,
      date: getDateDiff(data.posting.createdAt),
      content: data.posting.content,
      attachments: data.posting.attachments,
      likeCount: data.likedCount,
      onLike: handleLikeChange,
      isLike: like,
      commentCount: data.commentCount,
    },
    postId: postId,
  };
};
