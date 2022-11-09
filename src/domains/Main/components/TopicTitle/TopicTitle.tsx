import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import MainLogo from "@/img/main/logo.svg";
import { LightColor } from "@/themes/Color";

type TopicTitleProps = {
  title: string;
  desc: string;
};

export const TopicTitle = ({ title, desc }: TopicTitleProps) => {
  return (
    <div css={sx.root}>
      <div css={sx.wrapper}>
        <Image width="24px" height="16px" src={MainLogo} alt="logo" />
        <Typography variant={"h3"} fontWeight={400} color="black">
          {title}
        </Typography>
      </div>
      <div css={sx.descWrapper}>
        <Typography
          variant={"body2"}
          color={LightColor.TextMain}
          fontWeight={400}
          sx={{ overflow: "hidden" }}
        >
          {desc}
        </Typography>
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: fit-content;
    margin-bottom: 10px;
  `,
  wrapper: css`
    width: 100%;
    height: 20px;
    gap: 10px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  `,

  descWrapper: css`
    width: 100%;
  `,
};
