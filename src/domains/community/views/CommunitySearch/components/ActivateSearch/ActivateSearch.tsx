import { useFindAllPostByKeyword } from "@/data/apis/posting/usePostingApiHooks";

type ActivateSearchProps = {
  keyword: string;
};

export const ActivateSearch = ({ keyword }: ActivateSearchProps) => {
  const page = 1;
  const size = 30;

  const { data } = useFindAllPostByKeyword(keyword, page, size);
  return data?.items;
};
