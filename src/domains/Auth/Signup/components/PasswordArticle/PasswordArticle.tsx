import { TextField } from "@mui/material";
import {
  FormTitleWithDesc,
  FormTitleWithDescProps,
} from "../FormTitleWithDesc/FormTitleWithDesc";

type ValidationArticleProps = {
  titleProps: FormTitleWithDescProps;
  fieldProps: TextfieldProps;
};

type TextfieldProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const PasswordArticle = ({
  titleProps,
  fieldProps,
}: ValidationArticleProps) => {
  return (
    <div>
      <FormTitleWithDesc title={titleProps.title} desc={titleProps.desc} />
      <TextField
        fullWidth
        value={fieldProps.value}
        onChange={fieldProps.onChange}
      />
    </div>
  );
};
