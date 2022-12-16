import { css } from "@emotion/react";
import { BoardTab } from "@/common/components/board/BoardTab";
import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import "stream-chat-react/dist/css/index.css";
import { ChatMainTab } from "./components/tab/ChatMainTab";
import { EveryChannelList } from "./components/channelList/EveryChannelList";
import { ParticipatedChannelList } from "./components/channelList/PrticipatedChannelList";

export const ChatMainView = () => {
  return (
    <AppbarLayout>
      <ChatMainTab />
      <div css={sx.container}>
        <BoardTab
          firstTabInfo={{
            title: "모든 채팅방",
            children: <EveryChannelList />,
          }}
          secondTabInfo={{
            title: "참여 채팅방",
            children: <ParticipatedChannelList />,
          }}
        />
      </div>
    </AppbarLayout>
  );
};

const sx = {
  container: css`
    width: 100%;
    height: 100%;
  `,
};
