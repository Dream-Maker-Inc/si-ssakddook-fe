import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import MainLogo from "@/img/main/logo.svg";

type MainTabProps = {
  username: string;
};
export const MainTab = ({ username }: MainTabProps) => {
  return (
    <div css={sx.container}>
      <IconButton>
        <Image width="24px" height="16px" src={MainLogo} alt="logo" />
      </IconButton>
      <Typography variant="h2" ml="12px" sx={{ flexGrow: 1 }}>
        {username}님, 환영해요.
      </Typography>
    </div>
  );
};

const sx = {
  container: css`
    position: absolute;
    width: 100%;
    height: 50px;
    left: 0px;
    top: 0px;

    padding-right: 16px;
    padding-left: 8px;

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);

    display: flex;
    align-items: center;
  `,
};
