/* eslint-disable react-hooks/exhaustive-deps */
import { useGetCurrentMember } from "@/data/apis/member/useMemberApiHooks";
import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { useUserSession } from "@/recoil/session/user-session.atom";
import { useCallback, useEffect } from "react";
import { useQuery } from "react-query";
import { useMainApi } from "./hooks/useMainApi";

export const useMainView = () => {
  const { data } = useQuery("get-curr-member", useGetCurrentMember);

  const { post, postByLike, lifePost, lifePostByView } = useMainApi();

  const nickname = data?.nickname as string;

  LocalStorage.setItem("id", data?.id + "");
  LocalStorage.setItem("nickname", data?.nickname + "");
  LocalStorage.setItem("profileImage", data?.profileImageUrl + "");

  // user session 저장
  const { user, setUser } = useUserSession();

  useEffect(() => {
    if (!data) return;
    if (user?.id === `${data.id}`) return;

    setUser({
      id: `${data.id}`,
      name: data.nickname,
      image: data.profileImageUrl,
    });
  }, [data]);
  //

  return {
    result: {
      postData: {
        post: post,
        postByLike: postByLike,
      },
      lifePostData: {
        lifePost: lifePost,
        lifePostByView: lifePostByView,
      },
    },
    username: nickname,
  };
};
