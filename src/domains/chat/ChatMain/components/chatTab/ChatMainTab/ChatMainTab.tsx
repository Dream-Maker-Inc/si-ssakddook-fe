import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";

export const ChatMainTab = () => {
  return (
    <div css={sx.tabContainer}>
      <div css={sx.wrapper}>
        <IconButton>
          <Image
            width="24px"
            height="16px"
            src="/img/main/logo.svg"
            alt="logo"
          />
        </IconButton>
        <Typography variant="h2" lineHeight="1" ml="12px">
          톡
        </Typography>
      </div>
      <div>
        <IconButton onClick={() => alert("create")}>
          <Image
            width="18px"
            height="18px"
            src="/img/tab/icon-add-chat.svg"
            alt=""
          />
        </IconButton>
      </div>
    </div>
  );
};

const sx = {
  tabContainer: css`
    width: 100%;
    height: 50px;
    position: absolute;
    left: 0px;
    top: 0px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 16px;

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  `,

  wrapper: css`
    display: flex;
    align-items: center;
  `,
};
