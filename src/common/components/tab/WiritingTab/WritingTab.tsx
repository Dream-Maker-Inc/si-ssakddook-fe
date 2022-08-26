import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { BoardPrevButton } from "../../button/BoardPrevButton";

export const WritingTab = () => {
  return (
    <div css={sx.tabContainer}>
      <div css={sx.tabWrapper}>
        <BoardPrevButton />
        <Typography variant="h2" ml="12px">
          커뮤니티
        </Typography>
      </div>
      <IconButton>
        <Image width="24px" height="24px" src="/img/tab/icon-etc.svg" alt="" />
      </IconButton>
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
    justify-content: space-between;

    padding: 0 16px;

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  `,

  tabWrapper: css`
    display: flex;
    align-items: center;
  `,
};
