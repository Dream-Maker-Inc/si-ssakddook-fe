import { BoardExpandedItem } from "@/common/components/board/BoardExpandedItem";
import { PlainLayout } from "@/common/components/layout/PlainLayout";
import { CircularLoading } from "@/common/components/progress/CircularProgress/CircularLoading";
import { SearchTab } from "@/common/components/tab/SearchTab";
import { LightColor } from "@/themes/Color";
import { getTimeFromNow } from "@/utils/moment/DateMoment";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { useCommunitySearchView } from "./useCommunitySearchView";

export const CommunitySearchView = () => {
  const { searchState, fetchState, result, ref } = useCommunitySearchView();
  if (fetchState.isLoading) return <CircularLoading />;

  return (
    <PlainLayout isBottomMarginNecessary={false}>
      <SearchTab
        value={searchState.value}
        onChange={searchState.onChange}
        onSearch={searchState.onSearch}
        onBack={searchState.onBack}
      />
      <div css={sx.root}>
        {result?.pages[0] !== undefined ? (
          result?.pages.map((page, index) => (
            <div key={index}>
              {page.data.items.map((it, index) => (
                <BoardExpandedItem
                  key={index}
                  postId={it.id + ""}
                  title={it.title}
                  date={getTimeFromNow(it.createdAt)}
                  nickname={it.author.nickname}
                  category={it.category}
                  like={it.likedCount + ""}
                  comments={it.commentCount + ""}
                />
              ))}
            </div>
          ))
        ) : (
          <div css={sx.text}>
            <Typography variant="body1" color={LightColor.Gray100}>
              검색 정보가 없습니다.
            </Typography>
          </div>
        )}
        <div css={sx.target} ref={ref}></div>
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
  target: css`
    width: 100%;
    height: 1px;
    background-color: transparent;
  `,
};
