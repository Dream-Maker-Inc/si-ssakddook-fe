import { useRouter } from "next/router";

export const useIntroView = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/auth/login");
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
