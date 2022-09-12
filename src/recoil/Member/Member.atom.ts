import { atom } from "recoil";

type MemberModel = {
  jwt: string;
  member: {
    email: string;
    password: string;
    nickname: string;
    name: string;
    birthday: string;
    phone: string;
  };
  termsIds: number[];
};

export const MemberAtom = atom<MemberModel>({
  key: "memberAtom",
  default: {
    jwt: "",
    member: {
      email: "",
      password: "",
      nickname: "",
      name: "",
      birthday: "",
      phone: "",
    },
    termsIds: [],
  },
});
