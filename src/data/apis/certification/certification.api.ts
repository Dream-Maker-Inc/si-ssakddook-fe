import { axiosClient } from "@/constants/api/client/client";
import { IamCertificationApiResponse } from "./certification.dto";
import { IamCertificationApiInterface } from "./certification.interface";

class IamCertificationApiService implements IamCertificationApiInterface {
  private static instance: IamCertificationApiService;
  static get Instance(): IamCertificationApiService {
    return this.instance || (this.instance = new this());
  }

  async iamCertificate(
    importUid: string
  ): Promise<IamCertificationApiResponse> {
    const response = await axiosClient.post("/v1/auth/certifications", {
      importUid,
    });

    return response.data;
  }
}

export default IamCertificationApiService.Instance;
