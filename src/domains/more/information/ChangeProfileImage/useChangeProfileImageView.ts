import { RoutePath } from "@/constants/Path";
import {
  useGetCurrentMember,
  useUpdateProfileImage,
} from "@/data/apis/member/useMemberApiHooks";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";

export const useChangePasswordView = () => {
  const router = useRouter();
  // member profile-image
  const defaultImage = useQuery("get-curr-member", useGetCurrentMember).data
    ?.profileImageUrl;

  const [img, setImage] = useState(defaultImage);
  const [uploadImage, setUploadImage] = useState<any>(null);

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
    reader.readAsDataURL(e.target.files[0]);
    setUploadImage(e.target.files[0]);
  };

  // change profile-image api
  const { mutate, isSuccess, isError, data } = useUpdateProfileImage();

  if (isSuccess) {
    console.log("change profile-image success");
    console.log(data);
    router.push(RoutePath.MyInformation);
  }

  if (isError) {
    console.log("change profile-image failed");
    console.log(data);
  }

  const onSubmit = () => {
    const formData = new FormData();
    formData.append("file", uploadImage);
    mutate(formData);
  };

  return {
    imageState: {
      value: img,
      onUpload: imapgeUploadHandler,
    },

    tabState: {
      title: "프로필 이미지 변경하기",
      onActive: uploadImage === null ? false : true,
      onClick: onSubmit,
    },
  };
};
