import PostingApiService from "./posting.api";
import {
  QueryClient,
  QueryFunctionContext,
  useInfiniteQuery,
  useMutation,
  useQuery,
} from "react-query";
import { axiosClient } from "@/constants/api/client/client";
import { CommentItemsResponse, PostingItemsResponse } from "./posting.dto";
import { queryClient } from "@/pages/_app";

export const useCreatePost = () => {
  return useMutation((formData: any) => PostingApiService.createPost(formData));
};

export const useFindAllPost = (size: number) => {
  return useQuery(["find-all-post", size], () =>
    PostingApiService.findAllPost(size)
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
  pageParam: number
) => {
  return useQuery(["find-all-post-by-category", category, pageParam], () =>
    PostingApiService.findAllPostByCategory(category, pageParam)
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

export const useUpdatePost = (postId: string, body: any) => {
  return useMutation(() => PostingApiService.updatePost(postId, body));
};

export const useFetchAllPostByCategory = (category: string, size: number) =>
  useInfiniteQuery(
    ["all-post-by-category", category, size],
    ({ pageParam = 1 }: QueryFunctionContext) =>
      axiosClient.get<PostingItemsResponse>("/v1/posting", {
        params: { category, page: pageParam, size },
      }),
    {
      getNextPageParam: ({ data: { metaData } }) =>
        metaData.isLast ? undefined : metaData.pageNumber + 1,
      onSuccess: (res) => {
        console.log(res);
      },
    }
  );

export const useFetchAllCommentById = (size: number) =>
  useInfiniteQuery(
    ["all-comment-by-id"],
    ({ pageParam = 1 }: QueryFunctionContext) =>
      axiosClient.get<CommentItemsResponse>("v1/comment/mine", {
        params: { page: pageParam, size },
      }),
    {
      getNextPageParam: ({ data: { metaData } }) =>
        metaData.isLast ? undefined : metaData.pageNumber + 1,
    }
  );

export const useFetchAllPostsById = (size: number) =>
  useInfiniteQuery(
    ["all-posts-by-id"],
    ({ pageParam = 1 }: QueryFunctionContext) =>
      axiosClient.get<PostingItemsResponse>("v1/posting/mine", {
        params: { page: pageParam, size },
      }),
    {
      getNextPageParam: ({ data: { metaData } }) =>
        metaData.isLast ? undefined : metaData.pageNumber + 1,
    }
  );

export const useFetchAllCommentsByPostId = (size: number, postId: string) =>
  useInfiniteQuery(
    ["all-comments-by-post-id", postId, size],
    ({ pageParam = 1 }: QueryFunctionContext) =>
      axiosClient.get<CommentItemsResponse>("v1/comment", {
        params: { page: pageParam, size, postingId: postId },
      }),
    {
      getNextPageParam: ({ data: { metaData } }) =>
        metaData.isLast ? undefined : metaData.pageNumber + 1,
      onSuccess(data) {
        console.log(data);
      },
    }
  );
