import { ApiFailedResponse } from "@/data/statusCode/FailedResponse";
import { DiaryItemResponse, DiaryItemsResponse } from "./diary.dto";

export interface DiaryApiInterface {
  createDiary(formData: any): Promise<ApiFailedResponse>;
  deleteDiary(diaryId: number): Promise<ApiFailedResponse>;
  updateDiary(diaryId: string, content: string): Promise<ApiFailedResponse>;
  findOneByDiaryId(diaryId: string): Promise<DiaryItemResponse>;
  findAllByMonth(
    prevMonth: string,
    currMonth: string,
    nextMonth: string
  ): Promise<DiaryItemsResponse>;
}
