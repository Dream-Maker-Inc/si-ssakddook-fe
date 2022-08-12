import Image from "next/image";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { IconButton } from "@mui/material";
import { Url } from "url";

type TPrevButton = {
  location?: string;
};
export const PrevButton = ({ location }: TPrevButton) => {
  const router = useRouter();
  const nextLocation = () => {
    location == null ? router.back() : router.push(location);
  };
  return (
    <IconButton onClick={nextLocation} css={sx.img}>
      <Image
        width="24px"
        height="24px"
        src="/img/arrowIcon/prev-icon.svg"
        alt=""
      />
    </IconButton>
  );
};

const sx = {
  img: css`
    position: absolute;
    top: 0;
    left: 0;
  `,
};