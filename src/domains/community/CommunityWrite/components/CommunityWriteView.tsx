import { WritingTab } from "@/common/components/tab/WritingTab";
import { css } from "@emotion/react";
import { CategorySelection } from "./CategorySelection/CategorySelection";
export const CommunityWriteView = () => {
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <WritingTab />
        <CategorySelection />
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

const TitleSection = () => {
  return null;
};

const ContentSecton = () => {};

const PhotoSection = () => {};

const CameraSection = () => {};
