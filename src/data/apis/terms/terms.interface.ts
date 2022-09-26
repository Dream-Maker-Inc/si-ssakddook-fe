import { ApiFailedResponse } from "@/data/statusCode/FailedResponse";
import { TermsItemsResponse } from "./terms.dto";

export interface TermsApiInterface {
  findAllTerms(): Promise<TermsItemsResponse>;
  createTerms(memberId: string, termsId: string): Promise<ApiFailedResponse>;
}
