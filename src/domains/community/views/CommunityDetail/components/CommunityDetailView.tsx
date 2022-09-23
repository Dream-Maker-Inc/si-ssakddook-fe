import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { DetailTab } from "@/common/components/tab/DetailTab";
import { css } from "@emotion/react";
import { CommentSection } from "./CommentSection";
import { ContentSection } from "./ContentSection";
import { ReactionSection } from "./ReactionSection";
import { useCommunityDetailView } from "./useCommunityDetailView";
import { CircularLoading } from "@/common/components/progress/CircularProgress/CircularLoading";

export const CommunityDetailView = () => {
  const { fetchState, result, postId } = useCommunityDetailView();
  if (fetchState.isLoading) return <CircularLoading />;
  if (fetchState.isError) return <CircularLoading />;

  return (
    <AppbarLayout hasCommentWriteSection={true}>
      <div css={sx.root}>
        <div css={sx.container}>
          <DetailTab />
          <ContentSection
            category={result.category}
            title={result.title}
            nickname={result.nickname}
            date={result.date}
            content={result.content}
            attachments={result.attachments}
          />
          <ReactionSection
            likeState={{
              likeCount: result.likeCount,
              onLike: result.onLike,
              isLike: result.isLike,
            }}
            commentCount={result.commentCount}
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
