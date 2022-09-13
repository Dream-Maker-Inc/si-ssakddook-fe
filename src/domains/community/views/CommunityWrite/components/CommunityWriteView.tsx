import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { WritingTab } from "@/common/components/tab/WritingTab";
import { css } from "@emotion/react";
import { CameraSection } from "./CameraSection/CameraSection";
import { CategorySelection } from "./CategorySelection/CategorySelection";
import { ContentSecton } from "./ContentSecton/ContentSection";
import { ThumbnailSection } from "./ThumbnailSection/ThumbnailSection";
import { TitleSection } from "./TitleSection";
import { useCommunityWriteView } from "./useCommunityWriteView";

export const CommunityWriteView = () => {
  const { titleState, categoryState, contentState, imageState, buttonState } =
    useCommunityWriteView();
  return (
    <AppbarLayout>
      <WritingTab onActive={buttonState.onActive} />
      <div css={sx.root}>
        <div css={sx.container}>
          <CategorySelection
            categoryList={categoryState.list}
            value={categoryState.value}
            onChange={categoryState.onChange}
          />
          <TitleSection
            value={titleState.value}
            onChange={titleState.onChange}
          />
          <ContentSecton
            value={contentState.value}
            onChange={contentState.onChange}
          />
          {imageState.value.length === 0 ? (
            <ThumbnailSection
              uploadImageList={imageState.value}
              isVisible={false}
              onDeleteClick={buttonState.onDelete}
            />
          ) : (
            <ThumbnailSection
              uploadImageList={imageState.value}
              isVisible={true}
              onDeleteClick={buttonState.onDelete}
            />
          )}
          <CameraSection onUpload={imageState.onUpload} />
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