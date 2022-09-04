import Image from "next/image";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { IconButton } from "@mui/material";

type TBoardPrevButton = {
  onClick?: () => void;
};
export const BoardPrevButton = ({ onClick }: TBoardPrevButton) => {
  const router = useRouter();
  const handleMovoBack = () => {
    router.back();
  };

  return (
    <IconButton onClick={onClick || handleMovoBack}>
      <Image
        width="24px"
        height="24px"
        src="/img/arrowIcon/prev-icon.svg"
        alt=""
      />
    </IconButton>
  );
};
