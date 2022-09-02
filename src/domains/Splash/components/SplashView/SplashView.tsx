import { RoutePath } from "@/constants/Path";
import { css } from "@emotion/react";
import Image from "next/image";
export const SplashView = () => {
  setTimeout(() => {
    window.location.href = RoutePath.Home;
  }, 1500);
  return (
    <div css={sx.root}>
      <Image
        width="100px"
        height="61px"
        alt={"img"}
        src={"/img/home/main-logo.png"}
      />
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
