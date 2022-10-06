import { BoardComment } from "@/common/components/board/BoardComment";
import { CircularLoading } from "@/common/components/progress/CircularProgress/CircularLoading";
import { RoutePath } from "@/constants/Path";
import { css } from "@emotion/react";
import { getDateDiff } from "@/utils/DateDif/DateDiff";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { CommentWrite } from "../../../components/CommentWrite";
import { useCommentSection } from "./useCommentSection";
import { LightColor } from "@/themes/Color";

type CommentSectionProps = {
  postId: string;
};

export const CommentSection = ({ postId }: CommentSectionProps) => {
  const { fetchState, result, commentState, likeState } =
    useCommentSection(postId);

  if (!result) return <div></div>;
  if (fetchState.isLoading) return <CircularLoading />;
  if (fetchState.isError) return <div></div>;

  const { models, buttonState } = result;

  return (
    <div>
      {models.slice(0, 10).map((it, index) => (
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
                  likeState.createLike({ type: "comment", contentId: it.id })
              : () => likeState.deleteLike(it.myLiked.id)
          }
          onDelete={buttonState.onDelete}
        />
      ))}

      {models.length >= 10 && <CommentDetailViewButton postId={postId} />}

      <CommentWrite
        value={commentState.value}
        onChange={commentState.onChange}
        onCommentSubmit={commentState.onSubmit}
      />
    </div>
  );
};

const sx = {
  button: css`
    padding: 0 20px;
    border-color: transparent;
    font-size: 10px;
    color: ${LightColor.Gray100};

    &:hover {
      border-color: transparent;
    }
  `,
};

type CommentDetailViewButtonProps = {
  postId: string;
};

const CommentDetailViewButton = ({ postId }: CommentDetailViewButtonProps) => {
  const router = useRouter();
  const onViewCommentDetail = () => {
    router.push({
      pathname: RoutePath.CommunintyCommentDetail,
      query: { postId: postId },
    });
  };

  return (
    <Button
      fullWidth
      onClick={onViewCommentDetail}
      variant="outlined"
      css={sx.button}
    >
      댓글 전체보기
    </Button>
  );
};
