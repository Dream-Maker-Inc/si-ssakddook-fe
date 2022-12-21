import LikeApiService from "@/data/apis/like/like.api";
import PostingApiService from "@/data/apis/posting/posting.api";
import { getTimeFromNow } from "@/utils/moment/DateMoment";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { PostingItemResponse } from "./../../../../../data/apis/posting/posting.dto";

export const useCommunityDetailView = () => {
  const router = useRouter();
  const postId = router.query.postId + "";

  const { data, isLoading, isError, refetch } = useGetPostingDetail(postId);

  const { mutate: createLike } = useMutation(
    () => LikeApiService.createLike(body!!),
    {
      onSuccess: (res: any) => {
        refetch();
      },
      onError: (err: any) => {
        console.log(err);
      },
    }
  );

  const { mutate: deleteLike } = useMutation(
    () => LikeApiService.deleteLike(data?.myLiked.id!!),
    {
      onSuccess: (res: any) => {
        refetch();
      },
      onError: (err: any) => {
        console.log(err);
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

  if (!data || data?.deletedAt) {
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
    },
    result: {
      postId: data.id,
      authorId: data.author.id,
      category: data.category,
      title: data.title,
      nickname: data.author.nickname,
      date: getTimeFromNow(data.createdAt),
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

const useGetPostingDetail = (postId: string) => {
  const router = useRouter();

  const handleSuccess = (data: PostingItemResponse) => {
    if (data.deletedAt) {
      router.back();
    }
  };

  const query = useQuery(
    ["getPostingDetail", postId],
    () => PostingApiService.findOneByPostId(postId),
    {
      onSuccess: handleSuccess,
      enabled: false,
    }
  );

  useEffect(() => {
    query.refetch();
  }, []);

  return query;
};
