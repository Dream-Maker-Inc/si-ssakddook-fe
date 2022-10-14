import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

// 세션 스토리지 설정
const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "user-session",
  storage: sessionStorage,
});

// 유저 세션
export type UserSession = {
  id: string;
  name: string;
  image: string;
};

const UserSessionAtom = atom<UserSession | null>({
  key: "user-session",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const useUserSession = () => {
  const [user, setUser] = useRecoilState(UserSessionAtom);

  const removeUser = () => sessionStorage?.removeItem("user");

  return {
    user,
    setUser,
    removeUser,
  };
};
