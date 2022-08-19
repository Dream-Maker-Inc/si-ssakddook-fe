import { TextField, TextFieldProps } from "@mui/material";
import {
  FormTitleWithDesc,
  FormTitleWithDescProps,
} from "../FormTitleWithDesc/FormTitleWithDesc";

type ValidationArticleProps = {
  titleProps: FormTitleWithDescProps;
  fieldProps: TextFieldProps;
};

export const PasswordArticle = ({
  titleProps,
  fieldProps,
}: ValidationArticleProps) => {
  return (
    <div>
      <FormTitleWithDesc title={titleProps.title} desc={titleProps.desc} />
      <TextField fullWidth {...fieldProps} />
    </div>
  );
};
