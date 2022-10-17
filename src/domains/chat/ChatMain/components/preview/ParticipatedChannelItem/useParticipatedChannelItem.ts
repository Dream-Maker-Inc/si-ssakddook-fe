import { RoutePath } from "@/constants/Path";
import { getTimeFromNow } from "@/utils/moment/DateMoment";
import { useRouter } from "next/router";
import { useChatContext } from "stream-chat-react";

export const useParticipatedChannelItem = (channel: any) => {
  const router = useRouter();
  const { setActiveChannel } = useChatContext();

  const lastMessage = () => {
    const lastMessageText =
      channel.state.messages[channel.state.messages.length - 1];

    const text = lastMessageText == null ? "" : lastMessageText.text;
    return text.length < 60 ? text : `${text.slice(0, 70)}...`;
  };

  const handleChatJoin = async () => {
    await channel.watch();
    await setActiveChannel(channel);

    router.push(RoutePath.ChatRoom);
  };

  const lastMessageTime =
    channel.data.last_message_at === undefined
      ? ""
      : getTimeFromNow(channel.data.last_message_at);

  return {
    onOpen: handleChatJoin,
    lastMessage: lastMessage,

    channelState: {
      title: channel.data.name,
      lastDate: lastMessageTime,
    },
  };
};
