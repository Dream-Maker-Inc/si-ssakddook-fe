import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { DefaultTab } from "@/common/components/tab/DefaultTab";
import { useCommunityCommentDetailView } from "./useCommunityCommentDetailView";
import { css } from "@emotion/react";
import { BoardComment } from "@/common/components/board/BoardComment";
import { getDateDiff } from "@/utils/DateDif/DateDiff";
import { CommentWrite } from "../components/CommentWrite";

export const CommunityCommentDetailView = () => {
  const { result, commentState, likeState, ref } =
    useCommunityCommentDetailView();
  const { models, buttonState } = result;
  return (
    <AppbarLayout hasCommentWriteSection={true}>
      <DefaultTab category={`댓글 전체보기`} />
      <div css={sx.root}>
        {models?.pages.map((page, index) => (
          <div key={index}>
            {page.data.items.map((it, index) => (
              <BoardComment
                key={index}
                commentId={it.id}
                content={it.content}
                writerId={it.author.id + ""}
                nickname={it.author.nickname}
                date={getDateDiff(it.createdAt)}
                likeCount={it.likedCount}
                isLike={it.myLiked == null ? false : true}
                onLike={
                  it.myLiked == null
                    ? () =>
                        likeState.createLike({
                          type: "comment",
                          contentId: it.id,
                        })
                    : () => likeState.deleteLike(it.myLiked.id)
                }
                onDelete={buttonState.onDelete}
              />
            ))}
          </div>
        ))}
        <div css={sx.target} ref={ref}></div>
        <CommentWrite
          value={commentState.value}
          onChange={commentState.onChange}
          onCommentSubmit={commentState.onSubmit}
        />
      </div>
    </AppbarLayout>
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
