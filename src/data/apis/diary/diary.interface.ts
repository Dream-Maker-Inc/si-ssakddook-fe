import { ApiFailedResponse } from "@/data/statusCode/FailedResponse";
import { DiaryItemResponse, DiaryItemsResponse } from "./diary.dto";

export interface DiaryApiInterface {
  // post
  createDiary(formData: any): Promise<ApiFailedResponse>;
  deleteDiary(diaryId: number): Promise<ApiFailedResponse>;
  updateDiary(diaryId: string, content: string): Promise<ApiFailedResponse>;
  findOneByDiaryId(diaryId: string): Promise<DiaryItemResponse>;
  findAllByMonth(month: string): Promise<DiaryItemsResponse>;
}
