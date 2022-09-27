import { axiosClient } from "@/constants/api/client/client";
import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { LikeItemResponse, LikeItemsResponse } from "./lie.dto";
import { LikeApiInterface } from "./like.interface";

class LikeApiService implements LikeApiInterface {
  private static instance: LikeApiService;
  static get Instance(): LikeApiService {
    return this.instance || (this.instance = new this());
  }

  get id() {
    return LocalStorage.getItem("id");
  }

  async createLike(body: any): Promise<LikeItemResponse> {
    const response = await axiosClient.post(`/v1/liked`, body);
    return response.data;
  }

  async deleteLike(id: number): Promise<LikeItemResponse> {
    const response = await axiosClient.delete(`/v1/liked/${id}`);
    return response.data;
  }
}

export default LikeApiService.Instance;
