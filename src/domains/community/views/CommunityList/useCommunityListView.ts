import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useFetchAllPostByCategory } from "@/data/apis/posting/usePostingApiHooks";

export const useCommunityListView = () => {
  const router = useRouter();
  let category = router.query.category + "";
  const size = 15;

  if (category == "undefined") {
    category = "";
  }

  const { ref, inView } = useInView();
  const { data, isLoading, isError, error, isFetching, fetchNextPage } =
    useFetchAllPostByCategory(category, size);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (isError) {
    console.log(error);
  }

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
