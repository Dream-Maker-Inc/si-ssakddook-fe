import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { ChatAtom } from "@/recoil/Navigation/Navigation.atom";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useChatContext } from "stream-chat-react";

export const useChatTab = () => {
  const { channel, client } = useChatContext();
  const setIsChannelListVisible = useSetRecoilState(ChatAtom);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleBackToChannelList = () => {
    setIsChannelListVisible(true);
  };

  channel?.on("message.deleted", (event) => {
    console.log("event", event);
    console.log("channel.state", channel.state);
  });

  channel?.on((event) => {
    console.log("event", event);
    console.log("channel.state", channel.state);
  });

  const handleChatExit = async () => {
    setModalOpen(false);
    await channel?.removeMembers([LocalStorage.getItem("id")!!]);
    //await channel?.removeMembers(["emily"]);
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
