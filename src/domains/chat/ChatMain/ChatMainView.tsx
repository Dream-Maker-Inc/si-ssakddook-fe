import { css } from "@emotion/react";
import { BoardTab } from "@/common/components/board/BoardTab";
import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  LoadingIndicator,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import "stream-chat-react/dist/css/index.css";
import { ChatCreateView } from "../ChatCreate";
import { ChatMainTab } from "./components/tab/ChatMainTab";
import { ChatRoomTab } from "./components/tab/ChatRoomTab";
import { CustomChannel } from "./components/channel/CustomChannel";
import { EveryChannelList } from "./components/channelList/EveryChannelList";
import { ParticipatedChannelList } from "./components/channelList/PrticipatedChannelList";
import { useChatMainView } from "./useChatMainView";

export const ChatMainView = () => {
  const { chatCreateState, channelListState } = useChatMainView();

  return (
    <AppbarLayout>
      {channelListState.visible ? (
        <ChatMainTab
          name={chatCreateState.title.value}
          desc={chatCreateState.desc.value}
          onClick={chatCreateState.tab.onClick}
          onBack={chatCreateState.tab.onBack}
          onChangeTabState={chatCreateState.tab.onChangeTabState}
          isCreateView={chatCreateState.visible}
        />
      ) : (
        <ChatRoomTab />
      )}
      {chatCreateState.visible ? (
        <ChatCreateView
          titleProps={{
            value: chatCreateState.title.value,
            onChange: chatCreateState.title.onChange,
          }}
          descProps={{
            value: chatCreateState.desc.value,
            onChange: chatCreateState.desc.onChange,
          }}
        />
      ) : (
        <div css={sx.container}>
          <BoardTab
            isVisible={channelListState.visible}
            firstTabInfo={{
              title: "참여중",
              children: <ParticipatedChannelList />,
            }}
            secondTabInfo={{
              title: "둘러보기",
              children: <EveryChannelList />,
            }}
          />
          <CustomChannel isVisible={!channelListState.visible}>
            <Window>
              <MessageList messageActions={[]} />
              <MessageInput />
            </Window>
          </CustomChannel>
        </div>
      )}
    </AppbarLayout>
  );
};

const sx = {
  container: css`
    width: 100%;
    height: 100%;
  `,
};
