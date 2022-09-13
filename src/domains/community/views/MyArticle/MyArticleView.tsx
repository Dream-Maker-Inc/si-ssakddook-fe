import { BoardTab } from "@/common/components/board/BoardTab";
import { PlainLayout } from "@/common/components/layout/PlainLayout";
import { DefaultTab } from "@/common/components/tab/DefaultTab";
import { MyCommentList } from "./components/MyCommentList";
import { MyPostList } from "./components/MyPostList";

export const MyArticleView = () => {
  return (
    <PlainLayout>
      <DefaultTab category="내가 작성한 글" />
      <BoardTab
        firstTabInfo={{ title: "글", children: <MyPostList /> }}
        secondTabInfo={{ title: "댓글", children: <MyCommentList /> }}
      />
    </PlainLayout>
  );
};