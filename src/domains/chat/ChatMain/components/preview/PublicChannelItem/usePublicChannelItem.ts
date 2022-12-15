import { RoutePath } from "@/constants/Path";
import { CHAT_CATEGORY_TYPE } from "@/domains/chat/types/ChatCategoryType.enum";
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
    // 모든 메세지 지우기
    await channel.truncate();

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

  const channelType = channel.data.config.name;
  const channelCategory =
    CHAT_CATEGORY_TYPE[channelType as keyof typeof CHAT_CATEGORY_TYPE];

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
      channelCategory: channelCategory,
    },
  };
};
