import { axiosBasicClient } from "@/constants/api/client/client";
import {
  ActivatedPushItemResponse,
  ActivatedPushItemsResponse,
  PushItemsResponse,
} from "./push.dto";
import { PushApiInterface } from "./push.interface";

class PushApiService implements PushApiInterface {
  private static instance: PushApiService;
  static get Instance(): PushApiService {
    return this.instance || (this.instance = new this());
  }

  async findAllPush(): Promise<PushItemsResponse> {
    const response = await axiosBasicClient.get(`/v1/push-notification`);
    return response.data;
  }

  async findActivatedPush(): Promise<ActivatedPushItemsResponse> {
    const response = await axiosBasicClient.get(`/v1/agreed-notifi`);
    return response.data;
  }

  async activatePush(
    notificationId: number
  ): Promise<ActivatedPushItemResponse> {
    const response = await axiosBasicClient.post(`/v1/agreed-notifi`, {
      notificationId,
    });
    return response.data;
  }

  async deletePush(notificationId: number): Promise<ActivatedPushItemResponse> {
    const response = await axiosBasicClient.delete(
      `/v1/agreed-notifi/${notificationId}`
    );
    return response.data;
  }
}

export default PushApiService.Instance;
