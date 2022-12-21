import { useNoticeModal } from "@/common/components/modal/NoticeModal/useNoticeModal";
import { RoutePath } from "@/constants/Path";
import MemberApiService from "@/data/apis/member/member.api";
import { useGetCurrentMember } from "@/data/apis/member/useMemberApiHooks";
import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { isApiFailedResponse } from "@/data/statusCode/FailedResponse";
import { useUserSession } from "@/recoil/session/user-session.atom";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";

export const useChangeNickname = () => {
  const router = useRouter();
  const { user, setUser } = useUserSession();
  const {
    isNoticeOpen,
    onNoticeClose,
    onNoticeOpen,
    noticeText,
    onNoticeTextChange,
  } = useNoticeModal();

  const [newNickname, setNewNickname] = useState("");
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleModalOpen = () => setIsModelOpen(true);
  const handleModalClose = () => setIsModelOpen(false);

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNickname(e.target.value);
  };
  const onActive = newNickname !== "" ? true : false;

  // get current member
  const { data } = useQuery("get-curr-member", useGetCurrentMember);

  // change nickname api
  const { mutate, isLoading, isError } = useMutation(
    () => MemberApiService.updateNickname(newNickname),
    {
      onSuccess: async (res) => {
        if (isApiFailedResponse(res)) {
          handleModalClose();
          onNoticeTextChange("오류가 발생했습니다.");
          onNoticeOpen();
        } else {
          handleModalClose();
          LocalStorage.setItem("nickname", newNickname);

          // user chat session에 저장
          if (!user) return;

          setUser({ ...user, name: newNickname });

          handleModalClose();
          router.push(RoutePath.MyInformation);
        }
      },
      onError: (err) => {
        handleModalClose();
        onNoticeTextChange("오류가 발생했습니다.");
        onNoticeOpen();
        console.log(err);
      },
    }
  );

  const onSubmit = () => {
    mutate();
  };

  return {
    refetch: {
      isLoading: isLoading,
      isError: isError,
    },
    nicknameState: {
      currValue: data?.nickname,
      value: newNickname,
      onChange: handleNicknameChange,
    },

    tabState: {
      title: "닉네임 변경하기",
      onActive: onActive,
      onClick: handleModalOpen,
    },
    modalState: {
      changeModal: {
        isOpen: isModelOpen,
        onContinue: onSubmit,
        onClose: handleModalClose,
        editValue: "닉네임",
      },

      noticeModal: {
        isOpen: isNoticeOpen,
        onClose: onNoticeClose,
        text: noticeText,
      },
    },
  };
};
