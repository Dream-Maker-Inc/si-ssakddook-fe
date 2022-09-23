import { useState } from "react";
import PostingApiService from "@/data/apis/posting/posting.api";
import { useMutation } from "react-query";

export const useCommunitySearchView = () => {
  const [search, setSearch] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const page = 1;
  const size = 30;

  const { data, isLoading, mutate } = useMutation(() =>
    PostingApiService.findAllPostByKeyword(search, page, size)
  );

  const handleKeywordSearch = () => {
    mutate();
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
