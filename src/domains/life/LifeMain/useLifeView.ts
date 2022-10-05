import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useFetchAllLife } from "./../../../data/apis/life/useLifeApiHooks";

export const useLifeView = () => {
  const size = 15;

  const { ref, inView } = useInView();
  const { data, isLoading, isError, error, isFetching, fetchNextPage } =
    useFetchAllLife(size);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

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
      isFetching: isFetching,
    },

    result: data,
    ref: ref,
  };
};
