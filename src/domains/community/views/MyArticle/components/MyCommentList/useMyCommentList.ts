import {
  CommentItemResponse,
  CommentItemsResponse,
} from "@/data/apis/posting/posting.dto";
import { useFetchAllCommentById } from "@/data/apis/posting/usePostingApiHooks";
import { getDateDiff } from "@/utils/DateDif/DateDiff";
import _ from "lodash";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useMyCommentList = () => {
  const size = 15;

  const { ref, inView } = useInView();
  const { data, isLoading, isError, error, isFetching, fetchNextPage } =
    useFetchAllCommentById(size);

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
    };
  }

  const result = data.pages.map((page) => mapToComments(page.data.items));

  return {
    fetchState: {
      isLoading: isLoading,
      isError: isError,
    },
    result,
    ref: ref,
  };
};

const mapToComments = (items: CommentItemResponse[]) => {
  const comments = items.map((it) => ({
    postingId: it.posting.id,
    postingTitle: _.truncate(it.posting.title),
    content: _.truncate(it.content),
    date: getDateDiff(it.createdAt),
  }));

  return comments;
};
