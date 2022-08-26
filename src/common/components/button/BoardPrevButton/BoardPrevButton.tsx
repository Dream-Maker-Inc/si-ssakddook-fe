import Image from "next/image";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { IconButton } from "@mui/material";

type TBoardPrevButton = {
  location?: string;
};
export const BoardPrevButton = ({ location }: TBoardPrevButton) => {
  const router = useRouter();
  const nextLocation = () => {
    location == null ? router.back() : router.push(location);
  };
  return (
    <IconButton onClick={nextLocation}>
      <Image
        width="24px"
        height="24px"
        src="/img/arrowIcon/prev-icon.svg"
        alt=""
      />
    </IconButton>
  );
};
