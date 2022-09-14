import { css } from "@emotion/react";
import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { WritingTab } from "@/common/components/tab/WritingTab";
import { TextField, Typography } from "@mui/material";
import { LightColor } from "@/themes/Color";
import { useChangeNickname } from "./useChangeNickname";

export const ChangeNicknameView = () => {
  const { nicknameState, tabState } = useChangeNickname();

  return (
    <AppbarLayout>
      <WritingTab
        title={tabState.title}
        onActive={tabState.onActive}
        onClick={tabState.onClick}
      />
      <div css={sx.root}>
        <div>
          <Typography variant="body1" color={LightColor.Gray100} mb="20px">
            변경하실 닉네임을 입력하세요.
          </Typography>
          <TextField
            fullWidth
            value={nicknameState.value}
            onChange={nicknameState.onChange}
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
};
