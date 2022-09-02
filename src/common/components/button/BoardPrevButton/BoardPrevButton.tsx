import Image from "next/image";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { IconButton } from "@mui/material";

type TBoardPrevButton = {
  location?: string;
  onClick: () => void;
};
export const BoardPrevButton = ({ location, onClick }: TBoardPrevButton) => {
  const router = useRouter();

  return (
    <IconButton onClick={onClick}>
      <Image
        width="24px"
        height="24px"
        src="/img/arrowIcon/prev-icon.svg"
        alt=""
      />
    </IconButton>
  );
};
