import { ApiFailedResponse } from "@/data/statusCode/FailedResponse";

export interface PostingApiInterface {
  create(formData: any): Promise<ApiFailedResponse>;
  findAllPostById(page: string, size: string): Promise<ApiFailedResponse>;
  findAllPostByCategory(
    category: string,
    page: string,
    size: string
  ): Promise<ApiFailedResponse>;
}
