import { PostingItemResponse } from "@/data/apis/posting/posting.dto";
import { useFindAllHotPost } from "@/data/apis/posting/usePostingApiHooks";
import { getTimeFromNow } from "@/utils/moment/DateMoment";
import _ from "lodash";

export const useHotBoardList = () => {
  const size = 5;
  const { data, isLoading, isError } = useFindAllHotPost(size);

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
