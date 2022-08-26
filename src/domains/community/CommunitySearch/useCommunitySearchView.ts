import { useState } from "react";

export const useCommunitySearchView = () => {
  const [search, setSearch] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return {
    searchState: {
      value: search,
      onChange: handleSearchChange,
    },
  };
};
