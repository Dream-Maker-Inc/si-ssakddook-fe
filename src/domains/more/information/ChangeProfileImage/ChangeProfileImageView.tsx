import { css } from "@emotion/react";
import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { WritingTab } from "@/common/components/tab/WritingTab";
import { Avatar, Badge, Typography } from "@mui/material";
import { LightColor } from "@/themes/Color";
import Image from "next/image";
import { useChangePasswordView } from "./useChangeProfileImageView";

export const ChangeProfileImageView = () => {
  const { imageState, buttonState } = useChangePasswordView();

  return (
    <AppbarLayout>
      <WritingTab
        title="프로필 이미지 변경하기"
        onActive={buttonState.onActive}
      />
      <div css={sx.root}>
        <div css={sx.container}>
          <Typography
            variant="body1"
            color={LightColor.Gray100}
            sx={{ alignSelf: "start", marginBottom: "40px" }}
          >
            아래 이미지를 탭해서,
            <br />
            프로필 이미지를 업로드해 주세요.
          </Typography>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <div>
                <input
                  css={sx.badge}
                  type="file"
                  id="profile-img-upload"
                  name="avatar"
                  accept="image/png, image/jpeg"
                  onChange={imageState.onUpload}
                />
                <label htmlFor="profile-img-upload">
                  <Image
                    width="36px"
                    height="36px"
                    src="/img/badge/icon-add-avatar.svg"
                    alt=""
                  />
                </label>
              </div>
            }
          >
            <Avatar src={imageState.value} alt="profile-img" css={sx.avatar} />
          </Badge>
        </div>
      </div>
    </AppbarLayout>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
    padding: 20px 16px;
  `,

  container: css`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  avatar: css`
    width: 160px;
    height: 160px;
    align-self: flex-start;
  `,

  badge: css`
    display: none;
  `,
};
