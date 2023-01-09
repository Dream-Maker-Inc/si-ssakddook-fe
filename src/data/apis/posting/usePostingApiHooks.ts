import PostingApiService from "./posting.api";
import {
  QueryFunctionContext,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
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

export const useFindAllHotPost = (size: number) => {
  return useQuery(["find-all-hot-post", size], () =>
    PostingApiService.findAllHotPost(size)
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

export const useFindAllPostByLikeCount = () => {
  return useQuery(["find-all-post-by-like"], () =>
    PostingApiService.findAllPostByLikeCount()
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

export const useFetchAllPostByCategory = (category: string) => {
  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    fetchNextPage,
    refetch,
    remove,
  } = useInfiniteQuery(
    ["find-all-post-by-category", category],
    ({ pageParam = 1 }: QueryFunctionContext) =>
      axiosClient.get<PostingItemsResponse>("/v1/posting", {
        params: { category, page: pageParam, size: 15 },
      }),
    {
      getNextPageParam: ({
        data: {
          data: { metaData },
        },
      }) => (metaData.isLast ? undefined : metaData.pageNumber + 1),
    }
  );

  return {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    fetchNextPage,
    refetch,
    remove,
  };
};

export const useFetchAllPostByKeyword = (keyword: string, size: number) =>
  useInfiniteQuery(
    ["all-post-by-keyword"],
    ({ pageParam = 1 }: QueryFunctionContext) =>
      axiosClient.get<PostingItemsResponse>("/v1/posting", {
        params: { keyword, page: pageParam, size },
      }),
    {
      getNextPageParam: ({
        data: {
          data: { metaData },
        },
      }) => (metaData.isLast ? undefined : metaData.pageNumber + 1),
    }
  );

export const useFetchAllCommentById = (size: number) =>
  useInfiniteQuery(
    ["all-comment-by-id", size],
    ({ pageParam = 1 }: QueryFunctionContext) =>
      axiosClient.get<CommentItemsResponse>("v1/comment/mine", {
        params: { page: pageParam, size },
      }),
    {
      getNextPageParam: ({
        data: {
          data: { metaData },
        },
      }) => (metaData.isLast ? undefined : metaData.pageNumber + 1),
    }
  );

export const useFetchAllPostsById = (size: number) =>
  useInfiniteQuery(
    ["all-posts-by-id", size],
    ({ pageParam = 1 }: QueryFunctionContext) =>
      axiosClient.get<PostingItemsResponse>("v1/posting/mine", {
        params: { page: pageParam, size },
      }),
    {
      getNextPageParam: ({
        data: {
          data: { metaData },
        },
      }) => (metaData.isLast ? undefined : metaData.pageNumber + 1),
    }
  );

export const useFetchAllCommentsByPostId = (
  size: number,
  postId: string,
  sort: string
) =>
  useInfiniteQuery(
    ["all-comments-by-post-id", postId, size, sort],
    ({ pageParam = 1 }: QueryFunctionContext) =>
      axiosClient.get<CommentItemsResponse>("v1/comment", {
        params: { page: pageParam, size, postingId: postId, sort },
      }),
    {
      getNextPageParam: ({
        data: {
          data: { metaData },
        },
      }) => (metaData.isLast ? undefined : metaData.pageNumber + 1),
    }
  );
