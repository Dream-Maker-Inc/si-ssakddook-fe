import { useNoticeModal } from "@/common/components/modal/NoticeModal/useNoticeModal";
import { RoutePath } from "@/constants/Path";
import MemberApiService from "@/data/apis/member/member.api";
import { useGetCurrentMember } from "@/data/apis/member/useMemberApiHooks";
import { isApiFailedResponse } from "@/data/statusCode/FailedResponse";
import { useUserSession } from "@/recoil/session/user-session.atom";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";

export const useChangePasswordView = () => {
  const router = useRouter();
  const { user, setUser } = useUserSession();
  const {
    isNoticeOpen,
    onNoticeClose,
    onNoticeOpen,
    noticeText,
    onNoticeTextChange,
  } = useNoticeModal();

  // member profile-image
  const defaultImage = useQuery("get-curr-member", useGetCurrentMember).data
    ?.profileImageUrl;

  const [img, setImage] = useState(defaultImage);
  const [uploadedImage, setUploadedImage] = useState<any>(null);

  // change modal
  const [isModelOpen, setIsModelOpen] = useState(false);

  // change modal functions
  const handleModalOpen = () => setIsModelOpen(true);
  const handleModalClose = () => setIsModelOpen(false);

  const maxSize = 3 * 1000000;

  const imapgeUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result as string);
      }
    };

    if (!e.target.files) {
      return;
    }

    const fileSize = e.target.files[0].size;

    if (fileSize > maxSize) {
      onNoticeTextChange("이미지 사이즈는 3MB 이하만 첨부할 수 있습니다.");
      onNoticeOpen();
      return;
    }

    reader.readAsDataURL(e.target.files[0]);
    setUploadedImage(e.target.files[0]);
  };

  // change profile-image api
  const { mutate, data } = useMutation(
    (formData: any) => MemberApiService.updateProfileImage(formData),
    {
      onSuccess: async (res) => {
        if (isApiFailedResponse(res)) {
          handleModalClose();
          onNoticeTextChange("오류가 발생했습니다.");
          onNoticeOpen();
        } else {
          // user chat session에 저장
          if (!user) return;
          setUser({
            ...user,
            image: uploadedImage,
          });
          handleModalClose();
          router.push(RoutePath.MyInformation);
        }
      },
      onError: (err) => {
        handleModalClose();
        onNoticeTextChange("프로필 이미지 업로드에 실패했습니다.");
        onNoticeOpen();
        console.log(err);
      },
    }
  );

  const onSubmit = async () => {
    // form data
    const fd = new FormData();
    await fd.append("file", uploadedImage);
    await mutate(fd);
  };

  return {
    imageState: {
      value: img,
      onUpload: imapgeUploadHandler,
    },
    tabState: {
      title: "프로필 이미지 변경하기",
      onActive: uploadedImage === null ? false : true,
      onClick: handleModalOpen,
    },
    modalState: {
      changeModal: {
        isOpen: isModelOpen,
        onClose: handleModalClose,
        onContinue: onSubmit,
        editValue: "프로필 이미지",
      },
      noticeModal: {
        isOpen: isNoticeOpen,
        onClose: onNoticeClose,
        text: noticeText,
      },
    },
  };
};
