import { axiosClient } from "@/constants/api/client/client";
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
        // 모바일환경에서 popup:false(기본값) 인 경우 필수, 예: https://www.myservice.com/payments/complete/mobile
        // m_redirect_url: "https://www.naver.com",

        // PC환경에서는 popup 파라메터가 무시되고 항상 true 로 적용됨
        popup: true,
      },
      isSuccess,
      isError
    );
  }

  async crossValidateUid(
    importUid: string
  ): Promise<IamCertificationApiResponse> {
    const response = await axiosClient.post("/v1/auth/certifications", {
      importUid,
    });

    return response.data;
  }
}

const IamCertificationApi = IamCertificationApiService.Instance;

export { IamCertificationApi };
export default IamCertificationApi;
