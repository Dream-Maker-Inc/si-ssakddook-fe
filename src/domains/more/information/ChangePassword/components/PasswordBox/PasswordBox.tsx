import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";

import { TextField, Typography } from "@mui/material";

type PasswordBoxProps = {
  titleProps: TitleWithDescProps;
  fieldProps: TextfieldProps;
};

type TitleWithDescProps = {
  title: string;
  desc: string;
};

type TextfieldProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
};

export const PasswordBox = ({ titleProps, fieldProps }: PasswordBoxProps) => {
  return (
    <div css={sx.container}>
      <TitleWithDesc title={titleProps.title} desc={titleProps.desc} />
      <TextField
        type="password"
        value={fieldProps.value}
        onChange={fieldProps.onChange}
        placeholder="****"
        error={fieldProps.error}
        helperText={fieldProps.helperText}
      />
    </div>
  );
};

const sx = {
  container: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  wrapper: css`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,
};

const TitleWithDesc = ({ title, desc }: TitleWithDescProps) => {
  return (
    <div css={sx.wrapper}>
      <Typography variant="body1" color={"black"}>
        {title}
      </Typography>
      <Typography variant="body1" color={LightColor.Gray100}>
        {desc}
      </Typography>
    </div>
  );
};
