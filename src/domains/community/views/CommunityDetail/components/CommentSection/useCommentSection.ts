import LikeApiService from "@/data/apis/like/like.api";
import { useFindAllCommentByPostId } from "@/data/apis/posting/usePostingApiHooks";
import { useMutation, useQuery } from "react-query";
import PostingApiService from "@/data/apis/posting/posting.api";
import { useState } from "react";

export const useCommentSection = (postId: string) => {
  const page = "1";
  const size = "30";

  const [comment, setComment] = useState("");
  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  // find comment
  const { data, isLoading, isError, refetch } = useFindAllCommentByPostId(
    postId,
    page,
    size
  );

  // delete comment
  const { mutate: deleteCommentMutate, data: deleteCommentData } = useMutation(
    (commentId: string) => PostingApiService.deleteCommentById(commentId),
    {
      onSuccess: (res) => {
        refetch();
      },
    }
  );

  // create like
  const { mutate: createLike } = useMutation(
    (likeBody: any) => LikeApiService.createLike(likeBody),
    {
      onSuccess: (res: any) => {
        refetch();
      },
      onError: (res: any) => {},
    }
  );

  // delete like
  const { mutate: deleteLike } = useMutation(
    (id: number) => LikeApiService.deleteLike(id),
    {
      onSuccess: (res: any) => {
        refetch();
      },
      onError: (res: any) => {},
    }
  );

  const body = {
    postingId: postId,
    content: comment,
  };

  const { mutate: createCommentMutate, data: createCommentData } = useMutation(
    (body: any) => PostingApiService.createComment(body),
    {
      onSuccess: (res) => {
        refetch();
        setComment("");
      },
    }
  );

  const onDelete = (commentId: string) => {
    deleteCommentMutate(commentId);
  };

  const onCommentSubmit = () => {
    createCommentMutate(body);
  };

  if (!data)
    return {
      fetchState: {
        isLoading,
        isError,
      },
      result: null,
    };

  return {
    fetchState: {
      isLoading,
      isError,
    },
    result: {
      models: data.items,
      buttonState: {
        onDelete: onDelete,
      },
    },
    commentState: {
      value: comment,
      onChange: handleCommentChange,
      onSubmit: onCommentSubmit,
    },
    likeState: {
      createLike: createLike,
      deleteLike: deleteLike,
    },
  };
};
