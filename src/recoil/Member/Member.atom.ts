import { MemberModel } from "@/data/apis/member/type/member.model";
import { atom } from "recoil";

export const JwtAtom = atom({
  key: "jwtAtom",
  default: "",
});

export const MemberAtom = atom<MemberModel>({
  key: "memberAtom",
  default: {
    member: {
      email: "",
      password: "",
      nickname: "",
      name: "",
      birthDay: "",
      phone: "",
    },
    termsIds: [],
  },
});
