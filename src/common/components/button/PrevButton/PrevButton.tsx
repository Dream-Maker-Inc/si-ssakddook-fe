import { ArrowBackRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { css } from "@emotion/react";

type TPrevButton = {
  location?: string;
  isPaddingEmpty?: boolean;
};
export const PrevButton = ({
  location,
  isPaddingEmpty = false,
}: TPrevButton) => {
  const router = useRouter();
  const nextLocation = () => {
    location == null ? router.back() : router.push(location);
  };
  return (
    <IconButton onClick={nextLocation} css={style.backButton(isPaddingEmpty)}>
      <ArrowBackRounded />
    </IconButton>
  );
};

const style = {
  backButton: (isPaddingEmpty: boolean) => css`
    width: fit-content;
    padding: ${isPaddingEmpty ? "0px" : "8px"};
  `,
};
