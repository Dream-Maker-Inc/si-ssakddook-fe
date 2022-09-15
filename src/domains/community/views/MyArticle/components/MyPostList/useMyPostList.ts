import { useFindAllPostById } from "@/data/apis/posting/usePostingApiHooks";
import { useEffect } from "react";

export const useMyPostList = () => {
  const page = "1";
  const size = "12";

  const { mutate, data, isSuccess, isError } = useFindAllPostById(page, size);

  useEffect(() => {
    mutate();
  }, []);

  const models = data?.items;

  return { models };
};
