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

  const { data, isLoading, isError, error, refetch } =
    useFindAllCommentByPostId(postId, page, size);

  const { mutate: deleteCommentMutate, data: deleteCommentData } = useMutation(
    (commentId: string) => PostingApiService.deleteCommentById(commentId),
    {
      onSuccess: (res) => {
        refetch();
      },
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
        error,
      },
      result: null,
    };

  return {
    fetchState: {
      isLoading,
      isError,
      error,
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
  };
};
