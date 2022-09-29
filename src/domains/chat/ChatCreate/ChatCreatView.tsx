import { TextField } from "@mui/material";
import { css } from "@emotion/react";
import { LightColor } from "@/themes/Color";

type ChatCreateViewProps = {
  value: string;
  onChange: (e: string) => void;
};

export const ChatCreateView = ({ value, onChange }: ChatCreateViewProps) => {
  return (
    <div css={sx.root}>
      <TextField
        fullWidth
        variant="standard"
        InputProps={{ disableUnderline: true }}
        placeholder="제목을 입력해 주세요."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        css={sx.textfield}
      />
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
  `,

  textfield: css`
    width: 100%;
    height: 40px;
    border-bottom: 1px solid ${LightColor.Gray500};
    padding: 0 16px;
  `,
};
