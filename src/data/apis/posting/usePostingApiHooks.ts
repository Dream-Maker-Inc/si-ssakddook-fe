import PostingApiService from "./posting.api";
import { useMutation, useQuery } from "react-query";

export const useCreatePost = () => {
  return useMutation((formData: any) => PostingApiService.createPost(formData));
};

export const useFindAllPost = (
  page: string,
  size: string,
  withDeleted: boolean
) => {
  return useQuery(["find-all-post", page, size, withDeleted], () =>
    PostingApiService.findAllPost(page, size, withDeleted)
  );
};

export const useFindAllPostByKeyword = (
  keyword: string,
  page: number,
  size: number
) => {
  return useQuery(["find-all-post-by-keyword", keyword, page, size], () =>
    PostingApiService.findAllPostByKeyword(keyword, page, size)
  );
};

export const useFindAllPostById = (page: string, size: string) => {
  return useQuery(["find-all-post-by-id", page, size], () =>
    PostingApiService.findAllPostById(page, size)
  );
};

export const useFindAllCommentById = (page: string, size: string) => {
  return useQuery(["find-all-cpmment-by-id", page, size], () =>
    PostingApiService.findAllCommentById(page, size)
  );
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

export const useFindAllPostByCategory = (
  category: string,
  page: string,
  size: string
) => {
  return useQuery(["find-all-post-by-category", category, page, size], () =>
    PostingApiService.findAllPostByCategory(category, page, size)
  );
};

export const useFindOneByPostId = (postId: string) => {
  return useQuery(["find-post-by-id", postId], () =>
    PostingApiService.findOneByPostId(postId)
  );
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

export const useCreateComment = (body: any) => {
  return useMutation(() => PostingApiService.createComment(body));
};
