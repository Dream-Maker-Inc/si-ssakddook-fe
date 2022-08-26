import { BoardComment } from "@/common/components/board/BoardComment";
import { commentsModel } from "@/domains/community/community.model";

export const CommentSection = () => {
  return (
    <div>
      {commentsModel.map((it, index) => (
        <BoardComment
          key={index}
          content={it.content}
          nickname={it.nickname}
          date={it.date}
          like={it.like}
        />
      ))}
    </div>
  );
};
