import PostingApiService from "./diary.api";
import { useQuery } from "react-query";

export const useFindOneByDiaryId = (diaryId: string) => {
  return useQuery(["find-one-by-diary-id", diaryId], () =>
    PostingApiService.findOneByDiaryId(diaryId)
  );
};
export const useFindAllByMonth = (
  prevMonth: string,
  currMonth: string,
  nextMonth: string
) => {
  return useQuery(["find-all-by-month", prevMonth, currMonth, nextMonth], () =>
    PostingApiService.findAllByMonth(prevMonth, currMonth, nextMonth)
  );
};
