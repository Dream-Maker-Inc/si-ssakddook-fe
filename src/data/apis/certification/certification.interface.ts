import { IamCertificationApiResponse } from "./certification.dto";

export interface IamCertificationApiInterface {
  iamCertificate(importUid: string): Promise<IamCertificationApiResponse>;
}
