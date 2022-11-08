import { css } from "@emotion/react";
import { Typography } from "@mui/material";

export const CommunityBox = () => {
  return (
    <div css={sx.root}>
      <div css={sx.title}>
        <Typography></Typography>
        <Typography></Typography>
      </div>
      <div css={sx.hr}></div>
      <div css={sx.content}>
        <div css={sx.wrapper}>
          <Typography></Typography>
          <Typography></Typography>
        </div>
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    border: 1px solid #f1f1f1;
    border-radius: 8px;
  `,
  title: css``,
  hr: css``,
  content: css``,
  wrapper: css``,
};
