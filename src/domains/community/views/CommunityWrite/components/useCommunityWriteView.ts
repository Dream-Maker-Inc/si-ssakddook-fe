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
  const [img, setImage] = useState<ImageType[]>([]);
  const [count, setCount] = useState(0);

  const isTitleFilled = !title ? false : true;
  const isCategoryFilled = !category ? false : true;
  const isContentFilled = !content ? false : true;

  const imgList: any[] = [];

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

  // image upload
  const imapgeUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage((old) => [
          ...old,
          {
            id: count,
            src: reader.result as string,
            value: e.target.files!![0],
          },
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

  const handleImageList = () => {
    img.map((it, index) => imgList.push(it.value));
  };

  // submit
  const { mutate, isSuccess, isError, data } = useCreatePost();

  if (isSuccess) {
    console.log("create post success");
    console.log(data);
    router.push(RoutePath.MyArticle);
  }

  if (isError) {
    console.log("create post success");
    console.log(data);
  }

  const onSubmit = () => {
    handleImageList();

    const body = {
      category: category,
      title: title,
      content: content,
      attachments: imgList,
    };

    const fd = new FormData();
    fd.append("category", category);
    fd.append("title", title);
    fd.append("content", content);
    imgList.forEach((file) => {
      fd.append("attachments", file);
    });

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
