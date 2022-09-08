import { BoardItem } from "@/common/components/board/BoardItem";
import { css } from "@emotion/react";

import { myPostList } from "../../model/myArticleModel";

export const MyPostList = () => {
  return (
    <div css={sx.postRoot}>
      {myPostList.map((it, index) => (
        <BoardItem
          key={index}
          title={it.title}
          date={it.date}
          nickname={it.nickname}
          category={it.category}
          like={it.like}
          comments={it.comments}
          isInMyArticleList={true}
        />
      ))}
    </div>
  );
};

const sx = {
  postRoot: css`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
};
