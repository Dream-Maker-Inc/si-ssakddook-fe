import { MemberAtom } from "@/recoil/Member/Member.atom";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useFindAllTerms } from "../../../../../data/apis/terms/useTermsApiHooks";
export const useAgreement = () => {
  const [checkedItems, setCheckedItems] = useState(new Set<number>());
  const setRecoil = useSetRecoilState(MemberAtom);
  let list: number[] = [];

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

  const { data, isSuccess } = useFindAllTerms();

  if (isSuccess) {
    data
      .filter((item) => item.isRequired == true)
      .map((it) => list.push(it.id));
  }

  // 필수 체크 여부 확인
  const difference = list.filter((x) => !Array.from(checkedItems).includes(x));

  if (!data) {
    return {
      result: null,
      checkedItemHandler: checkedItemHandler,
    };
  }

  return {
    result: data,
    checkedItemHandler: checkedItemHandler,
    isValidationPassed: difference.length !== 0 ? false : true,
  };
};
