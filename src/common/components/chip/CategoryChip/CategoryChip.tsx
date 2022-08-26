import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";

import { Typography, TypographyProps } from "@mui/material";

export const CategoryChip = (props: TypographyProps) => {
  return (
    <div css={sx.chipContainer}>
      <Typography
        variant="body2"
        lineHeight="1"
        color={LightColor.TextMain}
        {...props}
        sx={{ display: "inline" }}
      />
    </div>
  );
};

const sx = {
  chipContainer: css`
    height: 21px;
    background-color: #f1f1f1;
    border-radius: 10.5px;

    display: flex;
    justify-content: center;
    align-items: center;

    display: inline-block;
    padding: 0 8px;
  `,
};
