import { BoardItem } from "@/common/components/board/BoardItem";
import { useRecentBoardList } from "./useRecentBoardList";

export const RecentBoardList = () => {
  const { result } = useRecentBoardList();
  return (
    <div>
      {!result ||
        result.map((it, index) => (
          <BoardItem
            key={index}
            postId={it.id}
            title={it.title}
            date={it.date}
            nicknameOrTitle={it.nickname}
            category={it.category}
            like={it.likedCount}
            comments={it.commentCount}
          />
        ))}
    </div>
  );
};
