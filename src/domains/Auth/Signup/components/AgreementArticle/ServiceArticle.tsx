import { css } from "@emotion/react";
import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { FormTitleWithDesc } from "../FormTitleWithDesc";
import { FormTitleWithDescProps } from "../FormTitleWithDesc/FormTitleWithDesc";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";

type AgreementArticleProps = {
  titleProps: FormTitleWithDescProps;
  firstCheckboxProps: CheckboxProps;
  secondCheckboxProps: CheckboxProps;
  thirdCheckboxProps: CheckboxProps;
};

export const AgreementArticle = ({
  titleProps,
  firstCheckboxProps,
  secondCheckboxProps,
  thirdCheckboxProps,
}: AgreementArticleProps) => {
  return (
    <div css={sx.container}>
      <FormTitleWithDesc
        title={titleProps.title}
        desc={titleProps.desc}
        marginBottom={"12px"}
      />
      <div css={sx.checkboxWrapper}>
        <CheckBox
          label={"에 동의합니다."}
          hightlightText={"서비스 이용 약관"}
          necessary={true}
          props={firstCheckboxProps}
        />

        <CheckBox
          label={"에 동의합니다."}
          hightlightText={"개인정보 수집 및 이용"}
          necessary={true}
          props={secondCheckboxProps}
        />

        <CheckBox
          label={"에 동의합니다."}
          hightlightText={"프로모션 정보 수신"}
          necessary={false}
          props={thirdCheckboxProps}
        />
      </div>
    </div>
  );
};

const sx = {
  container: css`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  chekcbox: css`
    padding: 0px 0px 0px 8px;

    & .MuiSvgIcon-root {
      font-size: 1.2rem;
    }
  `,

  span: css`
    text-decoration: underline;
    text-underline-position: under;
    color: #5a8835;
  `,

  checkboxWrapper: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
};

type CustomCheckBoxProps = {
  label: string;
  hightlightText: string;
  necessary: boolean;
  props?: CheckboxProps;
};

const CheckBox = ({
  label,
  hightlightText,
  necessary = true,
  props,
}: CustomCheckBoxProps) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          icon={<CheckBoxRoundedIcon />}
          checkedIcon={<CheckBoxRoundedIcon />}
          css={sx.chekcbox}
          {...props}
        />
      }
      label={
        <Typography variant="h4" ml="10px">
          {necessary ? "[필수]" : "[선택]"}{" "}
          <a css={sx.span}>{hightlightText}</a>
          {label}
        </Typography>
      }
    />
  );
};
