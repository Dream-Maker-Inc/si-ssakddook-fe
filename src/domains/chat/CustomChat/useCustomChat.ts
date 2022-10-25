import { ChatClientAtom } from "@/recoil/Chat/Chat.atom";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { StreamChat } from "stream-chat";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY!!;

type User = {
  id: string;
  name: string;
  image: string;
};

export const useCustomChat = () => {
  // const [user, setUser] = useRecoilState(ChatClientAtom);

  const [client, setClient] = useState<any>(null);

  console.log(client);

  // useEffect(() => {
  //   // 세션 아이템이 있는 경우
  //   if (sessionStorage.getItem("chatUserId")) {
  //     console.log("세션 아이템이 있는 경우");

  //     setUser((old) => ({
  //       ...old,
  //       id: sessionStorage.getItem("chatUserId")!!,
  //       name: sessionStorage.getItem("chatUserNickname")!!,
  //       image: sessionStorage.getItem("chatUserImage")!!,
  //     }));
  //   }
  // }, []);

  useEffect(() => {
    const init = (
      user: User = {
        id: "t",
        name: "t",
        image: "",
      }
    ) => {
      const streamChatInstance = StreamChat.getInstance(apiKey);
      setClient(streamChatInstance);
      streamChatInstance.connectUser(
        user,
        streamChatInstance.devToken(user.id)
      );
    };

    if (sessionStorage.getItem("chatUserId")) {
      console.log("세션 아이템이 있는 경우");
      const ok = {
        id: sessionStorage.getItem("chatUserId")!!,
        name: sessionStorage.getItem("chatUserNickname")!!,
        image: sessionStorage.getItem("chatUserImage")!!,
      };
    }

    if (client)
      return () => {
        client.disconnectUser();
      };
  }, [user]);

  return {
    chatClient: client,
  };
};
