import { PrevButton } from "@/common/components/button/PrevButton";
import { SubmitButton } from "@/common/components/button/SubmitButton";
import { TitleWithDesc } from "@/common/components/title/TitleWithDesc";
import { css } from "@emotion/react";
import { TextField, Typography } from "@mui/material";
import { useInputEmailView } from "./useInputEmailView";

export const InputEmailView = () => {
  const { fieldState, buttonState } = useInputEmailView();
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <div css={sx.header}>
          <PrevButton />
          <SubmitButton
            disabled={buttonState.disabled}
            onSubmit={buttonState.onSubmit}
          />
        </div>
        <TitleWithDesc title={fieldState.title} desc={fieldState.desc} />
        <TextField
          fullWidth
          value={fieldState.value}
          onChange={(e) => fieldState.onChange(e.target.value)}
          placeholder="account@ssakduk.com"
          helperText={
            <Typography variant="caption" color={fieldState.color}>
              {fieldState.helperText}
            </Typography>
          }
          error={fieldState.error}
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
  header: css`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `,
};
