import { queryClient } from "./../../../../../pages/_app";
import PostingApiService from "@/data/apis/posting/posting.api";
import { CATEGORY_TYPE } from "./../../../types/CategoryType.enum";
import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import { RoutePath } from "@/constants/Path";
import { ImageType } from "../types/communityImage.type";
import { useMutation, useQueryClient } from "react-query";

export const useCommunityWriteView = () => {
  const categoryList = Object.values(CATEGORY_TYPE);
  const router = useRouter();
  const selectedCategory = router.query.category + "";
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(selectedCategory);
  const [content, setContent] = useState("");
  const [img, setImage] = useState<ImageType[]>([]);
  const [count, setCount] = useState(0);

  const isTitleFilled = !title ? false : true;
  const isCategoryFilled = !category ? false : true;
  const isContentFilled = !content ? false : true;

  const imgList: any[] = [];

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

    const fileSize = e.target.files[0].size;

    if (fileSize > maxSize) {
      alert("이미지 사이즈는 3MB 이하만 첨부할 수 있습니다.");
      return;
    }

    if (img.length == 5) {
      alert("이미지는 5개까지 첨부할 수 있습니다.");
      return;
    }

    reader.readAsDataURL(e.target.files[0]);
    setCount(count + 1);
  };

  const handleRemoveImage = (index: number) => {
    setImage(img.filter((item) => item.id !== index));
  };

  const handleImagePush = () => {
    img.map((it, index) => imgList.push(it.value));
  };

  // submit
  const { mutate } = useMutation(
    (formData: any) => PostingApiService.createPost(formData),
    {
      onSuccess() {
        queryClient.clear();

        router.replace({
          pathname: RoutePath.CommunityList,
          query: { category: category },
        });
      },
      onError(err) {
        console.log(err);
      },
    }
  );

  const onSubmit = async () => {
    await handleImagePush();

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
