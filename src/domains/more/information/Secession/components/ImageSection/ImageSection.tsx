import { LightColor } from "@/themes/Color";
import { Typography } from "@mui/material";
import Image from "next/image";
import { css } from "@emotion/react";
import SecessionImg from "@/img/auth/img-secession-png.png";

export const ImageSection = () => {
  return (
    <div css={sx.imageSectionContainer}>
      <Typography
        variant="h2"
        color={LightColor.PrimaryDark}
        mb="30px"
        textAlign="center"
      >
        정말 탈퇴하시겠어요?
      </Typography>
      <Image width="200px" height="200px" src={SecessionImg} alt="" />
    </div>
  );
};

const sx = {
  imageSectionContainer: css`
    margin-top: 24px;
    margin-bottom: 30px;
  `,
  image: css`
    width: 200px;
    height: 200px;
  `,
};
