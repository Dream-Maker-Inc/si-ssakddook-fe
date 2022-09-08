import { BoardItem } from "@/common/components/board/BoardItem";
import { css } from "@emotion/react";
import { myCommentList } from "../../model/myArticleModel";

export const MyCommentList = () => {
  return (
    <div css={sx.root}>
      {myCommentList.map((it, index) => (
        <BoardItem
          key={index}
          title={it.title}
          date={it.date}
          nickname={it.nickname}
          category={it.category}
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
