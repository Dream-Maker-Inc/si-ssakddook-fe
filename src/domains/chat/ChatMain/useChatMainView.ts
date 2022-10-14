import { ChatAtom } from "@/recoil/Navigation/Navigation.atom";
import { useState } from "react";
import { useRecoilState } from "recoil";

export const useChatMainView = () => {
  const [isCreateChatVisible, setIsCreateChatVisible] = useState(false);
  const [isChannelListVisible, setIsChannelListVisible] =
    useRecoilState(ChatAtom);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleNameChange = (v: string) => {
    if (v.length >= 25) return;

    setName(v);
  };
  const handleNameReset = () => {
    setName("");
  };

  const handleDescChange = (v: string) => {
    if (v.length >= 30) return;

    setDesc(v);
  };
  const handleDescReset = () => {
    setDesc("");
  };

  const handleCreateChatVisible = () => {
    setIsCreateChatVisible(true);
  };

  const handleBack = () => {
    setIsCreateChatVisible(false);
    handleNameReset();
    handleDescReset();
  };

  const handleChangeTabState = () => {
    setIsChannelListVisible(false);
    setIsCreateChatVisible(false);
    handleNameReset();
    handleDescReset();
  };

  return {
    chatCreateState: {
      title: {
        value: name,
        onChange: handleNameChange,
      },
      desc: {
        value: desc,
        onChange: handleDescChange,
      },
      tab: {
        onClick: handleCreateChatVisible,
        onChangeTabState: handleChangeTabState,
        onBack: handleBack,
      },
      visible: isCreateChatVisible,
    },
    channelListState: {
      visible: isChannelListVisible,
    },
  };
};
