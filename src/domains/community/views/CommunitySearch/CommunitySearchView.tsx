import { BoardExpandedItem } from "@/common/components/board/BoardExpandedItem";
import { PlainLayout } from "@/common/components/layout/PlainLayout";
import { CircularLoading } from "@/common/components/progress/CircularProgress/CircularLoading";
import { SearchTab } from "@/common/components/tab/SearchTab";
import { css } from "@emotion/react";
import { useCommunitySearchView } from "./useCommunitySearchView";

export const CommunitySearchView = () => {
  const { searchState, fetchState, result } = useCommunitySearchView();

  if (fetchState.isLoading) return <CircularLoading />;
  return (
    <PlainLayout>
      <SearchTab
        value={searchState.value}
        onChange={searchState.onChange}
        onSearch={() => alert(1)}
      />
      <div css={sx.root}>
        {result?.items.map((it, index) => (
          <BoardExpandedItem
            key={index}
            title={it.posting.title}
            date={it.posting.createdAt}
            nickname={it.member.nickname}
            category={it.posting.category}
            like={it.likedCount + ""}
            comments={it.commentCount + ""}
          />
        ))}
      </div>
    </PlainLayout>
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
