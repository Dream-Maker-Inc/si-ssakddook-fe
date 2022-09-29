import { Typography } from "@mui/material";
import { css } from "@emotion/react";
import { LightColor } from "@/themes/Color";

export const CustomEmptyIndicator = () => {
  return (
    <div css={sx.root}>
      <Typography variant="body1" color={LightColor.Gray100}>
        참여중인 채팅방이 없습니다
      </Typography>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 16px;
  `,
};
