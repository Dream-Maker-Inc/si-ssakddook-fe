import { RoutePath } from "@/constants/Path";
import { generateRandomString } from "@/utils/random/generateRandomString";
import { SelectChangeEvent } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useChatContext } from "stream-chat-react";
import { CHAT_CATEGORY_TYPE } from "@/domains/chat/types/ChatCategoryType.enum";
import { useQuery } from "react-query";
import { useGetCurrentMember } from "@/data/apis/member/useMemberApiHooks";

export const useChatCreateView = () => {
  const router = useRouter();
  const categoryList = Object.values(CHAT_CATEGORY_TYPE);
  const { client, setActiveChannel } = useChatContext();
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  // member profile-image
  const memberProfileImageData = useQuery(
    "get-curr-member",
    useGetCurrentMember
  ).data?.profileImageUrl;

  const memberProfileImage =
    memberProfileImageData == "undefined" || memberProfileImageData == null
      ? undefined
      : memberProfileImageData;

  const handleCategoryChange = (e: SelectChangeEvent) => {
    setCategory(e.target.value);
  };

  const handleNameChange = (v: string) => {
    if (v.length >= 25) return;
    setName(v);
  };

  const handleDescChange = (v: string) => {
    if (v.length >= 30) return;
    setDesc(v);
  };

  function getKeyByValue(value: string) {
    const indexOfS = categoryList.indexOf(
      value as unknown as CHAT_CATEGORY_TYPE
    );
    const key = Object.keys(CHAT_CATEGORY_TYPE)[indexOfS];
    return key;
  }

  const handleCreateChat = async () => {
    setIsButtonVisible(false);
    const channelId = client.user?.id + "-" + generateRandomString(10);
    const channel = client.channel(getKeyByValue(category), channelId, {
      name,
      desc,
      members: [client.user!!.id],
      image: memberProfileImage,
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
      disabled: name == "" || desc == "" || category == "",
      isButtonVisible: isButtonVisible,
    },

    categoryState: {
      list: categoryList,
      value: category,
      onChange: handleCategoryChange,
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
