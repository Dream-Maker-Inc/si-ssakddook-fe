import { useMutation } from "react-query";
import IamCertificationApiService from "./certification.api";

export const useIamCertification = (importUid: string) => {
  return IamCertificationApiService.iamCertificate(importUid);
};
