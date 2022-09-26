import { useFindAllTerms } from "./../../../../../data/apis/terms/useTermsApiHooks";
export const useAgreement = () => {
  const { data } = useFindAllTerms();
  console.log("terms");
  console.log(data);
  if (!data) {
    return {
      result: null,
    };
  }

  return {
    result: data,
  };
};
