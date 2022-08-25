import { css } from "@emotion/react";

import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Image from "next/image";
import { LightColor } from "@/themes/Color";
import { useRouter } from "next/router";
import { RoutePath } from "@/constants/Path";

export const MainAppbar = () => {
  const router = useRouter();

  const main = RoutePath.Main;
  const chat = RoutePath.Chat;
  const community = RoutePath.Community;
  const diary = RoutePath.Diary;
  const more = RoutePath.More;

  return (
    <div>
      {/* {router.asPath === (main || chat || community || diary || more) && ( */}
      {router.asPath === community && (
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
              홍길동님, 환영해요.
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <NotificationsOutlinedIcon
                color="secondary"
                sx={{ color: LightColor.TextMain }}
              />
            </IconButton>
          </div>
        </div>
      )}
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
