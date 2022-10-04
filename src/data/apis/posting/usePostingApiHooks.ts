import PostingApiService from "./posting.api";
import {
  QueryFunctionContext,
  useInfiniteQuery,
  useMutation,
  useQuery,
} from "react-query";
import { axiosClient } from "@/constants/api/client/client";
import { PostingItemsResponse } from "./posting.dto";

export const useCreatePost = () => {
  return useMutation((formData: any) => PostingApiService.createPost(formData));
};

export const useFindAllPost = (page: string, size: string) => {
  return useQuery(["find-all-post", page, size], () =>
    PostingApiService.findAllPost(page, size)
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
    ["all-post-by-category"],
    ({ pageParam = 1 }: QueryFunctionContext) =>
      axiosClient.get<PostingItemsResponse>("/v1/posting", {
        params: { page: pageParam, size },
      }),
    {
      getNextPageParam: ({ data: { metaData } }) =>
        metaData.isLast ? undefined : metaData.pageNumber + 1,
      onSuccess(data) {
        console.log(data);
      },
    }
  );
