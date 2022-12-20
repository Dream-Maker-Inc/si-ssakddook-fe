import { BoardTab } from "@/common/components/board/BoardTab";
import { PlainLayout } from "@/common/components/layout/PlainLayout";
import { DefaultTab } from "@/common/components/tab/DefaultTab";
import { useRouter } from "next/router";
import { MyCommentList } from "./components/MyCommentList";
import { MyPostList } from "./components/MyPostList";

export const MyArticleView = () => {
  const router = useRouter();
  let prevPage = router.query?.category + "";

  console.log(prevPage);

  return (
    <PlainLayout isBottomMarginNecessary={false}>
      <DefaultTab category="내가 작성한 글" routePath={prevPage} />
      <BoardTab
        isBottomMarginNecessary={false}
        firstTabInfo={{ title: "글", children: <MyPostList /> }}
        secondTabInfo={{ title: "댓글", children: <MyCommentList /> }}
      />
    </PlainLayout>
  );
};
