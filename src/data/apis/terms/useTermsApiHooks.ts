import { useMutation, useQuery } from "react-query";
import TermsApiService from "@/data/apis/terms/terms.api";

export const useFindAllTerms = () => {
  return useQuery(["all-terms"], () => TermsApiService.findAllTerms());
};

export const useCreateTerms = (membersId: string, termsId: string) => {
  return useMutation(() => TermsApiService.createTerms(membersId, termsId));
};
