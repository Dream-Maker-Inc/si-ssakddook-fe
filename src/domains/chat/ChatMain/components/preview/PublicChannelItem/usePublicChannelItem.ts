import { ChatAtom } from "@/recoil/Navigation/Navigation.atom";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useChannelActionContext, useChatContext } from "stream-chat-react";

export const usePublicChannelItem = (channel: any) => {
  const { client, setActiveChannel } = useChatContext();
  const { sendMessage } = useChannelActionContext();

  const setIsChannelListVisible = useSetRecoilState(ChatAtom);

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleChatJoin = async () => {
    setModalOpen(false);

    await channel.addMembers(
      [client.user?.id],
      sendMessage({ text: `${client.user?.name} 님이 입장했습니다.` })
    );

    await channel.watch();
    await setActiveChannel(channel);
    await setIsChannelListVisible(false);
  };

  return {
    modalState: {
      isOpen: modalOpen,
      onOpen: handleModalOpen,
      onClose: handleModalClose,
      onContinue: handleChatJoin,
    },

    channelState: {
      channelUserid: channel.data.created_by.id,
      clientUserId: client.user?.id,
    },
  };
};
