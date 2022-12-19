import { axiosClient } from "@/constants/api/client/client";
import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { ApiFailedResponse } from "@/data/statusCode/FailedResponse";
import { DiaryItemResponse, DiaryItemsResponse } from "./diary.dto";
import { DiaryApiInterface } from "./diary.interface";

class DiaryApiService implements DiaryApiInterface {
  private static instance: DiaryApiService;
  static get Instance(): DiaryApiService {
    return this.instance || (this.instance = new this());
  }

  get id() {
    return LocalStorage.getItem("id");
  }

  async createDiary(body: any): Promise<ApiFailedResponse> {
    const response = await axiosClient.post("/v1/diary-item", body);
    console.log(response.data);
    return response.data;
  }

  async deleteDiary(diaryId: number): Promise<ApiFailedResponse> {
    const response = await axiosClient.delete(`/v1/diary-item/${diaryId}`);
    return response.data.data;
  }

  async updateDiary(
    diaryId: string,
    content: string
  ): Promise<ApiFailedResponse> {
    const response = await axiosClient.patch(`/v1/diary-item/${diaryId}`, {
      content,
    });
    return response.data.data;
  }

  async findOneByDiaryId(diaryId: string): Promise<DiaryItemResponse> {
    const response = await axiosClient.get(`/v1/diary-item/${diaryId}`);
    return response.data.data;
  }

  async findAllByMonth(
    prevMonth: string,
    currMonth: string,
    nextMonth: string
  ): Promise<DiaryItemsResponse> {
    const response = await axiosClient.get(
      `/v1/diary-item?date=${prevMonth}&date=${currMonth}&date=${nextMonth}`
    );
    return response.data.data;
  }
}

export default DiaryApiService.Instance;
