import { axiosClient } from "@/constants/api/client/client";
import {
  ServiceFindAllApiResponse,
  ServiceFindOneApiResponse,
} from "./serviceTerms.dto";
import { ServiceTermsApiInterface } from "./serviceTerms.interface";

export class ServiceTermsApiService implements ServiceTermsApiInterface {
  private static instance: ServiceTermsApiService;
  static get Instance(): ServiceTermsApiService {
    return this.instance || (this.instance = new this());
  }

  async findAll(): Promise<ServiceFindAllApiResponse> {
    const response = await axiosClient.post("/v1/auth/login", {});
    return response.data;
  }

  async findOne(): Promise<ServiceFindOneApiResponse> {
    const response = await axiosClient.post("/v1/auth/login", {});
    return response.data;
  }
}

export default ServiceTermsApiService.Instance;
