import { BoardItem } from "@/common/components/board/BoardItem";
import { CircularLoading } from "@/common/components/progress/CircularProgress/CircularLoading";
import { getDateDiff } from "@/utils/DateDif/DateDiff";
import { css } from "@emotion/react";
import { useMyCommentList } from "./useMyCommentList";

export const MyCommentList = () => {
  const { fetchState, result, ref } = useMyCommentList();

  if (fetchState.isLoading) return <CircularLoading />;
  if (fetchState.isError) return <div>에러가 발생했습니다.</div>;
  return (
    <div css={sx.root}>
      {result?.pages.map((page, index) => (
        <div key={index}>
          {page.data.items.map((it, index) => (
            <BoardItem
              key={index}
              postId={it.posting.id}
              title={it.content}
              date={getDateDiff(it.createdAt)}
              nicknameOrTitle={it.posting.title}
              isInMyArticleList={true}
              isPost={false}
            />
          ))}
        </div>
      ))}
      <div css={sx.target} ref={ref}></div>
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

  target: css`
    width: 100%;
    height: 1px;
    background-color: tranparent;
  `,
};
