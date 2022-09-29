import { RoutePath } from "@/constants/Path";
import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { css } from "@emotion/react";
import Image from "next/image";
import Router from "next/router";
import { useEffect } from "react";
import Logo from "@/img/home/main-logo.png";
export const SplashView = () => {
  useEffect(() => {
    setTimeout(() => {
      const memberId = LocalStorage.getItem("id");
      if (memberId == "undefined" || memberId == "") {
        Router.push(RoutePath.Home);
      } else {
        Router.push(RoutePath.Main);
      }
    }, 1500);
  }, []);

  return (
    <div css={sx.root}>
      <Image width="100px" height="61px" alt={"img"} src={Logo} />
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
