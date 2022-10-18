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

    await channel.watch();

    await channel.addMembers([client.user?.id], {
      text: `${client.user?.name} 님이 입장했습니다.`,
    });

    await setActiveChannel(channel);
    await router.push(RoutePath.ChatRoom);
  };

  const participatedMembers = Object.values(channel.state.members).map(
    (it: any) => it.user_id
  );

  const isJoined = participatedMembers.includes(client.user?.id!!);

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
      isJoined: isJoined,
    },
  };
};
