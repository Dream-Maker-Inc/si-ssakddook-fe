import { css } from "@emotion/react";
import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { WritingTab } from "@/common/components/tab/WritingTab";
import { TextField, Typography } from "@mui/material";
import { LightColor } from "@/themes/Color";
import { useChangeNickname } from "./useChangeNickname";
import { CheckModal } from "@/common/components/modal/CheckModal";
import { NoticeModal } from "@/common/components/modal/NoticeModal";

export const ChangeNicknameView = () => {
  const { nicknameState, tabState, modalState } = useChangeNickname();

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
            placeholder={nicknameState.currValue}
          />
        </div>
      </div>
      <CheckModal
        isOpen={modalState.changeModal.isOpen}
        onClose={modalState.changeModal.onClose}
        onContinue={modalState.changeModal.onContinue}
        editValue={modalState.changeModal.editValue}
      />
      <NoticeModal
        isOpen={modalState.noticeModal.isOpen}
        onClose={modalState.noticeModal.onClose}
        text={modalState.noticeModal.text}
      />
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
