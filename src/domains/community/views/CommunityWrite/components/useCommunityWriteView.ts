import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { ImageType } from "../types/communityImage.type";

export const useCommunityWriteView = () => {
  const categoryList = ["직장 폭력", "데이트 폭력", "학교 폭력"];

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [img, setImage] = useState<ImageType[]>([]);
  const [count, setCount] = useState(0);

  const isTitleFilled = !title ? false : true;
  const isCategoryFilled = !category ? false : true;
  const isContentFilled = !content ? false : true;

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e: SelectChangeEvent) => {
    setCategory(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    console.log(img);
  }, [img]);

  const imapgeUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage((preImages) => [
          ...preImages,
          { id: count, src: reader.result as string },
        ]);
      }
    };

    if (!e.target.files) {
      return;
    }
    reader.readAsDataURL(e.target.files[0]);
    setCount(count + 1);
  };

  const handleRemoveImage = (index: number) => {
    setImage(img.filter((item) => item.id !== index));
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

    buttonState: {
      onDelete: handleRemoveImage,
      onActive:
        isTitleFilled && isCategoryFilled && isContentFilled ? true : false,
    },
  };
};
