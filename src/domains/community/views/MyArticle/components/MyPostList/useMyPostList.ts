import { useFetchAllPostsById } from "@/data/apis/posting/usePostingApiHooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useMyPostList = () => {
  const size = 15;

  const { ref, inView } = useInView();
  const { data, isLoading, isError, fetchNextPage, refetch, remove } =
    useFetchAllPostsById(size);

  const removeCacheAndRefetch = async () => {
    await remove();
    await refetch();
  };

  useEffect(() => {
    removeCacheAndRefetch();
  }, []);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (!data) {
    return {
      fetchState: {
        isLoading: isLoading,
        isError: isError,
      },
      result: null,
    };
  }

  return {
    fetchState: {
      isLoading: isLoading,
      isError: isError,
    },
    result: data,
    ref: ref,
  };
};
