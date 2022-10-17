import { RoutePath } from "@/constants/Path";
import pushApi from "@/data/apis/push/push.api";
import { generateRandomString } from "@/utils/random/generateRandomString";
import { useRouter } from "next/router";
import { useState } from "react";
import { useChatContext } from "stream-chat-react";

export const useChatCreateView = () => {
  const router = useRouter();
  const { client, setActiveChannel } = useChatContext();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleNameChange = (v: string) => {
    if (v.length >= 25) return;
    setName(v);
  };

  const handleDescChange = (v: string) => {
    if (v.length >= 30) return;
    setDesc(v);
  };

  const handleCreateChat = async () => {
    const channelId = generateRandomString(10);
    const channel = client.channel("messaging", channelId, {
      name,
      desc,
      members: [client.user!!.id],
    });

    await channel.create();
    await channel.watch();
    await setActiveChannel(channel);
    await router.replace(RoutePath.ChatRoom);
  };

  const onBack = () => {
    router.push(RoutePath.Main);
  };

  return {
    tabState: {
      onSubmit: handleCreateChat,
      onBack: onBack,
      disabled: name == "" || desc == "",
    },
    titleState: {
      value: name,
      onChange: handleNameChange,
      placeholder: "채팅방 제목을 입력해 주세요.",
    },
    descState: {
      value: desc,
      onChange: handleDescChange,
      placeholder: "채팅방 설명을 입력해 주세요.",
    },
  };
};
