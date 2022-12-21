import { useFetchAllCommentsByPostId } from "@/data/apis/posting/usePostingApiHooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import LikeApiService from "@/data/apis/like/like.api";
import PostingApiService from "@/data/apis/posting/posting.api";
import { useMutation } from "react-query";

export const useCommunityCommentDetailView = () => {
  const router = useRouter();
  const { ref, inView } = useInView();
  const [comment, setComment] = useState("");
  const [postId, setPostId] = useState("");
  const size = 15;
  const sort = "-liked";

  useEffect(() => {
    if (router && router.query) {
      setPostId(router.query.postId + "");
    }
  }, [router]);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const { data, refetch, fetchNextPage } = useFetchAllCommentsByPostId(
    size,
    postId,
    sort
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
      onError: (err: any) => {
        console.log(err);
      },
    }
  );

  const body = {
    postingId: postId,
    content: comment,
  };

  // create comment
  const { mutate: createCommentMutate, data: createCommentData } = useMutation(
    (body: any) => PostingApiService.createComment(body),
    {
      onSuccess: (res) => {
        refetch();
        setComment("");
      },
    }
  );

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const onDelete = (commentId: string) => {
    deleteCommentMutate(commentId);
  };

  const onCommentSubmit = () => {
    createCommentMutate(body);
  };

  return {
    result: {
      models: data,
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
    ref: ref,
  };
};
