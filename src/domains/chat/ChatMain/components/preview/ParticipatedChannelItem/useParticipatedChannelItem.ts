import { RoutePath } from "@/constants/Path";
import { ChatAtom } from "@/recoil/Navigation/Navigation.atom";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { useChatContext } from "stream-chat-react";

export const useParticipatedChannelItem = (channel: any) => {
  const router = useRouter();
  const { setActiveChannel } = useChatContext();
  const setIsChannelListVisible = useSetRecoilState(ChatAtom);

  const renderMessageText = () => {
    const lastMessageText =
      channel.state.messages[channel.state.messages.length - 1];

    const text = lastMessageText == null ? "" : lastMessageText.text;
    return text.length < 60 ? text : `${text.slice(0, 70)}...`;
  };

  const handleChatJoin = async () => {
    await channel.watch();
    await setActiveChannel(channel);
    //await setIsChannelListVisible(false);

    router.push(RoutePath.ChatRoom);
  };

  return {
    onOpen: handleChatJoin,
    messageTitle: renderMessageText,
  };
};
