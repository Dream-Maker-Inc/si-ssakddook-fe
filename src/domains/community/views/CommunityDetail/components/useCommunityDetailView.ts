import LikeApiService from "@/data/apis/like/like.api";
import { useFindOneByPostId } from "@/data/apis/posting/usePostingApiHooks";
import { getDateDiff } from "@/utils/DateDif/DateDiff";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

export const useCommunityDetailView = () => {
  const router = useRouter();
  const postId = router.query.postId + "";

  const { data, isLoading, isError, refetch } = useFindOneByPostId(postId);
  const { mutate: createLike } = useMutation(
    () => LikeApiService.createLike(body!!),
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
    () => LikeApiService.deleteLike(data?.myLiked.id!!),
    {
      onSuccess: (res: any) => {
        refetch();
      },
      onError: (res: any) => {
        console.log(res);
      },
    }
  );

  const isLike = data?.myLiked == null ? false : true;
  const body = {
    type: "posting",
    contentId: data?.id!!,
  };

  const handleLikeCreate = () => {
    createLike();
  };
  const handleDeleteCreate = () => {
    deleteLike();
  };

  if (!data) {
    return {
      fetchState: {
        isLoading: isLoading,
        isError: isError,
      },
      result: {
        postId: 0,
        authorId: 0,
        category: "",
        title: "",
        nickname: "",
        date: "",
        content: "",
        attachments: [],
        likeCount: 0,
        onLike: () => null,
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
      refetch: refetch,
    },
    result: {
      postId: data.id,
      authorId: data.author.id,
      category: data.category,
      title: data.title,
      nickname: data.author.nickname,
      date: getDateDiff(data.createdAt),
      content: data.content,
      attachments: data.attachments,
      likeCount: data.likedCount,
      onLike: isLike ? handleDeleteCreate : handleLikeCreate,
      isLike: isLike,
      commentCount: data.commentCount,
    },
    postId: postId,
  };
};
