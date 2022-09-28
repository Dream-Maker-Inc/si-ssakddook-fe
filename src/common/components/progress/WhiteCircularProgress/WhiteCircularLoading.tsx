import CircularProgress from "@mui/material/CircularProgress";
import { css } from "@emotion/react";

export const WhiteCircularLoading = () => {
  return (
    <div css={sx.root}>
      <div css={sx.progress}>
        <CircularProgress color="secondary" size={20} />
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

    top: 80%;
    left: 50%;
    transform: translate(-50%, -80%);
  `,
};
