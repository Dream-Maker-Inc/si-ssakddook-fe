import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useFetchAllPostByCategory } from "@/data/apis/posting/usePostingApiHooks";
import { PostingItemResponse } from "@/data/apis/posting/posting.dto";
import { getDateDiff } from "@/utils/DateDif/DateDiff";
import _ from "lodash";

export const useCommunityListView = () => {
  const router = useRouter();
  let category = router.query.category + "";
  const size = 15;

  const { ref, inView } = useInView();
  const { data, isLoading, isError, error, isFetching, fetchNextPage } =
    useFetchAllPostByCategory(category, size);

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
    ref: ref,
  };
};

const mapToPostings = (postingItemResponses: PostingItemResponse[]) => {
  const postings = postingItemResponses.map((it) => ({
    id: it.id,
    title: _.truncate(it.title),
    date: getDateDiff(it.createdAt),
    nickname: it.author.nickname,
    category: it.category,
    likedCount: `${it.likedCount}`,
    commentCount: `${it.commentCount}`,
  }));

  return postings;
};
