import { BoardExpandedItem } from "@/common/components/board/BoardExpandedItem";
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
  if (fetchState.isError) return <div></div>;
  if (!result) return <div></div>;

  return (
    <PlainLayout isBttomMarginNecessary={true}>
      <DefaultTab category={category} />
      <div css={sx.container}>
        {result.pages.map((page, index) => (
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
      </div>
    </PlainLayout>
  );
};

const sx = {
  container: css`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  `,

  target: css`
    width: 100%;
    height: 1px;
    background-color: transparent;
  `,
};
