import { atom } from "recoil";

export type ChatUser = {
  id: string;
  name: string;
  image: string;
};

export const ChatClientAtom = atom<ChatUser>({
  key: "memberAtom",
  default: {
    id: "emily",
    name: "emily",
    image: "",
  },
});

export const ChatClientAtom2 = atom<any>({
  key: "memberAtom",
  default: null,
});
