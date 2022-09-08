import { css } from "@emotion/react";

import { LightColor } from "@/themes/Color";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type CommunityBoxProps = {
  img: string;
  hoverImg?: string;
  content: string;
};

export const CommunityBox = ({ img, content }: CommunityBoxProps) => {
  return (
    <Link href="/main">
      <div css={sx.boxContainer}>
        <div css={sx.img}>
          <Image width="20px" height="20px" src={img} alt="" />
        </div>
        <Typography variant="h5" color={LightColor.Gray100} css={sx.text}>
          {content}
        </Typography>
      </div>
    </Link>
  );
};

const sx = {
  boxContainer: css`
    width: 100%;
    height: 60px;

    background-color: ${LightColor.Gray500};
    border-radius: 8px;

    position: relative;
    cursor: pointer;
  `,

  img: css`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 10px;
  `,
  text: css`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    word-break: keep-all;
    white-space: nowrap;
  `,
};
