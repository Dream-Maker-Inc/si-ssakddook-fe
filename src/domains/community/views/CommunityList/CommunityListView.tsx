import { BoardExpandedItem } from "@/common/components/board/BoardExpandedItem";
import { FloatingButton } from "@/common/components/button/FloatingButton";
import { PlainLayout } from "@/common/components/layout/PlainLayout";
import { CircularLoading } from "@/common/components/progress/CircularProgress/CircularLoading";
import { DefaultTab } from "@/common/components/tab/DefaultTab";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { useCommunityListView } from "./useCommunityListView";

export const CommunityListView = () => {
  const { category, fetchState, result, emptyResultText, ref } =
    useCommunityListView();
  if (fetchState.isLoading)
    return (
      <PlainLayout isBttomMarginNecessary={false}>
        <DefaultTab category={category} />
        <CircularLoading />
      </PlainLayout>
    );
  if (fetchState.isError) return <div>에러가 발생했습니다.</div>;

  return (
    <PlainLayout isBttomMarginNecessary={true}>
      <DefaultTab category={category} />
      <div css={sx.root}>
        {result!![0].length !== 0 ? (
          result!!.map((postings, index) => (
            <div key={index}>
              {postings.map((it, index) => (
                <BoardExpandedItem
                  key={index}
                  postId={it.id + ""}
                  title={it.title}
                  date={it.date}
                  nickname={it.nickname}
                  category={it.category}
                  like={it.likedCount}
                  comments={it.commentCount}
                />
              ))}
            </div>
          ))
        ) : (
          <div css={sx.emptyRoot}>
            <Typography variant="caption">{emptyResultText}</Typography>
          </div>
        )}
        <div css={sx.target} ref={ref}></div>
        <FloatingButton isCategoryListView={true} />
      </div>
      )
    </PlainLayout>
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
  emptyRoot: css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  target: css`
    width: 100%;
    height: 1px;
    background-color: transparent;
  `,
};
