import { RoutePath } from "@/constants/Path";
import { useRouter } from "next/router";

export const useHomeView = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push(RoutePath.Login);
  };

  const handleSignupClick = () => {
    router.push("/auth/signup");
  };
  return {
    login: {
      onClick: handleLoginClick,
    },

    signup: {
      onClick: handleSignupClick,
    },
  };
};
