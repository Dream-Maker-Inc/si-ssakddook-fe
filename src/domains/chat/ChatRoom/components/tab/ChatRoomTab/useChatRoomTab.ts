import { RoutePath } from "@/constants/Path";
import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { ChannelCreatedByType } from "@/domains/chat/types/ChannelCreatedByType";
import { useRouter } from "next/router";
import { useState } from "react";
import { useChatContext } from "stream-chat-react";

export const useChatRoomTab = () => {
  const router = useRouter();
  const { channel, client } = useChatContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isChatFrozen, setIsChatFrozen] = useState(channel?.data?.frozen);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  // 채팅방 사이드바 모달 action
  const toggleDrawer =
    (open: boolean) => (e: React.KeyboardEvent | React.MouseEvent) => {
      if (
        e.type === "keydown" &&
        ((e as React.KeyboardEvent).key === "Tab" ||
          (e as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsDrawerOpen(open);
    };

  // 채팅방 비활성화 toggle action
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isChatFrozen) {
      await setIsChatFrozen(event.target.checked);
      await channel?.updatePartial({ set: { frozen: false } });
    } else {
      await setIsChatFrozen(event.target.checked);
      await channel?.updatePartial({ set: { frozen: true } });
    }
  };

  // 채탱방 방장인지 여부 확인
  const channelCreatedByInfo = channel?.data
    ?.created_by as ChannelCreatedByType;
  const isChannelOwned =
    LocalStorage.getItem("id")!! == channelCreatedByInfo.id;

  // 채팅방 나가기
  const handleChatExit = async () => {
    await setModalOpen(false);

    await channel?.removeMembers([LocalStorage.getItem("id")!!], {
      text: `${client.user?.name}님이 나가셨습니다.`,
    });

    await channel?.stopWatching();

    router.replace(RoutePath.Main);
  };

  // 채팅방에서 뒤로가기
  const onBack = () => {
    router.replace(RoutePath.Main);
  };

  return {
    tabState: {
      onBack: onBack,
    },
    channelState: {
      title: channel?.data?.name,
      desc: channel?.data?.desc + "",
      createdAt: (channel?.data?.created_at + "").slice(0, 10),
    },
    drawerState: {
      isOpen: isDrawerOpen,
      onClose: toggleDrawer,
    },
    modalState: {
      isOpen: modalOpen,
      onOpen: handleModalOpen,
      onClose: handleModalClose,
      onContinue: handleChatExit,
    },

    toggleState: {
      isChannelOwner: isChannelOwned,
      isChecked: isChatFrozen,
      onChange: handleChange,
    },
  };
};
