import { BoardExpandedItem } from "@/common/components/board/BoardExpandedItem";
import { PlainLayout } from "@/common/components/layout/PlainLayout";
import { CircularLoading } from "@/common/components/progress/CircularProgress/CircularLoading";
import { DefaultTab } from "@/common/components/tab/DefaultTab";
import { getDateDiff } from "@/utils/DateDif/DateDiff";
import { css } from "@emotion/react";
import { useCommunityListView } from "./useCommunityListView";

export const CommunityListView = () => {
  const { category, fetchState, result } = useCommunityListView();
  if (fetchState.isLoading)
    return (
      <PlainLayout>
        <DefaultTab category={category} />
        <CircularLoading />
      </PlainLayout>
    );
  if (fetchState.isError) return <div></div>;
  if (!result) return <div></div>;

  return (
    <PlainLayout>
      <DefaultTab category={category} />
      <div css={sx.root}>
        {result.map((it, index) => (
          <BoardExpandedItem
            key={index}
            title={it.posting.title}
            date={getDateDiff(it.posting.createdAt)}
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
