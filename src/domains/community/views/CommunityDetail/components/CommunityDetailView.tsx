import { CommentWrite } from "@/common/components/board/CommentWrite";
import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { DetailTab } from "@/common/components/tab/DetailTab";
import { css } from "@emotion/react";
import Router from "next/router";
import { CommentSection } from "./CommentSection";
import { ContentSection } from "./ContentSection";
import { ReactionSection } from "./ReactionSection";
import { useCommunityDetailView } from "./useCommunityDetailView";

export const CommunityDetailView = () => {
  const { commentState, models, postId } = useCommunityDetailView();

  return (
    <AppbarLayout>
      <div css={sx.root}>
        <div css={sx.container}>
          <DetailTab />
          <ContentSection
            category={models?.posting.category}
            title={models?.posting.title}
            nickname={models?.member.nickname}
            date={models?.posting.createdAt}
            content={models?.posting.content}
          />
          <ReactionSection
            likeCount={models?.likedCount}
            commentCount={models?.commentCount}
          />
          <CommentSection postId={postId} />
          <CommentWrite
            value={commentState.value}
            onChange={commentState.onChange}
          />
        </div>
      </div>
    </AppbarLayout>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;

    padding: 16px 0;

    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  `,

  container: css`
    width: 100%;
    height: 100%;
  `,
};
