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

  id = LocalStorage.getItem("id");
  jwt = LocalStorage.getItem("jwt");
  config = {
    headers: { Authorization: `Bearer ${this.jwt}` },
  };

  async createDiary(body: any): Promise<ApiFailedResponse> {
    const response = await axiosClient.post(
      "/v1/diary-item",
      body,
      this.config
    );
    return response.data;
  }

  async deleteDiary(diaryId: number): Promise<ApiFailedResponse> {
    const response = await axiosClient.delete(
      `/v1/diary-item/${diaryId}`,
      this.config
    );
    return response.data;
  }

  async updateDiary(
    diaryId: string,
    content: string
  ): Promise<ApiFailedResponse> {
    const response = await axiosClient.patch(
      `/v1/diary-item/${diaryId}`,
      { content },
      this.config
    );
    return response.data;
  }

  async findOneByDiaryId(diaryId: string): Promise<DiaryItemResponse> {
    const response = await axiosClient.get(
      `/v1/diary-item/${diaryId}`,
      this.config
    );
    return response.data;
  }

  async findAllByMonth(month: string): Promise<DiaryItemsResponse> {
    const response = await axiosClient.get(
      `/v1/diary-item?date=${month}`,
      this.config
    );
    return response.data;
  }
}

export default DiaryApiService.Instance;
