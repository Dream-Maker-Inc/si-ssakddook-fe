import PostingApiService from "@/data/apis/posting/posting.api";
import { useState } from "react";
import { useFindOneByPostId } from "@/data/apis/posting/usePostingApiHooks";
import { useRouter } from "next/router";
import { RoutePath } from "@/constants/Path";
import { useMutation } from "react-query";

export const useCommunityUpdateView = () => {
  const router = useRouter();
  const postId = router.query.postId + "";

  // read post
  const { data: postData } = useFindOneByPostId(postId);

  const [title, setTitle] = useState(postData?.title!!);
  const [content, setContent] = useState(postData?.content!!);

  const body = {
    title: title,
    content: content,
  };

  // update post
  const { mutate, data: updateDate } = useMutation(
    () => PostingApiService.updatePost(postId, body),
    {
      onSuccess: (res: any) => {
        router.push({
          pathname: RoutePath.CommunityDetail,
          query: { postId: postId },
        });
      },
      onError: (res: any) => {
        console.log(res);
      },
    }
  );

  const isTitleFilled = !title ? false : true;
  const isContentFilled = !content ? false : true;

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handlePostUpdate = () => {
    mutate();
  };

  return {
    titleState: {
      value: title,
      onChange: handleTitleChange,
    },

    contentState: {
      value: content,
      onChange: handleContentChange,
    },

    tabState: {
      onClick: handlePostUpdate,
      onActive: isTitleFilled && isContentFilled ? true : false,
    },
  };
};
