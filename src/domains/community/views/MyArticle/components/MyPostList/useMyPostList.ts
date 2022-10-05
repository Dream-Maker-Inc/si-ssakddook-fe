import { useFetchAllPostsById } from "@/data/apis/posting/usePostingApiHooks";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useMyPostList = () => {
  const size = 15;

  const { ref, inView } = useInView();
  const { data, isLoading, isError, error, isFetching, fetchNextPage } =
    useFetchAllPostsById(size);

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
