import { useGetCurrentMember } from "@/data/apis/member/useMemberApiHooks";
import { useQuery } from "react-query";

export const useMainView = () => {
  const { data } = useQuery("get-curr-member", useGetCurrentMember);
  const id = data?.id;
  const username = data?.name as string;

  localStorage.setItem("id", id + "");

  const text =
    "자책하지 말아요\n당신의 잘못이 아닙니다\n\n홀로 감당하기엔 너무 큰 고통\n앞으로는 함께 해결합시다\n\n누구에게도 말 못할 괴로움을\n여기 이곳에 두고 가시길";
  return {
    data: text,
    username: username,
  };
};
