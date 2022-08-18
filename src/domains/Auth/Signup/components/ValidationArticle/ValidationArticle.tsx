import {
  Button,
  ButtonProps,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { css } from "@emotion/react";

import {
  FormTitleWithDesc,
  FormTitleWithDescProps,
} from "../FormTitleWithDesc/FormTitleWithDesc";

type ValidationArticleProps = {
  titleProps: FormTitleWithDescProps;
  fieldProps: TextFieldProps;
  buttonProps: ButtonProps;
};

export const ValidationArticle = ({
  titleProps,
  fieldProps,
  buttonProps,
}: ValidationArticleProps) => {
  return (
    <div>
      <FormTitleWithDesc title={titleProps.title} desc={titleProps.desc} />
      <div css={sx.fieldWrapper}>
        <TextField fullWidth {...fieldProps} />
        <Button
          variant="outlined"
          color="primary"
          css={sx.button}
          {...buttonProps}
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
