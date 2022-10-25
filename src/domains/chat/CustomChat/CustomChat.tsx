import { ReactNode, useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import { useCustomChat } from "./useCustomChat";

type CustomChatType = {
  children: ReactNode;
};

export const CustomChat = (p: CustomChatType) => {
  const { children } = p;
  const { chatClient } = useCustomChat();

  return (
    chatClient && (
      <Chat client={chatClient} theme="messaging light">
        {children}
      </Chat>
    )
  );
};
