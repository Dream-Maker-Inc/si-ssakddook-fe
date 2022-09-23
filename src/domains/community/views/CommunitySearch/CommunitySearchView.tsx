import { BoardExpandedItem } from "@/common/components/board/BoardExpandedItem";
import { PlainLayout } from "@/common/components/layout/PlainLayout";
import { CircularLoading } from "@/common/components/progress/CircularProgress/CircularLoading";
import { SearchTab } from "@/common/components/tab/SearchTab";
import { LightColor } from "@/themes/Color";
import { getDateDiff } from "@/utils/DateDif/DateDiff";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { useCommunitySearchView } from "./useCommunitySearchView";

export const CommunitySearchView = () => {
  const { searchState, fetchState, result } = useCommunitySearchView();

  if (fetchState.isLoading) return <CircularLoading />;

  return (
    <PlainLayout>
      <SearchTab
        value={searchState.value}
        onChange={searchState.onChange}
        onSearch={searchState.onSearch}
      />
      <div css={sx.root}>
        {result?.items.length == 0 ? (
          <div css={sx.text}>
            <Typography variant="body1" color={LightColor.Gray100}>
              검색 정보가 없습니다.
            </Typography>
          </div>
        ) : (
          result?.items.map((it, index) => (
            <BoardExpandedItem
              key={index}
              postId={it.posting.id + ""}
              title={it.posting.title}
              date={getDateDiff(it.posting.createdAt)}
              nickname={it.member.nickname}
              category={it.posting.category}
              like={it.likedCount + ""}
              comments={it.commentCount + ""}
            />
          ))
        )}
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

  text: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};
