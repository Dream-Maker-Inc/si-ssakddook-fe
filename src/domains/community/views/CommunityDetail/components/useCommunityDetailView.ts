import { useFindOneByPostId } from "@/data/apis/posting/usePostingApiHooks";
import { useEffect, useState } from "react";

export const useCommunityDetailView = (postId: string) => {
  const [comment, setComment] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const { mutate, data } = useFindOneByPostId(postId);

  useEffect(() => {
    mutate();
  }, []);

  return {
    commentState: {
      value: comment,
      onChange: handleSearchChange,
    },
    models: data,
  };
};
