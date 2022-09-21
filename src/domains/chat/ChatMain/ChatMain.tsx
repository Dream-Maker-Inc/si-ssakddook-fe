import { css } from "@emotion/react";
import { BoardTab } from "@/common/components/board/BoardTab";
import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { ChatAtom } from "@/recoil/Navigation/Navigation.atom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
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
import { ChatMainTab } from "./components/chatTab/ChatMainTab";
import { ChatRoomTab } from "./components/chatTab/ChatRoomTab";
import { CustomChannel } from "./components/CustomChannel";
import { CustomChannelList } from "./components/CustomChannelList";
import { CustomLoadingIndicator } from "./components/CustomLoadingIndicator";
import { CustomPreview } from "./components/CustomPreview";
import { EveryChannelList } from "./components/EveryChannelList";
import LocalStorage from "@/data/LocalStorage/LocalStorage";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY!!;
const user = {
  id: LocalStorage.getItem("id")!!,
  name: LocalStorage.getItem("nickname")!!,
  image: "https://getstream.imgix.net/images/random_svg/FS.png",
};

export const ChatMainView = () => {
  const [client, setClient] = useState<any>(null);
  const [isCreateChatVisible, setIsCreateChatVisible] = useState(false);
  const [isChannelListVisible, setIsChannelListVisible] =
    useRecoilState(ChatAtom);

  useEffect(() => {
    async function init() {
      const chatClient = StreamChat.getInstance(apiKey);
      await chatClient.connectUser(user, chatClient.devToken(user.id));

      await setClient(chatClient);
    }

    init();

    if (client)
      return () => {
        console.log("client disconnected");
        console.log(client);
        client.disconnectUser();
      };
  }, []);

  if (!client) return <LoadingIndicator />;

  const myChat = { members: { $in: [user.id] } };

  return (
    <AppbarLayout>
      <Chat client={client} theme="messaging light">
        {isChannelListVisible ? (
          <ChatMainTab
            onCreate={() => setIsCreateChatVisible(true)}
            onBack={() => setIsCreateChatVisible(false)}
            isCreateView={isCreateChatVisible}
          />
        ) : (
          <ChatRoomTab />
        )}
        {isCreateChatVisible ? (
          <ChatCreateView
            onClose={() => {
              setIsChannelListVisible(false);
              setIsCreateChatVisible(false);
            }}
          />
        ) : (
          <div css={sx.container}>
            <BoardTab
              isVisible={isChannelListVisible}
              firstTabInfo={{
                title: "참여중",
                children: (
                  <CustomChannelList
                    props={{
                      Preview: CustomPreview,
                      filters: myChat,
                      LoadingIndicator: CustomLoadingIndicator,
                    }}
                  />
                ),
              }}
              secondTabInfo={{
                title: "둘러보기",
                children: <EveryChannelList />,
              }}
            />
            <CustomChannel isVisible={!isChannelListVisible}>
              <Window>
                <MessageList />
                <MessageInput />
              </Window>
              <Thread />
            </CustomChannel>
          </div>
        )}
      </Chat>
    </AppbarLayout>
  );
};

const sx = {
  container: css`
    width: 100%;
    height: 100%;
  `,
};
