import { css } from "@emotion/react";

import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { WritingTab } from "@/common/components/tab/WritingTab";
import { TextField, Typography } from "@mui/material";
import { LightColor } from "@/themes/Color";
import { useState } from "react";

export const ChangeNicknameView = () => {
  const [nickname, setNickname] = useState("");
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  return (
    <AppbarLayout>
      <WritingTab title="닉네임 변경하기" />
      <div css={sx.root}>
        <div css={sx.container}>
          <Typography variant="body1" color={LightColor.Gray100} mb="20px">
            변경하실 닉네임을 입력하세요.
          </Typography>
          <TextField
            fullWidth
            value={nickname}
            onChange={handleNicknameChange}
            placeholder="고독한 강아지"
          />
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

  container: css``,
};
