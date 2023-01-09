import PostingApiService from "@/data/apis/posting/posting.api";
import { RoutePath } from "@/constants/Path";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "react-query";
import { CATEGORY_PATH_TYPE } from "@/domains/community/types/CategoryType.enum";
import { queryClient } from "@/pages/_app";

export const useDetailTab = (postId: number, category: string) => {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const arr = Object.values(CATEGORY_PATH_TYPE);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // post delete
  const { mutate } = useMutation(
    () => PostingApiService.deletePost(postId + ""),
    {
      onSuccess: (res: any) => {
        if (arr.includes(category)) {
          router.push({
            pathname: RoutePath.CommunityList,
            query: { category: category },
          });
        } else if (category == "/main" || category == "main") {
          router.push(RoutePath.Main);
        } else {
          router.push({
            pathname: RoutePath.MyArticle,
            query: { category: category },
          });
        }
      },
      onError: (err: any) => {
        console.log(err);
      },
    }
  );

  const handlePostEdit = () => {
    router.push({
      pathname: RoutePath.CommunityUpdate,
      query: { postId: postId },
    });
  };

  const handlePostDelete = () => {
    mutate();
  };

  return {
    popoverState: {
      isOpen: open,
      onClose: handleClose,
      onOpen: handleClick,
      anchor: anchorEl,
    },
    onEdit: handlePostEdit,
    onDelete: handlePostDelete,
  };
};
