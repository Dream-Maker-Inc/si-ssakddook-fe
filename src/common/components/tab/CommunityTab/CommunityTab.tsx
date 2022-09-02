import { css } from "@emotion/react";

import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { LightColor } from "@/themes/Color";
import { useRouter } from "next/router";

export const CommunityTab = () => {
  const router = useRouter();

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
            카테고리
          </Typography>
          <div css={sx.buttonWrapper}>
            <IconButton>
              <Image
                width="16px"
                height="16px"
                src="/img/tab/icon-search.svg"
                alt=""
              />
            </IconButton>
            <IconButton>
              <Image
                width="18px"
                height="18px"
                src="/img/tab/icon-notification.svg"
                alt=""
              />
            </IconButton>
            <IconButton>
              <Typography variant="h2">MY</Typography>
            </IconButton>
          </div>
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
    padding: 0 16px;
    background-color: white;
    box-shadow: 0px 1px 1px rgb(0 0 0 / 10%);

    display: flex;
    align-items: center;
  `,

  buttonWrapper: css`
    display: flex;
    align-items: center;
    gap: 13px;
  `,
};
