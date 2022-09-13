import { BoardExpandedItem } from "@/common/components/board/BoardExpandedItem";
import { SearchTab } from "@/common/components/tab/SearchTab";
import { css } from "@emotion/react";
import { boardItemInfos } from "../../models/community.model";
import { useCommunitySearchView } from "./useCommunitySearchView";

export const CommunitySearchView = () => {
  const { searchState } = useCommunitySearchView();
  return (
    <div css={sx.root}>
      <SearchTab value={searchState.value} onChange={searchState.onChange} />
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
