import PostingApiService from "@/data/apis/posting/posting.api";
import { RoutePath } from "@/constants/Path";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "react-query";

export const useDetailTab = (postId: number) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

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
        router.push(RoutePath.Community);
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
