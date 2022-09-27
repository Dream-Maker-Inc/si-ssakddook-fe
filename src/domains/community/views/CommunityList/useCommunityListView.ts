import { useFindAllPostByCategory } from "@/data/apis/posting/usePostingApiHooks";
import { useRouter } from "next/router";

export const useCommunityListView = () => {
  const router = useRouter();
  let category = router.query.category + "";
  const page = "1";
  const size = "30";

  if (category == "undefined") {
    category = "";
  }

  const { data, isLoading, isError } = useFindAllPostByCategory(
    category,
    page,
    size
  );

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
    category: category == "" ? "최근 게시글" : category,
    fetchState: {
      isLoading: isLoading,
      isError: isError,
    },
    result: data?.items,
  };
};
