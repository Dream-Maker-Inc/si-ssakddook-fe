import { css } from "@emotion/react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { FormTitleWithDesc } from "../FormTitleWithDesc";
import { FormTitleWithDescProps } from "../FormTitleWithDesc/FormTitleWithDesc";

type ServiceAgreementProps = {
  titleProps: FormTitleWithDescProps;
  checkboxProps: CheckBoxProps;
};

type CheckBoxProps = {
  open: boolean;
  onChange: () => void;
};

export const ServiceAgreementView = ({
  titleProps,
  checkboxProps,
}: ServiceAgreementProps) => {
  return (
    <div>
      <FormTitleWithDesc title={titleProps.title} desc={titleProps.desc} />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
    </div>
  );
};

const sx = {};
