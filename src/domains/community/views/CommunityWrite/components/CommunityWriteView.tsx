import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { WritingTab } from "@/common/components/tab/WritingTab";
import { css } from "@emotion/react";
import { CameraSection } from "./CameraSection/CameraSection";
import { CategorySelection } from "../../../../chat/ChatCreate/components/CategorySelection/CategorySelection";
import { ContentSecton } from "./ContentSecton/ContentSection";
import { CreateThumbnailSection } from "@/common/components/thumbnail/CreateThumbnailSection";
import { TitleSection } from "./TitleSection";
import { useCommunityWriteView } from "./useCommunityWriteView";

export const CommunityWriteView = () => {
  const {
    titleState,
    categoryState,
    contentState,
    imageState,
    buttonState,
    tabState,
  } = useCommunityWriteView();
  return (
    <AppbarLayout>
      <WritingTab onActive={tabState.onActive} onClick={tabState.onClick} />
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
          {imageState.value.length !== 0 && (
            <CreateThumbnailSection
              uploadImage={imageState.value}
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
