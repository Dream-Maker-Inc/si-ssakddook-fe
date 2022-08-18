import { css } from "@emotion/react";
import { Typography } from "@mui/material";

export type FormTitleWithDescProps = {
  title: string;
  desc: string;
  marginBottom?: string;
};

export const FormTitleWithDesc = ({
  title,
  desc,
  marginBottom = "10px",
}: FormTitleWithDescProps) => {
  return (
    <div css={sx.container(marginBottom)}>
      <Typography variant="body1">{title}</Typography>
      <Typography variant="caption">{desc}</Typography>
    </div>
  );
};

const sx = {
  container: (marginBottom: string) => css`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 4px;

    margin-bottom: ${marginBottom};
  `,
};
