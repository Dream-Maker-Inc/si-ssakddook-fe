import { atom } from "recoil";

export const CommunityAtom = atom<string>({
  key: "communityAtom",
  default: "",
});
