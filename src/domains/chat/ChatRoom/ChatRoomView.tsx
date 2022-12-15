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
import { useUserSession } from "@/recoil/session/user-session.atom";

export const ChatRoomView = () => {
  const { user } = useUserSession();

  const UserChatProfileImage = () => {
    const ssakdukLogoImageUrl = "https://ssakduk.com/global-assets/logo.png";

    return (
      <Avatar
        image={user?.image == "" ? ssakdukLogoImageUrl : user?.image}
        shape="circle"
      />
    );
  };
  return (
    <PlainLayout isBottomMarginNecessary={false}>
      <ChatRoomTab />
      <div css={sx.root}>
        <Channel Avatar={UserChatProfileImage}>
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
