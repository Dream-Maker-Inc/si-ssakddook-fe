import { IamCertificationApiResponse } from "./certification.dto";

export interface IamCertificationApiInterface {
  crossValidateUid(importUid: string): Promise<IamCertificationApiResponse>;
}
