import { ChatRoomView } from "@/domains/chat/ChatRoom";
import { useUserSession } from "@/recoil/session/user-session.atom";
import { NextPage } from "next";

const ChatRoomPage: NextPage = () => {
  const { user } = useUserSession();
  return user && <ChatRoomView />;
};

export default ChatRoomPage;
