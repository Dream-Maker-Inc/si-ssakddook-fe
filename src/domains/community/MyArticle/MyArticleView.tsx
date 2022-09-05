import { PlainLayout } from "@/common/components/layout/PlainLayout";
import { DefaultTab } from "@/common/components/tab/DefaultTab";
import { ArticleTab } from "./components/ArticleTab";
import { MyCommentList } from "./components/MyCommentList";
import { MyPostList } from "./components/MyPostList";

export const MyArticleView = () => {
  return (
    <PlainLayout>
      <DefaultTab category="내가 작성한 글" />
      <ArticleTab
        myPostList={<MyPostList />}
        myCommentList={<MyCommentList />}
      />
    </PlainLayout>
  );
};
