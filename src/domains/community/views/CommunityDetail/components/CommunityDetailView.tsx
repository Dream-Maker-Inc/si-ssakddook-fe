import { CommentWrite } from "@/domains/community/views/CommunityDetail/components/CommentWrite";
import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { DetailTab } from "@/common/components/tab/DetailTab";
import { css } from "@emotion/react";
import Router from "next/router";
import { CommentSection } from "./CommentSection";
import { ContentSection } from "./ContentSection";
import { ReactionSection } from "./ReactionSection";
import { useCommunityDetailView } from "./useCommunityDetailView";
import { getDateDiff } from "@/utils/DateDif/DateDiff";

export const CommunityDetailView = () => {
  const { models, postId } = useCommunityDetailView();

  return (
    <AppbarLayout hasCommentWriteSection={true}>
      <div css={sx.root}>
        <div css={sx.container}>
          <DetailTab />
          <ContentSection
            category={models?.posting.category}
            title={models?.posting.title}
            nickname={models?.member.nickname}
            date={getDateDiff(models?.posting.createdAt!!)}
            content={models?.posting.content}
          />
          <ReactionSection
            likeCount={models?.likedCount}
            commentCount={models?.commentCount}
          />
          <CommentSection postId={postId} />
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
