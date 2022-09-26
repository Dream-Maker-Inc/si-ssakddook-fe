import { axiosBasicClient } from "@/constants/api/client/client";
import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { ApiFailedResponse } from "@/data/statusCode/FailedResponse";
import { TermsItemsResponse } from "./terms.dto";
import { TermsApiInterface } from "./terms.interface";

class TermsApiService implements TermsApiInterface {
  private static instance: TermsApiService;
  static get Instance(): TermsApiService {
    return this.instance || (this.instance = new this());
  }

  get id() {
    return LocalStorage.getItem("id");
  }

  async findAllTerms(): Promise<TermsItemsResponse> {
    const response = await axiosBasicClient.get(`/v1/service-terms`);
    return response.data;
  }

  async createTerms(
    memberId: string,
    termsId: string
  ): Promise<ApiFailedResponse> {
    const response = await axiosBasicClient.post(`/v1/agreed-terms`, {
      membersId: memberId,
      termsId: termsId,
    });
    return response.data;
  }
}

export default TermsApiService.Instance;
