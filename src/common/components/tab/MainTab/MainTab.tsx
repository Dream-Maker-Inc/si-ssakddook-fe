import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Image from "next/image";
import { LightColor } from "@/themes/Color";

type MainTabProps = {
  username: string;
};
export const MainTab = ({ username }: MainTabProps) => {
  return (
    <div css={sx.container}>
      <IconButton>
        <Image width="24px" height="16px" src="/img/main/logo.svg" alt="logo" />
      </IconButton>
      <Typography variant="h2" ml="12px" sx={{ flexGrow: 1 }}>
        {username}님, 환영해요.
      </Typography>
      <IconButton size="large" edge="start" color="inherit" aria-label="menu">
        <NotificationsOutlinedIcon
          color="secondary"
          sx={{ color: LightColor.TextMain }}
        />
      </IconButton>
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

    padding: 0 16px;

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);

    display: flex;
    align-items: center;
  `,
};
