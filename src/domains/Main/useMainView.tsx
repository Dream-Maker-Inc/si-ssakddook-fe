/* eslint-disable react-hooks/exhaustive-deps */
import { useGetCurrentMember } from "@/data/apis/member/useMemberApiHooks";
import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { NoticeModalAtom } from "@/recoil/Modal/NoticeModal.atom";
import { useUserSession } from "@/recoil/session/user-session.atom";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { useMainApi } from "./hooks/useMainApi";

export const useMainView = () => {
  // user 정보 불러오는 api
  const { data } = useQuery("get-curr-member", useGetCurrentMember);

  // notice-modal atom
  const [isNoticeOpen, setIsNoticeOpen] = useRecoilState(NoticeModalAtom);

  const handleNoticeClose = () => {
    setIsNoticeOpen(false);
  };

  // 게시글 데이터 불러오는 api
  const { post, postByLike, lifePost, lifePostByView } = useMainApi();

  const nickname = data?.nickname as string;
  const profileImage = data?.profileImageUrl!!;

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
    modalState: {
      noticeModal: {
        isOpen: isNoticeOpen,
        onClose: handleNoticeClose,
        text: "유효하지 않는 글입니다.",
      },
    },
    username: nickname,
  };
};
