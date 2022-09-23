import { useFindOneByPostId } from "@/data/apis/posting/usePostingApiHooks";
import { getDateDiff } from "@/utils/DateDif/DateDiff";
import { useRouter } from "next/router";

export const useCommunityDetailView = () => {
  const router = useRouter();
  const postId = router.query.postId + "";

  const { data, isLoading, isError } = useFindOneByPostId(postId);

  if (!data) {
    return {
      fetchState: {
        isLoading: isLoading,
        isError: isError,
      },
      models: {
        category: "",
        title: "",
        nickname: "",
        date: "",
        content: "",
        attachments: [],
        likeCount: 0,
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
    models: {
      category: data.posting.category,
      title: data.posting.title,
      nickname: data.member.nickname,
      date: getDateDiff(data.posting.createdAt),
      content: data.posting.content,
      attachments: data.posting.attachments,
      likeCount: data.likedCount,
      commentCount: data.commentCount,
    },
    postId: postId,
  };
};
