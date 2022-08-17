import Image from "next/image";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { IconButton } from "@mui/material";

type TSubmitButton = {
  location?: string;
};
export const SubmitButton = ({ location }: TSubmitButton) => {
  const router = useRouter();
  const nextLocation = () => {
    location == null ? router.back() : router.push(location);
  };
  return (
    <IconButton onClick={nextLocation} css={sx.img}>
      <Image width="24px" height="24px" src="/img/icon-submit.svg" alt="" />
    </IconButton>
  );
};

const sx = {
  img: css`
    position: absolute;
    top: 0;
    right: 0;
  `,
};
