import { DiaryItemResponse } from "@/data/apis/diary/diary.dto";
import { useFindAllByMonth } from "@/data/apis/diary/useDiaryApiHooks";
import { addMonths, format, subMonths } from "date-fns";

export const useMemoCalendar = (month: any) => {
  const formattedDate = (date: any) => {
    return format(date, "yyyy-MM");
  };

  // diary api
  const currMonth = formattedDate(month);
  const nextMonth = formattedDate(addMonths(month, 1));
  const prevMonth = formattedDate(subMonths(month, 1));

  const { data, isLoading, isError, refetch } = useFindAllByMonth(
    prevMonth,
    currMonth,
    nextMonth
  );

  let allDiaries = <any>[];
  data?.forEach((item) => allDiaries.push(...item.data));

  if (!data) {
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