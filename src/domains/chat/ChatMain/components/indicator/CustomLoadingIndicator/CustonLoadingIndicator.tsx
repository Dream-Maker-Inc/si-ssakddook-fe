import { css } from "@emotion/react";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const CustomLoadingIndicator = () => {
  return (
    <Box css={sx.root}>
      <CircularProgress />
    </Box>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: calc(100% - 100px);

    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
