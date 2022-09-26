import { BoardComment } from "@/common/components/board/BoardComment";
import { CircularLoading } from "@/common/components/progress/CircularProgress/CircularLoading";
import { getDateDiff } from "@/utils/DateDif/DateDiff";
import { CommentWrite } from "../CommentWrite";
import { useCommentSection } from "./useCommentSection";

type CommentSectionProps = {
  postId: string;
};

export const CommentSection = ({ postId }: CommentSectionProps) => {
  const { fetchState, result, commentState } = useCommentSection(postId);

  if (!result) return <div></div>;
  if (fetchState.isLoading) return <CircularLoading />;
  if (fetchState.isError) return <div></div>;

  const { models, buttonState } = result;

  return (
    <div>
      {models.map((it, index) => (
        <BoardComment
          key={index}
          commentId={it.id}
          content={it.content}
          writerId={it.author.id + ""}
          nickname={it.author.nickname}
          date={getDateDiff(it.createdAt)}
          like={it.likedCount}
          onDelete={buttonState.onDelete}
        />
      ))}
      <CommentWrite
        value={commentState.value}
        onChange={commentState.onChange}
        postId={postId}
        onCommentSubmit={commentState.onSubmit}
      />
    </div>
  );
};
