import { CATEGORY_TYPE } from "./../../../types/CategoryType.enum";
import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { ImageType } from "../types/communityImage.type";
import { useCreatePost } from "@/data/apis/posting/usePostingApiHooks";
import { useRouter } from "next/router";
import { RoutePath } from "@/constants/Path";

export const useCommunityWriteView = () => {
  const categoryList = Object.values(CATEGORY_TYPE);
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [uploadedImage, setUploadedImage] = useState<any>(null);
  const [img, setImage] = useState<string>("");
  const [count, setCount] = useState(0);

  const isTitleFilled = !title ? false : true;
  const isCategoryFilled = !category ? false : true;
  const isContentFilled = !content ? false : true;

  const maxSize = 3 * 1000000;

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e: SelectChangeEvent) => {
    setCategory(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  // image upload
  const imapgeUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result as string);
        setUploadedImage(e.target.files!![0]);
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
    setCount(count + 1);
  };

  const handleRemoveImage = () => {
    setImage("");
    setUploadedImage(null);
  };

  // const handleImageList = () => {
  //   img.map((it, index) => attachment.push(it.value));
  // };

  // submit
  const { mutate, isSuccess, isError, data } = useCreatePost();

  if (isSuccess) {
    console.log(data);
    router.push(RoutePath.MyArticle);
  }

  if (isError) {
    console.log(data);
  }

  const onSubmit = () => {
    const fd = new FormData();
    fd.append("category", category);
    fd.append("title", title);
    fd.append("content", content);
    fd.append("attachments", uploadedImage);

    mutate(fd);
  };

  return {
    titleState: {
      value: title,
      onChange: handleTitleChange,
    },

    categoryState: {
      list: categoryList,
      value: category,
      onChange: handleCategoryChange,
    },
    contentState: {
      value: content,
      onChange: handleContentChange,
    },
    imageState: {
      value: img,
      onUpload: imapgeUploadHandler,
      index: count,
    },

    tabState: {
      onClick: onSubmit,
      onActive:
        isTitleFilled && isCategoryFilled && isContentFilled ? true : false,
    },

    buttonState: {
      onDelete: handleRemoveImage,
    },
  };
};
