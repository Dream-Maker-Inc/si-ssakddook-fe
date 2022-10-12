import { PrevButton } from "@/common/components/button/PrevButton";
import { SubmitButton } from "@/common/components/button/SubmitButton";
import { TitleWithDesc } from "@/common/components/title/TitleWithDesc";
import { css } from "@emotion/react";
import { TextField } from "@mui/material";
import { useInputEmailView } from "./useInputEmailView";

export const InputEmailView = () => {
  const { fieldState, buttonState } = useInputEmailView();
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <PrevButton />
        <SubmitButton
          disabled={buttonState.disabled}
          onSubmit={buttonState.onSubmit}
        />
        <TitleWithDesc title={fieldState.title} desc={fieldState.desc} />
        <TextField
          fullWidth
          value={fieldState.value}
          onChange={(e) => fieldState.onChange(e.target.value)}
          placeholder="account@ssakduk.com"
        />
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
    padding: 16px;
  `,
  container: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    position: relative;
  `,
};
