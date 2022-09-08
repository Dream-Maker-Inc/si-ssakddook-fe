import { useState } from "react";

export const useCommunityDetailView = () => {
  const [comment, setComment] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  return {
    commentState: {
      value: comment,
      onChange: handleSearchChange,
    },
  };
};
