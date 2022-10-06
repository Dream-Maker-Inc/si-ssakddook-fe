import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { ChatAtom } from "@/recoil/Navigation/Navigation.atom";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Message, useChatContext } from "stream-chat-react";

export const useChatTab = () => {
  const { channel, client } = useChatContext();
  const setIsChannelListVisible = useSetRecoilState(ChatAtom);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleBackToChannelList = () => {
    setIsChannelListVisible(true);
  };

  const handleChatExit = async () => {
    setModalOpen(false);
    //await channel?.removeMembers([LocalStorage.getItem("id")!!]);
    await channel?.removeMembers(["emily"]);
    await channel?.stopWatching;
    await setIsChannelListVisible(true);
  };
  return {
    tabState: {
      onPrev: handleBackToChannelList,
    },
    modalState: {
      isOpen: modalOpen,
      onOpen: handleModalOpen,
      onClose: handleModalClose,
      onContinue: handleChatExit,
    },
  };
};
