import { useFindAllCommentByPostId } from "@/data/apis/posting/usePostingApiHooks";
import { useMutation, useQuery } from "react-query";
import PostingApiService from "@/data/apis/posting/posting.api";

export const useCommentSection = (postId: string) => {
  const page = "1";
  const size = "30";

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

  const onDelete = (commentId: string) => {
    deleteCommentMutate(commentId);
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
  };
};
