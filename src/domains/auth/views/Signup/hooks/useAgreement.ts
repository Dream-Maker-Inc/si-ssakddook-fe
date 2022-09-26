import { useFindAllTerms } from "./../../../../../data/apis/terms/useTermsApiHooks";
export const useAgreement = () => {
  const { data } = useFindAllTerms();

  if (!data) {
    return {
      result: null,
    };
  }

  return {
    result: data,
  };
};
