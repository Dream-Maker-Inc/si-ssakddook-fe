import { BoardItem } from "@/common/components/board/BoardItem";
import { CircularLoading } from "@/common/components/progress/CircularProgress/CircularLoading";
import { RoutePath } from "@/constants/Path";
import { getTimeFromNow } from "@/utils/moment/DateMoment";
import { css } from "@emotion/react";
import { useMyPostList } from "./useMyPostList";

export const MyPostList = () => {
  const { fetchState, result, ref } = useMyPostList();

  if (fetchState.isLoading) return <CircularLoading />;
  if (fetchState.isError) return <div>에러가 발생했습니다.</div>;

  return (
    <div css={sx.root}>
      {result?.pages.map((page, index) => (
        <div key={index}>
          {page.data.data.items.map((it, index) => (
            <BoardItem
              key={index}
              postId={it.id}
              title={it.title}
              date={getTimeFromNow(it.createdAt)}
              nicknameOrTitle={it.author.nickname}
              category={it.category}
              like={it.likedCount + ""}
              comments={it.commentCount + ""}
              isInMyArticleList={true}
              prevPage={RoutePath.MyArticle}
            />
          ))}
        </div>
      ))}
      <div css={sx.target} ref={ref}></div>
    </div>
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
    background-color: tranparent;
  `,
};
