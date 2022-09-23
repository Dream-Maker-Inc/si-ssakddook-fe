import { BoardItem } from "@/common/components/board/BoardItem";
import { getDateDiff } from "@/utils/DateDif/DateDiff";
import { css } from "@emotion/react";
import { useMyPostList } from "./useMyPostList";

export const MyPostList = () => {
  const { models } = useMyPostList();
  return (
    <div css={sx.postRoot}>
      {models?.map((it, index) => (
        <BoardItem
          key={index}
          postId={it.posting.id}
          title={it.posting.title}
          date={getDateDiff(it.posting.createdAt)}
          nicknameOrTitle={it.member.nickname}
          category={it.posting.category}
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
