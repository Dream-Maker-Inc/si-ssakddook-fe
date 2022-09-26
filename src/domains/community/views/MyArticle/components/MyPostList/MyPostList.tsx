import { BoardItem } from "@/common/components/board/BoardItem";
import { CircularLoading } from "@/common/components/progress/CircularProgress/CircularLoading";
import { getDateDiff } from "@/utils/DateDif/DateDiff";
import { css } from "@emotion/react";
import { useMyPostList } from "./useMyPostList";

export const MyPostList = () => {
  const { fetchState, result } = useMyPostList();

  if (fetchState.isLoading) return <CircularLoading />;
  if (fetchState.isError) return <CircularLoading />;

  return (
    <div css={sx.postRoot}>
      {result?.map((it, index) => (
        <BoardItem
          key={index}
          postId={it.id}
          title={it.title}
          date={getDateDiff(it.createdAt)}
          nicknameOrTitle={it.author.nickname}
          category={it.category}
          like={it.likedCount + ""}
          comments={it.commentCount + ""}
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
