import { axiosBasicClient, axiosClient } from "@/constants/api/client/client";
import { ActivatedPushItemResponse, PushItemsResponse } from "./push.dto";
import { PushApiInterface } from "./push.interface";

class PushApiService implements PushApiInterface {
  private static instance: PushApiService;
  static get Instance(): PushApiService {
    return this.instance || (this.instance = new this());
  }

  async findAllPush(): Promise<PushItemsResponse> {
    const response = await axiosClient.get(`/v1/push-notification`);
    return response.data;
  }

  async postPush(notificationId: number): Promise<ActivatedPushItemResponse> {
    const response = await axiosClient.post(`/v1/agreed-notifi`, {
      notificationId,
    });
    return response.data;
  }

  async deletePush(notificationId: number): Promise<ActivatedPushItemResponse> {
    const response = await axiosClient.delete(
      `/v1/agreed-notifi/${notificationId}`
    );
    return response.data;
  }
}

export default PushApiService.Instance;
