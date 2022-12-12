import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { MainTab } from "@/common/components/tab/MainTab";
import { css } from "@emotion/react";
import { useMainView } from "./useMainView";
import { LifeTopic } from "./components/LifeTopic";
import { CommunityTopic } from "./components/CommunityTopic";
import { BusinessInformationSection } from "./components/BusinessInformationSection";

export const MainView = () => {
  const { result, username } = useMainView();

  return (
    <AppbarLayout>
      <MainTab username={username} />
      <div css={sx.root}>
        <div css={sx.container}>
          <CommunityTopic data={result.postData} />
          <LifeTopic data={result.lifePostData} />
        </div>
        <BusinessInformationSection />
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
    padding: 16px 16px 0 16px;
  `,
};
