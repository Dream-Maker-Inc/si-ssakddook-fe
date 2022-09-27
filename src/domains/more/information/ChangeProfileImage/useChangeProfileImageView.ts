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
  const [uploadedImage, setUploadedImage] = useState<any>(null);

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
    setUploadedImage(e.target.files[0]);
  };

  // change profile-image api
  const { mutate, isSuccess, isError, data } = useUpdateProfileImage();

  if (isSuccess) {
    console.log(data);
    router.push(RoutePath.MyInformation);
  }

  if (isError) {
    console.log(data);
  }

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
      onClick: onSubmit,
    },
  };
};
