import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { BoardPrevButton } from "../../button/BoardPrevButton";

type DefaultTabProps = {
  category: string;
};

export const DefaultTab = ({ category }: DefaultTabProps) => {
  return (
    <div css={sx.tabContainer}>
      <BoardPrevButton />
      <Typography variant="h2" ml="12px">
        {category}
      </Typography>
    </div>
  );
};

const sx = {
  tabContainer: css`
    position: fixed;
    width: 100%;
    height: 50px;
    left: 0px;
    top: 0px;

    display: flex;
    align-items: center;

    padding: 0 16px;

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  `,
};
