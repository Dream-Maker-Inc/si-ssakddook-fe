import DiaryApiService from "@/data/apis/diary/diary.api";
import { isApiFailedResponse } from "@/data/statusCode/FailedResponse";
import { addMonths, format, subMonths } from "date-fns";
import { useState } from "react";
import { useQuery } from "react-query";

export const useMemoCalendar = (month: any) => {
  const formattedDate = (date: any) => {
    return format(date, "yyyy-MM");
  };

  const [allDiaries, setAllDiaries] = useState<any[]>([]);
  const temp: any[] = [];

  // diary api
  const currMonth = formattedDate(month);
  const nextMonth = formattedDate(addMonths(month, 1));
  const prevMonth = formattedDate(subMonths(month, 1));

  const { data, isLoading, isError } = useQuery(
    ["all-diaries", prevMonth, currMonth, nextMonth],
    () => DiaryApiService.findAllByMonth(prevMonth, currMonth, nextMonth),
    {
      onSuccess: (res) => {
        if (isApiFailedResponse(res)) {
          return;
        } else {
          res?.map((item) => setAllDiaries((old) => [...old, ...item.data]));
        }
      },
    }
  );

  if (!data) {
    return {
      refetchState: {
        isLoading: isLoading,
        isError: isLoading,
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
