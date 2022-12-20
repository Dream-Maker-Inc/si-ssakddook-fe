import { PostingItemResponse } from "@/data/apis/posting/posting.dto";
import { useFindAllPost } from "@/data/apis/posting/usePostingApiHooks";
import { getTimeFromNow } from "@/utils/moment/DateMoment";
import _ from "lodash";

export const useRecentBoardList = () => {
  const size = 5;
  const { data, isLoading, isError } = useFindAllPost(size);

  if (!data) {
    return {
      fetchState: {
        isLoading,
        isError,
      },
      result: null,
    };
  }
  const postings = mapToPostings(data.data.items);

  return {
    fetchState: {
      isLoading,
      isError,
    },
    result: postings,
  };
};

const mapToPostings = (postingItemResponses: PostingItemResponse[]) => {
  if (postingItemResponses === null || postingItemResponses === undefined) {
    return null;
  }

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
