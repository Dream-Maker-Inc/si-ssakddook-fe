import { useRouter } from "next/router";

import { useInView } from "react-intersection-observer";
import { useEffect, useMemo } from "react";

import { useFetchAllPostByCategory } from "@/data/apis/posting/usePostingApiHooks";

export const useCommunityListView = () => {
  const router = useRouter();
  let category = router.query.category + "";
  const size = 14;

  if (category == "undefined") {
    category = "";
  }

  const { ref, inView } = useInView();
  const { data, isLoading, isError, isFetching, fetchNextPage } =
    useFetchAllPostByCategory(category, size);

  if (isError) {
    console.log(data);
  }

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
      ref: ref,
    };
  }

  return {
    category: category == "" ? "최근 게시글" : category,
    fetchState: {
      isLoading: isLoading,
      isError: isError,
      isFetching: isFetching,
    },
    result: data,
    ref: ref,
  };
};
