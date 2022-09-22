import { useFindAllPostByKeyword } from "./../../../../data/apis/posting/usePostingApiHooks";
import { useState } from "react";

export const useCommunitySearchView = () => {
  const [search, setSearch] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const page = 1;
  const size = 30;

  const { data, refetch, isLoading } = useFindAllPostByKeyword(
    search,
    page,
    size
  );

  const handleKeywordSearch = () => {
    refetch();
  };

  if (!data) {
    return {
      searchState: {
        value: search,
        onChange: handleSearchChange,
        onSearch: handleKeywordSearch,
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
    },
    fetchState: {
      isLoading: isLoading,
    },
    result: data,
  };
};
