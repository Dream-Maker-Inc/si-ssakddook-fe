import { BoardTab } from "@/common/components/board/BoardTab";
import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { PlainTab } from "@/common/components/tab/PlainTab";
import { ChatAtom } from "@/recoil/Navigation/Navigation.atom";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { StreamChat } from "stream-chat";
import {
  ChannelHeader,
  Chat,
  LoadingIndicator,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import "stream-chat-react/dist/css/index.css";
import { ChatMainTab } from "./components/chatTab/ChatMainTab";
import { ChatRoomTab } from "./components/chatTab/ChatRoomTab";
import { CustomChannel } from "./components/CustomChannel";
import { CustomChannelList } from "./components/CustomChannelList";
import { CustomLoadingIndicator } from "./components/CustomLoadingIndicator";
import { CustomPreview } from "./components/CustomPreview";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY!!;

const user = {
  id: "andy",
  name: "andy",
  image: "https://getstream.imgix.net/images/random_svg/FS.png",
};
export const ChatMainView = () => {
  const [client, setClient] = useState<any>(null);
  const isChannelListVisible = useRecoilValue(ChatAtom);

  useEffect(() => {
    async function init() {
      const chatClient = StreamChat.getInstance(apiKey);
      await chatClient.connectUser(user, chatClient.devToken(user.id));

      setClient(chatClient);
    }

    init();

    if (client) return () => client.disconnectUser();
  }, []);

  if (!client) return <LoadingIndicator />;
  const filter = { members: { $in: ["andy"] } };

  return (
    <AppbarLayout>
      <Chat client={client} theme="messaging light">
        {isChannelListVisible ? <ChatMainTab /> : <ChatRoomTab />}
        <BoardTab
          isVisible={isChannelListVisible}
          firstTabInfo={{
            title: "참여중",
            children: (
              <CustomChannelList
                props={{
                  Preview: CustomPreview,
                  filters: filter,
                  LoadingIndicator: CustomLoadingIndicator,
                }}
              />
            ),
          }}
          secondTabInfo={{
            title: "둘러보기",
            children: (
              <CustomChannelList
                props={{
                  Preview: CustomPreview,
                  filters: filter,
                  LoadingIndicator: CustomLoadingIndicator,
                }}
              />
            ),
          }}
        />
        <CustomChannel isVisible={!isChannelListVisible}>
          <Window>
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </CustomChannel>
      </Chat>
    </AppbarLayout>
  );
};