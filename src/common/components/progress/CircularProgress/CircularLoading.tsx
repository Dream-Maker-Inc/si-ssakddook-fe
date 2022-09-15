import { CircularProgress } from "@mui/material";
import { css } from "@emotion/react";

export const CircularLoading = () => {
  return (
    <div css={sx.root}>
      <CircularProgress />
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};
