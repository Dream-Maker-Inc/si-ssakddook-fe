import { ArrowBackRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { css } from '@emotion/react';

type TPrevButton = {
  location?: string;
};
export const PrevButton = ({ location }: TPrevButton) => {
  const router = useRouter();
  const nextLocation = () => {
    location == null ? router.back() : router.push(location);
  };
  return (
    <IconButton onClick={nextLocation} css={style.backButton}>
      <ArrowBackRounded />
    </IconButton>
  );
};

const style = {
  backButton: css`
    width: fit-content;
  `
}
