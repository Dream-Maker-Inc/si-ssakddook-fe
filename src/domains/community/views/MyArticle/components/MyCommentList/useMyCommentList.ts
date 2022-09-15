import { useFindAllCommentById } from "@/data/apis/posting/usePostingApiHooks";
import { useEffect } from "react";

export const useMyCommentList = () => {
  const page = "1";
  const size = "12";

  const { mutate, data, isSuccess, isError } = useFindAllCommentById(
    page,
    size
  );

  useEffect(() => {
    mutate();
  }, []);

  const models = data?.items;
  console.log(models);
  return { models };
};
