import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { MainTab } from "@/common/components/tab/MainTab";
import { css } from "@emotion/react";
import { useMainView } from "./useMainView";
import { LifeTopic } from "./components/LifeTopic";
import { CommunityTopic } from "./components/CommunityTopic";

export const MainView = () => {
  const { data, username } = useMainView();
  return (
    <AppbarLayout>
      <MainTab username={username} />
      <div css={sx.root}>
        <CommunityTopic />
        <LifeTopic />
      </div>
    </AppbarLayout>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
    padding: 16px;

    overflow-y: scroll;

    ::-webkit-scrollbar {
      display: none;
    }
  `,
};
