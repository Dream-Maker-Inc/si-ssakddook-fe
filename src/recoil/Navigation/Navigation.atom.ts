import { RoutePath } from "@/constants/Path";
import { atom } from "recoil";

export const NavigationAtom = atom<string>({
  key: "navigationAtom",
  default: RoutePath.Main,
});
