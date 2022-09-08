import { css } from "@emotion/react";

import { Typography } from "@mui/material";

type TSignupTitleWithDesc = {
  title: string;
  desc: string;
};
export const SignupTitleWithDesc = ({ title, desc }: TSignupTitleWithDesc) => {
  return (
    <div css={sx.textWrapper}>
      <Typography variant="h1">{title}</Typography>
      <Typography variant="h4">{desc}</Typography>
    </div>
  );
};

const sx = {
  textWrapper: css`
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    margin-top: 12px;
    margin-bottom: 40px;
  `,
};
