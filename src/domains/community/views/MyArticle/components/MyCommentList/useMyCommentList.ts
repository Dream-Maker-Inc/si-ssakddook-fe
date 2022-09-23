import { useFindAllCommentById } from "@/data/apis/posting/usePostingApiHooks";

export const useMyCommentList = () => {
  const page = "1";
  const size = "30";

  const { data, isLoading, isError } = useFindAllCommentById(page, size);
  const models = data?.items;

  if (!data) {
    return {
      fetchState: {
        isLoading: isLoading,
        isError: isError,
      },
      result: models,
    };
  }

  return {
    fetchState: {
      isLoading: isLoading,
      isError: isError,
    },
    result: models,
  };
};
