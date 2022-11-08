import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import MainLoco from "@/img/main/logo.svg";

type MainTitleProps = {
  title: string;
  desc: string;
};

export const MainTitle = ({ title, desc }: MainTitleProps) => {
  return (
    <div css={sx.root}>
      <div css={sx.wrapper}>
        <Image width="24px" height="16px" src={MainLoco} alt="logo" />
        <Typography variant={"h3"} lineHeight={400}>
          {title}
        </Typography>
      </div>
      <Typography variant={"h4"} lineHeight={400}>
        {desc}
      </Typography>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    margin-bottom: 10px;
  `,
  wrapper: css`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  `,
};
