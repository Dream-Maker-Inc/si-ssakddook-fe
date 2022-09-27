import LikeApiService from "@/data/apis/like/like.api";
import { useFindOneByPostId } from "@/data/apis/posting/usePostingApiHooks";
import { getDateDiff } from "@/utils/DateDif/DateDiff";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

export const useCommunityDetailView = () => {
  const router = useRouter();
  const postId = router.query.postId + "";

  const handleLikeCreate = () => {
    createLike();
  };

  const handleDeleteCreate = () => {
    deleteLike();
  };

  const { data, isLoading, isError, refetch } = useFindOneByPostId(postId);
  const { mutate: createLike } = useMutation(
    () => LikeApiService.createLike(body),
    {
      onSuccess: (res: any) => {
        refetch();
      },
      onError: (res: any) => {
        console.log(res);
      },
    }
  );

  const { mutate: deleteLike } = useMutation(
    () => LikeApiService.deleteLike(data?.myLiked.id),
    {
      onSuccess: (res: any) => {
        console.log("success");
        console.log(res);
        refetch();
      },
      onError: (res: any) => {
        console.log("failed");
        console.log(res);
      },
    }
  );

  const body = {
    type: "posting",
    contentId: data?.id!!,
  };

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
        onLike: null,
        isLike: false,
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
      onLike: data.myLiked == null ? handleLikeCreate : handleDeleteCreate,
      isLike: data.myLiked == null ? false : true,
      commentCount: data.commentCount,
    },
    postId: postId,
  };
};
