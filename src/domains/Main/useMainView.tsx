/* eslint-disable react-hooks/exhaustive-deps */
import { useGetCurrentMember } from "@/data/apis/member/useMemberApiHooks";
import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { useUserSession } from "@/recoil/session/user-session.atom";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useMainApi } from "./hooks/useMainApi";

export const useMainView = () => {
  // user 정보 불러오는 api
  const { data } = useQuery("get-curr-member", useGetCurrentMember);

  // 게시글 데이터 불러오는 api
  const { post, postByLike, lifePost, lifePostByView } = useMainApi();

  const nickname = data?.nickname as string;
  const profileImage = data?.profileImageUrl!!;
  console.log(profileImage);

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
      image:
        profileImage == ""
          ? "https://ssakduk.com/global-assets/logo.png"
          : profileImage,
    });
  }, [data]);

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
