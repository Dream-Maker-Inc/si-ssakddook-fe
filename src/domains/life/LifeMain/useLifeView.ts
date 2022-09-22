import { getDateDiff } from "@/utils/DateDif/DateDiff";
import { useFindAllLife } from "./../../../data/apis/life/useLifeApiHooks";
export const useLifeView = () => {
  let page = 1;
  let size = 30;

  const { data, isLoading, isError, error } = useFindAllLife(page, size);

  console.log("### life ###");
  console.log(data);

  if (isError) {
    console.log(error);
  }

  if (!data) {
    return {
      fetchState: {
        isLoading: isLoading,
        isError: isError,
      },

      result: null,
    };
  }
  return {
    fetchState: {
      isLoading: isLoading,
      isError: isError,
    },

    result: data.items,
  };
};
