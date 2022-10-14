import { RoutePath } from "@/constants/Path";
import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { useRouter } from "next/router";
import { useState } from "react";
import { useChatContext } from "stream-chat-react";

export const useChatRoomTab = () => {
  const router = useRouter();
  const { channel, client } = useChatContext();

  const [modalOpen, setModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

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

  const handleChatExit = async () => {
    await setModalOpen(false);
    await channel?.removeMembers([LocalStorage.getItem("id")!!], {
      text: `${client.user?.name}님이 나가셨습니다.`,
    });

    await channel?.stopWatching();
    router.replace(RoutePath.Main);
  };

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
  };
};
