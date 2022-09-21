import { useFindAllByMonth } from "@/data/apis/diary/useDiaryApiHooks";
import { format } from "date-fns";

export const useMemoCalendar = () => {
  // diary api
  const nowMonth = format(new Date(), "yyyy-MM");
  const {
    data: allDiaries,
    isLoading,
    isError,
    refetch,
  } = useFindAllByMonth(nowMonth);

  console.log("###");
  console.log(allDiaries);

  if (!allDiaries) {
    return {
      refetchState: {
        isLoading: isLoading,
        isError: isError,
      },
      reesult: null,
    };
  }

  return {
    refetchState: {
      isLoading: isLoading,
      isError: isError,
    },
    result: allDiaries,
  };
};
