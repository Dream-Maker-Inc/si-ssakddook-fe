import { axiosBasicClient, axiosClient } from "@/constants/api/client/client";
import { IamCertificationApiResponse } from "./certification.dto";
import { IamCertificationApiInterface } from "./certification.interface";

class IamCertificationApiService implements IamCertificationApiInterface {
  private static instance: IamCertificationApiService;
  static get Instance(): IamCertificationApiService {
    return this.instance || (this.instance = new this());
  }

  iamportCertificate(
    isSuccess: (res: any) => void,
    isError: (err: any) => void
  ) {
    return window.IMP.certification(
      {
        popup: true,
      },
      isSuccess,
      isError
    );
  }

  async crossValidateUid(
    importUid: string
  ): Promise<IamCertificationApiResponse> {
    const response = await axiosBasicClient.post("/v1/auth/certifications", {
      importUid,
    });

    return response.data;
  }
}

const IamCertificationApi = IamCertificationApiService.Instance;

export { IamCertificationApi };
export default IamCertificationApi;
