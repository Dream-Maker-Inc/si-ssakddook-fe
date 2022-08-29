import { CommentWrite } from "@/common/components/board/CommentWrite";
import { DetailTab } from "@/common/components/tab/DetailTab";
import { css } from "@emotion/react";
import { CommentSection } from "./CommentSection";
import { ContentSection } from "./ContentSection";
import { ReactionSection } from "./ReactionSection";
import { useCommunityDetailView } from "./useCommunityDetailView";

export const CommunityDetailView = () => {
  const { commentState } = useCommunityDetailView();
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <DetailTab />
        <ContentSection />
        <ReactionSection />
        <CommentSection />
        <CommentWrite
          value={commentState.value}
          onChange={commentState.onChange}
        />
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;

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
