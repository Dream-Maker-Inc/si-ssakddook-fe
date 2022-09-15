import { BoardComment } from "@/common/components/board/BoardComment";
import { CircularLoading } from "@/common/components/progress/CircularProgress/CircularLoading";
import { useCommentSection } from "./useCommentSection";

type CommentSectionProps = {
  postId: string;
};

export const CommentSection = ({ postId }: CommentSectionProps) => {
  const { fetchState, result } = useCommentSection(postId);

  if (!result) return <div></div>;
  if (fetchState.isLoading) return <CircularLoading />;
  if (fetchState.isError) return <div></div>;

  const { models, buttonState } = result;

  return (
    <div>
      {models.map((it, index) => (
        <BoardComment
          key={index}
          commentId={it.comment.id}
          content={it.comment.content}
          nickname={it.member.nickname}
          date={it.comment.createdAt}
          like={it.likedCount}
          onDelete={buttonState.onDelete}
        />
      ))}
    </div>
  );
};
