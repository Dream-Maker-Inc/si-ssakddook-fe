import { BoardItem } from "@/common/components/board/BoardItem";
import { RoutePath } from "@/constants/Path";
import { useHotBoardList } from "./useHotBoardList";

export const HotBoardList = () => {
  const { result } = useHotBoardList();

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
            prevPage={RoutePath.Main}
          />
        ))}
    </div>
  );
};
