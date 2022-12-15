import { PlainLayout } from "@/common/components/layout/PlainLayout";
import { css } from "@emotion/react";
import {
  Avatar,
  Channel,
  MessageInput,
  MessageList,
  Window,
} from "stream-chat-react";
import { ChatRoomTab } from "./components/tab/ChatRoomTab";

export const ChatRoomView = () => {
  return (
    <PlainLayout isBottomMarginNecessary={false}>
      <ChatRoomTab />
      <div css={sx.root}>
        <Channel>
          <Window>
            <MessageList messageActions={[]} />
            <MessageInput />
          </Window>
        </Channel>
      </div>
    </PlainLayout>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
  `,
};
