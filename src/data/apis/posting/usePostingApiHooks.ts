import PostingApiService from "./posting.api";
import { useMutation, useQuery } from "react-query";

export const useCreatePost = () => {
  return useMutation((formData: any) => PostingApiService.create(formData));
};

export const useFindAllPostById = (page: string, size: string) => {
  return useMutation(() => PostingApiService.findAllPostById(page, size));
};

export const useFindAllCommentById = (page: string, size: string) => {
  return useMutation(() => PostingApiService.findAllCommentById(page, size));
};

export const useFindAllCommentByPostId = (
  postId: string,
  page: string,
  size: string
) => {
  return useQuery(["comment-by-postid", page, postId], () =>
    PostingApiService.findAllCommentByPostId(postId, page, size)
  );
};

export const useFindOneByPostId = (postId: string) => {
  return useMutation(() => PostingApiService.findOneByPostId(postId));
};

export const useFindAllPostByCategory = (body: any) => {
  return useMutation(() => PostingApiService.create(body));
};

export const useDeleteCommentById = (
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) => {
  return useMutation(
    (commentId: string) => PostingApiService.deleteCommentById(commentId),
    {
      onSuccess,
      onError,
    }
  );
};
