import LikeApiService from "@/data/apis/like/like.api";
import PostingApiService from "@/data/apis/posting/posting.api";
import {
  useFindAllCommentByPostId,
  useFindOneByPostId,
} from "@/data/apis/posting/usePostingApiHooks";
import { useState } from "react";
import { useMutation } from "react-query";

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
  const { mutate: createLike, data: commentLike } = useMutation(
    (likeBody: any) => LikeApiService.createLike(likeBody),
    {
      onSuccess: (res: any) => {
        refetch();
      },
      onError: (err: any) => {
        console.log(err);
      },
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

  // create comment
  const { refetch: postRefetch } = useFindOneByPostId(postId);

  const { mutate: createCommentMutate, data: createCommentData } = useMutation(
    (body: any) => PostingApiService.createComment(body),
    {
      onSuccess: (res) => {
        setComment("");
        postRefetch();
        refetch();
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
      models: data.data.items,
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
