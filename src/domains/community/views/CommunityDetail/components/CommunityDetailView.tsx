import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { DetailTab } from "@/common/components/tab/DetailTab";
import { css } from "@emotion/react";
import { CommentSection } from "./CommentSection";
import { ContentSection } from "./ContentSection";
import { ReactionSection } from "./ReactionSection";
import { useCommunityDetailView } from "./useCommunityDetailView";
import { CircularLoading } from "@/common/components/progress/CircularProgress/CircularLoading";

export const CommunityDetailView = () => {
  const { fetchState, models, postId } = useCommunityDetailView();
  if (fetchState.isLoading) return <CircularLoading />;
  if (fetchState.isError) return <CircularLoading />;

  return (
    <AppbarLayout hasCommentWriteSection={true}>
      <div css={sx.root}>
        <div css={sx.container}>
          <DetailTab />
          <ContentSection
            category={models.category}
            title={models.title}
            nickname={models.nickname}
            date={models.date}
            content={models.content}
            attachments={models.attachments}
          />
          <ReactionSection
            likeCount={models.likeCount}
            commentCount={models.commentCount}
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
