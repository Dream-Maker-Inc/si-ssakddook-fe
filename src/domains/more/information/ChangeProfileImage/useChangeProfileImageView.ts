import { RoutePath } from "@/constants/Path";
import MemberApiService from "@/data/apis/member/member.api";
import {
  useGetCurrentMember,
  useUpdateProfileImage,
} from "@/data/apis/member/useMemberApiHooks";
import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { useUserSession } from "@/recoil/session/user-session.atom";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";

export const useChangePasswordView = () => {
  const router = useRouter();
  const { user, setUser } = useUserSession();

  // member profile-image
  const defaultImage = useQuery("get-curr-member", useGetCurrentMember).data
    ?.profileImageUrl;

  const [img, setImage] = useState(defaultImage);
  const [uploadedImage, setUploadedImage] = useState<any>(null);
  const [isModelOpen, setIsModelOpen] = useState(false);
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
      alert("이미지 사이즈는 3MB 이하만 첨부할 수 있습니다.");
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
        // user chat session에 저장
        if (!data) return;

        setUser({
          id: `${data.id}`,
          name: data.nickname,
          image: data.profileImageUrl,
        });

        router.push(RoutePath.MyInformation);
      },
      onError: (err) => {
        handleModalClose();
        alert("프로필 이미지 업로드에 실패했습니다.");
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
      isOpen: isModelOpen,
      onClose: handleModalClose,
      onContinue: onSubmit,
      editValue: "프로필 이미지",
    },
  };
};
