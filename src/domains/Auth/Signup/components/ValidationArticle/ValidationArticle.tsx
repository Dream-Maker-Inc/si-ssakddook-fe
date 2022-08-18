import { Button, TextField, Typography } from "@mui/material";
import { css } from "@emotion/react";

import {
  FormTitleWithDesc,
  FormTitleWithDescProps,
} from "../FormTitleWithDesc/FormTitleWithDesc";

type ValidationArticleProps = {
  titleProps: FormTitleWithDescProps;
  fieldProps: TextfieldProps;
};

type TextfieldProps = {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onVerifyClick: () => void;
};

export const ValidationArticle = ({
  titleProps,
  fieldProps,
}: ValidationArticleProps) => {
  return (
    <div>
      <FormTitleWithDesc title={titleProps.title} desc={titleProps.desc} />
      <div css={sx.fieldWrapper}>
        <TextField
          fullWidth
          placeholder={fieldProps.placeholder}
          value={fieldProps.value}
          onChange={fieldProps.onChange}
        />
        <Button
          variant="outlined"
          color="primary"
          css={sx.button}
          onClick={fieldProps.onVerifyClick}
        >
          중복확인
        </Button>
      </div>
    </div>
  );
};

const sx = {
  fieldWrapper: css`
    width: 100%;
    display: flex;
    gap: 16px;
  `,
  button: css`
    width: 15%;
    min-width: 79px;
  `,
};
