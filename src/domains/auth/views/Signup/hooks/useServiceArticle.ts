import { MemberAtom } from "@/recoil/Member/Member.atom";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useFindAllTerms } from "../../../../../data/apis/terms/useTermsApiHooks";
export const useAgreement = () => {
  const [checkedItems, setCheckedItems] = useState(new Set<number>());
  const setRecoil = useSetRecoilState(MemberAtom);

  const checkedItemHandler = (value: number, checked: any) => {
    if (checked) {
      checkedItems.add(value);
      setCheckedItems(checkedItems);
      setRecoil((old) => ({ ...old, termsIds: Array.from(checkedItems) }));
    } else if (!checked && checkedItems.has(value)) {
      checkedItems.delete(value);
      setCheckedItems(checkedItems);
      setRecoil((old) => ({ ...old, termsIds: Array.from(checkedItems) }));
    }
  };

  const { data } = useFindAllTerms();

  if (!data) {
    return {
      result: null,
      checkedItemHandler: checkedItemHandler,
    };
  }

  return {
    result: data,
    checkedItemHandler: checkedItemHandler,
  };
};
