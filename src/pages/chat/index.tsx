import { ChatMainView } from "@/domains/chat/ChatMain";
import { useUserSession } from "@/recoil/session/user-session.atom";
import { NextPage } from "next";

const ChatMainPage: NextPage = () => {
  const { user } = useUserSession();
  return user && <ChatMainView />;
};

export default ChatMainPage;
