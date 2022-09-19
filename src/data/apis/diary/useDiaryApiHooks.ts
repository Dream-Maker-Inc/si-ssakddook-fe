import PostingApiService from "./diary.api";
import { useQuery } from "react-query";

export const useFindOneByDiaryId = (diaryId: string) => {
  return useQuery(["find-one-by-diary-id", diaryId], () =>
    PostingApiService.findOneByDiaryId(diaryId)
  );
};
export const useFindAllByMonth = (month: string) => {
  return useQuery(["find-all-by-month", month], () =>
    PostingApiService.findAllByMonth(month)
  );
};
