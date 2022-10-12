import { CircularProgress } from "@mui/material";
import { css } from "@emotion/react";

export const CircularProgressWithNoBackground = () => {
  return (
    <div css={sx.root}>
      <div css={sx.progress}>
        <CircularProgress />
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
    position: relative;
  `,

  progress: css`
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};
