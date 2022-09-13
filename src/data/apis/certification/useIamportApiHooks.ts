import IamCertificationApiService from "./certification.api";

export const useIamCertification = (importUid: string) => {
  return IamCertificationApiService.crossValidateUid(importUid);
};
