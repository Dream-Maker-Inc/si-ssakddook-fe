/* eslint-disable react-hooks/exhaustive-deps */
import {
  UserSession,
  useUserSession,
} from "@/recoil/session/user-session.atom";
import _ from "lodash";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY!!;

type ChatProviderProps = {
  children: ReactNode;
};

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const { user } = useUserSession();
  const [client, setClient] = useState<any>(StreamChat.getInstance(apiKey));

  // Chat 연결 요청 버퍼링 (500ms)
  const callback = useCallback(
    _.debounce((user: UserSession) => {
      const chatClient = StreamChat.getInstance(apiKey);
      setClient(chatClient);
      chatClient.connectUser(user, chatClient.devToken(user.id));
    }, 500),
    []
  );

  // 업데이트
  useEffect(() => {
    user && callback(user);

    if (client)
      return () => {
        client.disconnectUser();
      };
  }, [user]);

  return (
    <Chat client={client} theme="messaging light">
      {children}
    </Chat>
  );

  // return client ? (
  //   <Chat client={client} theme="messaging light">
  //     {children}
  //   </Chat>
  // ) : (
  //   <Fragment>{children}</Fragment>
  // );
};
