import { axiosBasicClient, axiosClient } from "@/constants/api/client/client";
import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { LifeItemResponse, LifeItemsResponse } from "./life.dto";
import { LifeApiInterface } from "./life.interface";

class LifeApiService implements LifeApiInterface {
  private static instance: LifeApiService;
  static get Instance(): LifeApiService {
    return this.instance || (this.instance = new this());
  }

  get id() {
    return LocalStorage.getItem("id");
  }

  async findAllLife(size: number): Promise<LifeItemsResponse> {
    const response = await axiosClient.get(
      `/v1/life-posting?page=1&size=${size}`
    );
    return response.data;
  }

  async findAllLifeByViewCount(size: number): Promise<LifeItemsResponse> {
    const response = await axiosClient.get(
      `/v1/life-posting?page=1&size=${size}&sortBy=viewCount`
    );
    return response.data;
  }

  async findOneLifeById(lifeId: string): Promise<LifeItemResponse> {
    const response = await axiosBasicClient.get(`/v1/life-posting/${lifeId}`);
    return response.data.data;
  }
}

export default LifeApiService.Instance;
