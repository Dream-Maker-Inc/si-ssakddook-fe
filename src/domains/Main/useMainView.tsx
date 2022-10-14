/* eslint-disable react-hooks/exhaustive-deps */
import { useGetCurrentMember } from "@/data/apis/member/useMemberApiHooks";
import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { useUserSession } from "@/recoil/session/user-session.atom";
import { useEffect } from "react";
import { useQuery } from "react-query";

export const useMainView = () => {
  const { data } = useQuery("get-curr-member", useGetCurrentMember);

  const username = data?.name as string;

  LocalStorage.setItem("id", data?.id + "");
  LocalStorage.setItem("nickname", data?.nickname + "");
  LocalStorage.setItem("profileImage", data?.profileImageUrl + "");

  // user session 저장
  const { setUser } = useUserSession();

  useEffect(() => {
    if (!data) return;

    setUser({
      id: `${data.id}`,
      name: data.nickname,
      image: data.profileImageUrl,
    });
  }, [data]);
  //

  const text =
    "자책하지 말아요\n당신의 잘못이 아닙니다\n\n홀로 감당하기엔 너무 큰 고통\n앞으로는 함께 해결합시다\n\n누구에게도 말 못할 괴로움을\n여기 이곳에 두고 가시길";
  return {
    data: text,
    username: username,
  };
};
