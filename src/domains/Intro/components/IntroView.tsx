import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
export const IntroView = () => {
  return (
    <div css={sx.root}>
      <Image
        width="60px"
        height="40px"
        alt={"img"}
        src={"/img/logo/main.png"}
      />

      <Typography></Typography>
      <div css={sx.smallTextWrapper}>
        <Typography></Typography>
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  smallTextWrapper: css``,
};
