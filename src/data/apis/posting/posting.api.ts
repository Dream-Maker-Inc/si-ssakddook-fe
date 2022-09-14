import { axiosClient } from "@/constants/api/client/client";
import { ApiFailedResponse } from "@/data/statusCode/FailedResponse";
import { PostingApiInterface } from "./posting.interface";

class PostingApiService implements PostingApiInterface {
  private static instance: PostingApiService;
  static get Instance(): PostingApiService {
    return this.instance || (this.instance = new this());
  }

  jwt = localStorage.getItem("jwt");
  config = {
    headers: { Authorization: `Bearer ${this.jwt}` },
  };

  async create(formData: any): Promise<ApiFailedResponse> {
    const response = await axiosClient.post(
      "/v1/posting",
      formData,
      this.config
    );
    return response.data;
  }

  async findAllPostById(
    id: string,
    page: string,
    size: string
  ): Promise<ApiFailedResponse> {
    const response = await axiosClient.get(
      `/v1/posting?memberId=${id}&page=${page}&size=${size}}`,
      this.config
    );
    return response.data;
  }

  async findAllPostByCategory(
    category: string,
    page: string,
    size: string
  ): Promise<ApiFailedResponse> {
    const response = await axiosClient.get(
      `/v1/posting?category=${category}&page=${page}&size=${size}}`,
      this.config
    );
    return response.data;
  }
}

export default PostingApiService.Instance;
