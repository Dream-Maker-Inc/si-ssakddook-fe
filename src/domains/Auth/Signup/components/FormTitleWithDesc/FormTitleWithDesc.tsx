import { css } from "@emotion/react";
import { Typography } from "@mui/material";

export type FormTitleWithDescProps = {
  title: string;
  desc: string;
};

export const FormTitleWithDesc = ({ title, desc }: FormTitleWithDescProps) => {
  return (
    <div css={sx.container}>
      <Typography variant="body1">{title}</Typography>
      <Typography variant="caption">{desc}</Typography>
    </div>
  );
};

const sx = {
  container: css`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 4px;

    margin-bottom: 10px;
  `,
};
