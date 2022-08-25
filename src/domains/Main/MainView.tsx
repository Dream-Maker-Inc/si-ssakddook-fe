import { MainAppbar } from "@/common/components/appbar/MainAppBar";
import { DefaultBottomNavigation } from "@/common/components/bottomNavigation/DefaultBottomNavigation";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { useMainView } from "./useMainView";

export const MainView = () => {
  const { data } = useMainView();
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <Typography variant="h2" color={LightColor.Gray200} textAlign="left">
          {data}
        </Typography>
        <div css={sx.img}>
          <Image width="93px" height="516px" src="/img/main/leaf.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
    padding: 16px;

    position: relative;
  `,
  container: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  img: css`
    position: absolute;
    top: 0;
    right: 0;
  `,
};
