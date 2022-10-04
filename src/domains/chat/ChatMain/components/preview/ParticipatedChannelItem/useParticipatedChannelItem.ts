import { ChatAtom } from "@/recoil/Navigation/Navigation.atom";
import { useSetRecoilState } from "recoil";
import { useChatContext } from "stream-chat-react";

export const useParticipatedChannelItem = (channel: any) => {
  const { client, setActiveChannel } = useChatContext();
  const setIsChannelListVisible = useSetRecoilState(ChatAtom);

  const handleChatJoin = async () => {
    await channel.addMembers([client.user?.id]);
    await channel.watch();
    await setActiveChannel(channel);
    await setIsChannelListVisible(false);
  };

  return {
    onOpen: handleChatJoin,
  };
};
