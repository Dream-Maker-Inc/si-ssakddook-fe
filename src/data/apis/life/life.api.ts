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

  async findAllLife(page: number, size: number): Promise<LifeItemsResponse> {
    const response = await axiosBasicClient.get(
      `/v1/life-posting?page=${page}&size=${size}`
    );
    return response.data;
  }

  async findOneLifeById(lifeId: string): Promise<LifeItemResponse> {
    const response = await axiosBasicClient.get(`/v1/life-posting/${lifeId}`);
    return response.data;
  }
}

export default LifeApiService.Instance;
