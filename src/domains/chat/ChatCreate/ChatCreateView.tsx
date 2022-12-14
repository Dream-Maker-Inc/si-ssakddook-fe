import { TextField } from "@mui/material";
import { css } from "@emotion/react";
import { LightColor } from "@/themes/Color";
import { useChatCreateView } from "./useChatCreateView";
import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { ChatCreateTab } from "./components/ChatCreateTab";
import { CategorySelection } from "@/domains/chat/ChatCreate/components/CategorySelection";

export const ChatCreateView = () => {
  const { tabState, categoryState, titleState, descState } =
    useChatCreateView();
  return (
    <AppbarLayout>
      <ChatCreateTab
        onBack={tabState.onBack}
        onSubmit={tabState.onSubmit}
        disabled={tabState.disabled}
        isButtonVisible={tabState.isButtonVisible}
      />
      <div css={sx.root}>
        <CategorySelection
          categoryList={categoryState.list}
          value={categoryState.value}
          onChange={categoryState.onChange}
        />
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
