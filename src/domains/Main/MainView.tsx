import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { MainTab } from "@/common/components/tab/MainTab";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useMainView } from "./useMainView";
import LeafImg from "@/img/main/leaf.svg";

export const MainView = () => {
  const { data, username } = useMainView();
  return (
    <AppbarLayout>
      <MainTab username={username} />
      <div css={sx.root}>
        <div css={sx.container}>
          <Typography variant="h2" color={LightColor.Gray200} textAlign="left">
            {data}
          </Typography>
          <div css={sx.img}>
            <Image width="93px" height="516px" src={LeafImg} alt="" />
          </div>
        </div>
      </div>
    </AppbarLayout>
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
