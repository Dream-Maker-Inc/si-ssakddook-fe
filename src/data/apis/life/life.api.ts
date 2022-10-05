import { axiosBasicClient } from "@/constants/api/client/client";
import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { LifeItemResponse } from "./life.dto";
import { LifeApiInterface } from "./life.interface";

class LifeApiService implements LifeApiInterface {
  private static instance: LifeApiService;
  static get Instance(): LifeApiService {
    return this.instance || (this.instance = new this());
  }

  get id() {
    return LocalStorage.getItem("id");
  }

  async findOneLifeById(lifeId: string): Promise<LifeItemResponse> {
    const response = await axiosBasicClient.get(`/v1/life-posting/${lifeId}`);
    return response.data;
  }
}

export default LifeApiService.Instance;
