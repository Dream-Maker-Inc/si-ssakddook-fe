import { RoutePath } from "@/constants/Path";
import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { useRouter } from "next/router";
import { useLayoutEffect, useState } from "react";

export const useHomeView = () => {
  const router = useRouter();
  const [isLayoutLoading, setIsLayoutLoading] = useState(true);

  useLayoutEffect(() => {
    const memberId = LocalStorage.getItem("id");
    if (memberId === null) {
      setIsLayoutLoading(false);
      return;
    } else {
      router.push(RoutePath.Main);
      return;
    }
  }, []);
  const handleLoginClick = () => {
    router.push(RoutePath.Login);
  };

  const handleSignupClick = () => {
    router.push("/auth/signup");
  };
  return {
    isLayoutLoading: isLayoutLoading,
    login: {
      onClick: handleLoginClick,
    },

    signup: {
      onClick: handleSignupClick,
    },
  };
};
