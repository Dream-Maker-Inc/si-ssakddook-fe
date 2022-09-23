import { BoardItem } from "@/common/components/board/BoardItem";
import { CircularLoading } from "@/common/components/progress/CircularProgress/CircularLoading";
import { getDateDiff } from "@/utils/DateDif/DateDiff";
import { css } from "@emotion/react";
import { useMyCommentList } from "./useMyCommentList";

export const MyCommentList = () => {
  const { fetchState, result } = useMyCommentList();

  if (fetchState.isLoading) return <CircularLoading />;
  if (fetchState.isError) return <CircularLoading />;
  return (
    <div css={sx.root}>
      {result?.map((it, index) => (
        <BoardItem
          key={index}
          postId={it.posting.id}
          title={it.comment.content}
          date={getDateDiff(it.comment.createdAt)}
          nicknameOrTitle={it.posting.title}
          category={it.posting.category}
          isInMyArticleList={true}
          isPost={false}
        />
      ))}
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
};
