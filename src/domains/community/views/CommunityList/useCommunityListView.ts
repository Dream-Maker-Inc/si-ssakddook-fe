import { queryClient } from "./../../../../pages/_app";
import { PostingItemResponse } from "@/data/apis/posting/posting.dto";
import { useFetchAllPostByCategory } from "@/data/apis/posting/usePostingApiHooks";
import _ from "lodash";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { getTimeFromNow } from "@/utils/moment/DateMoment";

export const useCommunityListView = () => {
  const router = useRouter();
  let category = router.query.category + "";

  const { ref, inView } = useInView();
  const { data, isLoading, isError, error, isFetching, fetchNextPage } =
    useFetchAllPostByCategory(category);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (isError) {
    console.log(error);
  }

  if (!data) {
    return {
      fetchState: {
        isLoading: isLoading,
        isError: isError,
      },
      result: null,
      ref: ref,
    };
  }

  const result = data.pages.map((page) => mapToPostings(page.data.items));

  return {
    category: category == "" ? "최근 게시글" : category,
    fetchState: {
      isLoading: isLoading,
      isError: isError,
      isFetching: isFetching,
    },
    result,
    emptyResultText:
      "이 카테고리에는\n아직 글이 없어요.\n\n글 작성 페이지에서\n글을 작성해 보세요.",
    ref: ref,
  };
};

const mapToPostings = (postingItemResponses: PostingItemResponse[]) => {
  const postings = postingItemResponses.map((it) => ({
    id: it.id,
    title: _.truncate(it.title),
    date: getTimeFromNow(it.createdAt),
    nickname: it.author.nickname,
    category: it.category,
    likedCount: `${it.likedCount}`,
    commentCount: `${it.commentCount}`,
  }));

  return postings;
};
