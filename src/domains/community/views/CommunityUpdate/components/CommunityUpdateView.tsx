import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { WritingTab } from "@/common/components/tab/WritingTab";
import { css } from "@emotion/react";
import { ContentSecton } from "./ContentSecton/ContentSection";
import { TitleSection } from "./TitleSection";
import { useCommunityUpdateView } from "./useCommunityUpdateView";

export const CommunityUpdateView = () => {
  const { titleState, contentState, tabState } = useCommunityUpdateView();
  return (
    <AppbarLayout>
      <WritingTab onActive={tabState.onActive} onClick={tabState.onClick} />
      <div css={sx.root}>
        <div css={sx.container}>
          <TitleSection
            value={titleState.value}
            onChange={titleState.onChange}
          />
          <ContentSecton
            value={contentState.value}
            onChange={contentState.onChange}
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
