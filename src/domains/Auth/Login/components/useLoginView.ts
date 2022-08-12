import { useRouter } from "next/router";

export const useLoginView = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/auth/login");
  };

  return {
    login: {
      onClick: handleLoginClick,
    },
  };
};
