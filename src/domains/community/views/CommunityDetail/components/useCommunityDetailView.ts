import { useFindOneByPostId } from "@/data/apis/posting/usePostingApiHooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useCommunityDetailView = () => {
  const router = useRouter();
  const postId = router.query.postId + "";

  const { mutate, data } = useFindOneByPostId(postId);

  useEffect(() => {
    mutate();
  }, []);

  return {
    models: data,
    postId: postId,
  };
};
