import { useFindAllPostById } from "@/data/apis/posting/usePostingApiHooks";

export const useMyPostList = () => {
  const page = "1";
  const size = "30";

  const { data, isLoading, isError } = useFindAllPostById(page, size);
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
