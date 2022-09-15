import { BoardItem } from "@/common/components/board/BoardItem";
import { css } from "@emotion/react";
import { useMyCommentList } from "./useMyCommentList";

export const MyCommentList = () => {
  const { models } = useMyCommentList();
  return (
    <div css={sx.root}>
      {models?.map((it, index) => (
        <BoardItem
          key={index}
          postId={it.comment.id}
          title={it.comment.content}
          date={it.comment.createdAt}
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
