import { useCallback, useEffect, useState } from "react";
import { useFetchAllPostByKeyword } from "@/data/apis/posting/usePostingApiHooks";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";

export const useCommunitySearchView = () => {
  const { ref, inView } = useInView();
  const [search, setSearch] = useState("");
  const router = useRouter();

  const size = 15;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleRemoveData = () => {
    router.back();
    remove();
  };

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const { data, isLoading, refetch, fetchNextPage, remove } =
    useFetchAllPostByKeyword(search, size);
  const handleKeywordSearch = () => {
    refetch();
  };

  if (!data) {
    return {
      searchState: {
        value: search,
        onChange: handleSearchChange,
        onSearch: handleKeywordSearch,
        onBack: handleRemoveData,
      },
      fetchState: {
        isLoading: isLoading,
      },
      return: null,
    };
  }

  return {
    searchState: {
      value: search,
      onChange: handleSearchChange,
      onSearch: handleKeywordSearch,
      onBack: handleRemoveData,
    },
    fetchState: {
      isLoading: isLoading,
    },
    result: data,
    ref: ref,
  };
};
