import { RoutePath } from "@/constants/Path";
import { useRouter } from "next/router";
import { useState } from "react";
import { useChatContext } from "stream-chat-react";

export const usePublicChannelItem = (channel: any) => {
  const router = useRouter();
  const { client, setActiveChannel } = useChatContext();

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleChatJoin = async () => {
    setModalOpen(false);

    await channel.addMembers([client.user?.id], {
      text: `${client.user?.name} 님이 입장했습니다.`,
    });

    await channel.watch();
    await setActiveChannel(channel);
    await router.push(RoutePath.ChatRoom);
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
