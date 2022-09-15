import { useEffect } from "react";
import {
  useDeleteCommentById,
  useFindAllCommentByPostId,
} from "@/data/apis/posting/usePostingApiHooks";

export const useCommentSection = (postId: string) => {
  const page = "1";
  const size = "2";
  const { mutate, data } = useFindAllCommentByPostId(postId, page, size);

  useDeleteCommentById(postId);

  useEffect(() => {
    mutate();
  }, []);

  console.log(data?.items);

  return {
    models: data?.items,
  };
};
