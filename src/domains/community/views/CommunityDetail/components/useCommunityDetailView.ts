import LikeApiService from "@/data/apis/like/like.api";
import PostingApiService from "@/data/apis/posting/posting.api";
import { StatusCode } from "@/data/statusCode/StatusCode.enum";
import { NoticeModalAtom } from "@/recoil/Modal/NoticeModal.atom";
import { getTimeFromNow } from "@/utils/moment/DateMoment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { PostingItemResponse } from "./../../../../../data/apis/posting/posting.dto";

export const useCommunityDetailView = () => {
  const router = useRouter();
  const postId = router.query.postId + "";

  // notice-modal atom
  const [isNoticeOopen, setIsNoticeOpen] = useRecoilState(NoticeModalAtom);

  const useGetPostingDetail = (postId: string) => {
    const router = useRouter();

    const handleSuccess = (res: PostingItemResponse | any) => {
      if (res.statusCode == StatusCode.BLIND_POSTING) {
        setIsNoticeOpen(true);
        router.back();
        return;
      } else if (res?.deletedAt) {
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
    () => LikeApiService.deleteLike(data?.data?.myLiked?.id ?? 0),
    {
      onSuccess: (res: any) => {
        refetch();
      },
      onError: (err: any) => {
        console.log(err);
      },
    }
  );

  const isLike = data && (data.data?.myLiked == null ? false : true);
  const body = {
    type: "posting",
    contentId: data && data.data?.id!!,
  };

  const handleLikeCreate = () => {
    createLike();
  };
  const handleDeleteCreate = () => {
    deleteLike();
  };

  if (!data || !data.data || (data.data && data.data?.deletedAt)) {
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
      postId: data.data.id,
      authorId: data.data.author.id,
      category: data.data.category,
      title: data.data.title,
      nickname: data.data.author.nickname,
      date: getTimeFromNow(data.data.createdAt),
      content: data.data.content,
      attachments: data.data.attachments,
      likeCount: data.data.likedCount,
      onLike: isLike ? handleDeleteCreate : handleLikeCreate,
      isLike: isLike,
      commentCount: data.data.commentCount,
    },

    postId: postId,
  };
};
