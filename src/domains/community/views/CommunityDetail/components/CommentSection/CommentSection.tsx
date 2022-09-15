import { BoardComment } from "@/common/components/board/BoardComment";
import { useCommentSection } from "./useCommentSection";

type CommentSectionProps = {
  postId: string;
};

export const CommentSection = ({ postId }: CommentSectionProps) => {
  const { models } = useCommentSection(postId);
  return (
    <div>
      {models?.map((it, index) => (
        <BoardComment
          key={index}
          id={it.comment.id}
          content={it.comment.content}
          nickname={it.member.nickname}
          date={it.comment.createdAt}
          like={it.likedCount}
        />
      ))}
    </div>
  );
};
