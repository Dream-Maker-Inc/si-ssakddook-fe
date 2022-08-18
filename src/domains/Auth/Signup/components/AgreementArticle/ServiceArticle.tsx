import { css } from "@emotion/react";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { FormTitleWithDesc } from "../FormTitleWithDesc";
import { FormTitleWithDescProps } from "../FormTitleWithDesc/FormTitleWithDesc";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";

type AgreementArticleProps = {
  titleProps: FormTitleWithDescProps;
  checkboxProps: CheckBoxProps;
};

type CheckBoxProps = {
  open?: boolean;
  onChange?: () => void;
};

export const AgreementArticle = ({
  titleProps,
  checkboxProps,
}: AgreementArticleProps) => {
  return (
    <div css={sx.container}>
      <FormTitleWithDesc
        title={titleProps.title}
        desc={titleProps.desc}
        marginBottom={"12px"}
      />
      <div css={sx.checkboxWrapper}>
        <FormControlLabel
          control={
            <Checkbox
              icon={<CheckBoxRoundedIcon />}
              checkedIcon={<CheckBoxRoundedIcon />}
              css={sx.chekcbox}
              defaultChecked
            />
          }
          label={
            <Typography variant="h4" ml="10px">
              [필수] <a css={sx.span}>서비스 이용 약관</a>에 동의합니다.
            </Typography>
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<CheckBoxRoundedIcon />}
              checkedIcon={<CheckBoxRoundedIcon />}
              css={sx.chekcbox}
              defaultChecked
            />
          }
          label={
            <Typography variant="h4" ml="10px">
              [필수] <a css={sx.span}>개인정보 수집 및 이용</a>에 동의합니다.
            </Typography>
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<CheckBoxRoundedIcon />}
              checkedIcon={<CheckBoxRoundedIcon />}
              css={sx.chekcbox}
              defaultChecked
            />
          }
          label={
            <Typography variant="h4" ml="10px">
              [선택] <a css={sx.span}>프로모션 정보 수신</a>에 동의합니다.
            </Typography>
          }
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
