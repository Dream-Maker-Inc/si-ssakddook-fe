import { TextField } from "@mui/material";
import { css } from "@emotion/react";
import { LightColor } from "@/themes/Color";

type ChatCreateViewProps = {
  titleProps: TitleProps;
  descProps: DescProps;
};

type TitleProps = {
  value: string;
  onChange: (e: string) => void;
};

type DescProps = {
  value: string;
  onChange: (e: string) => void;
};

export const ChatCreateView = ({
  titleProps,
  descProps,
}: ChatCreateViewProps) => {
  return (
    <div css={sx.root}>
      <TextField
        fullWidth
        variant="standard"
        InputProps={{ disableUnderline: true }}
        placeholder="채팅방 제목을 입력해 주세요."
        value={titleProps.value}
        onChange={(e) => titleProps.onChange(e.target.value)}
        css={sx.titlefield}
        inputProps={{ maxLength: 25 }}
      />
      <TextField
        fullWidth
        variant="standard"
        InputProps={{ disableUnderline: true }}
        multiline
        maxRows={2}
        placeholder="채팅방 설명을 입력해 주세요."
        value={descProps.value}
        onChange={(e) => descProps.onChange(e.target.value)}
        css={sx.descfield}
        inputProps={{ maxLength: 30 }}
      />
    </div>
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
