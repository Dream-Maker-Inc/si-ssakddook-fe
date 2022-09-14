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
    <div>
      <div css={sx.container}>
        <div css={sx.appbarContainer}>
          <IconButton>
            <Image
              width="24px"
              height="16px"
              src="/img/main/logo.svg"
              alt="logo"
            />
          </IconButton>
          <Typography variant="h2" ml="12px" sx={{ flexGrow: 1 }}>
            {username}님, 환영해요.
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <NotificationsOutlinedIcon
              color="secondary"
              sx={{ color: LightColor.TextMain }}
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

const sx = {
  container: css`
    width: 100%;
    height: 50px;

    position: fixed;
    top: 0;
    left: 0;
  `,

  appbarContainer: css`
    width: 100%;
    height: 100%;
    padding: 0 18px;
    background-color: white;
    box-shadow: none;
    border-bottom: 2px solid ${LightColor.Gray500};

    display: flex;
    align-items: center;
  `,
};
