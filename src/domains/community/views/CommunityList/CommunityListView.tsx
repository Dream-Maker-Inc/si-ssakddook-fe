import { BoardExpandedItem } from "@/common/components/board/BoardExpandedItem";
import { FloatingButton } from "@/common/components/button/FloatingButton";
import { PlainLayout } from "@/common/components/layout/PlainLayout";
import { CircularLoading } from "@/common/components/progress/CircularProgress/CircularLoading";
import { DefaultTab } from "@/common/components/tab/DefaultTab";
import { getDateDiff } from "@/utils/DateDif/DateDiff";
import { css } from "@emotion/react";
import { useCommunityListView } from "./useCommunityListView";

export const CommunityListView = () => {
  const { category, fetchState, result, ref } = useCommunityListView();
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
        {result?.pages.map((page, index) => (
          <div key={index}>
            {page.data.items.map((it, index) => (
              <BoardExpandedItem
                key={index}
                postId={it.id + ""}
                title={it.title}
                date={getDateDiff(it.createdAt)}
                nickname={it.author.nickname}
                category={it.category}
                like={it.likedCount + ""}
                comments={it.commentCount + ""}
              />
            ))}
          </div>
        ))}
        <div css={sx.target} ref={ref}></div>
        <FloatingButton isCategoryListView={true} />
      </div>
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
  target: css`
    width: 100%;
    height: 1px;
    background-color: transparent;
  `,
};
