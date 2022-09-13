import { BoardExpandedItem } from "@/common/components/board/BoardExpandedItem";
import { DefaultTab } from "@/common/components/tab/DefaultTab";
import { css } from "@emotion/react";
import { boardItemInfos } from "../../models/community.model";

export const CommunityListView = () => {
  return (
    <div css={sx.root}>
      <DefaultTab category="직장 폭력" />
      {boardItemInfos.map((it, index) => (
        <BoardExpandedItem
          key={index}
          title={it.title}
          date={it.date}
          nickname={it.nickname}
          category={it.category}
          like={it.like}
          comments={it.comments}
        />
      ))}
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
    position: relative;

    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
};
