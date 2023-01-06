import { atom } from "recoil";

export const NoticeModalAtom = atom<boolean>({
  key: "noticeAtom",
  default: false,
});
