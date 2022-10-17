import { TextField } from "@mui/material";
import { css } from "@emotion/react";
import { LightColor } from "@/themes/Color";
import { useChatCreateView } from "./useChatCreateView";
import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { ChatCreateTab } from "./components/tab/ChatCreateTab";

export const ChatCreateView = () => {
  const { tabState, titleState, descState } = useChatCreateView();
  return (
    <AppbarLayout>
      <ChatCreateTab
        onBack={tabState.onBack}
        onSubmit={tabState.onSubmit}
        disabled={tabState.disabled}
      />
      <div css={sx.root}>
        <TextField
          fullWidth
          variant="standard"
          InputProps={{ disableUnderline: true }}
          placeholder={titleState.placeholder}
          value={titleState.value}
          onChange={(e) => titleState.onChange(e.target.value)}
          css={sx.titlefield}
        />
        <TextField
          fullWidth
          variant="standard"
          InputProps={{ disableUnderline: true }}
          multiline
          maxRows={2}
          placeholder={descState.placeholder}
          value={descState.value}
          onChange={(e) => descState.onChange(e.target.value)}
          css={sx.descfield}
        />
      </div>
    </AppbarLayout>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
  `,

  titlefield: css`
    width: 100%;
    height: 40px;
    border-bottom: 1px solid ${LightColor.Gray500};
    padding: 0 16px;
  `,

  descfield: css`
    width: 100%;
    height: 80px;
    border-bottom: 1px solid ${LightColor.Gray500};
    padding: 0 16px;
  `,
};
