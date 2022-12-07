import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  Typography,
} from "@mui/material";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import { css } from "@emotion/react";
import Image from "next/image";
import { LightColor } from "@/themes/Color";

type DescriptionSectionProps = {
  check: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const DescriptionSection = ({
  check,
  onChange,
}: DescriptionSectionProps) => {
  const descriptionModel = [
    { text: "회원가입 당시 작성했던", highlightText: "모든 회원정보" },
    { text: "플랫폼 내에 작성하신", highlightText: "모든 게시글, 댓글 데이터" },
    { text: "플랫폼 내에 기록하신", highlightText: "일기 데이터" },
    { text: "플랫폼 내에서 활동하신", highlightText: "채팅 기록" },
  ];

  return (
    <div css={sx.descriptionSectionContainer}>
      <Typography variant="h4">
        회원을 탈퇴하시면 다음 정보가 모두 영구 삭제됩니다.
      </Typography>
      <div css={sx.descriptBox}>
        <div css={sx.descriptBoxContainer}>
          {descriptionModel.map((it, index) => (
            <Description
              key={index}
              text={it.text}
              highlightText={it.highlightText}
            />
          ))}
        </div>
      </div>
      <CustomCheckbox checked={check} onChange={onChange} />
    </div>
  );
};

const sx = {
  descriptionSectionContainer: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    margin-bottom: 60px;
  `,

  descriptBox: css`
    width: 100%;
    height: 143px;

    background-color: ${LightColor.Gray500};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  descriptBoxContainer: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 6px;
  `,

  descriptWrapper: css`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 4px;
  `,
  span: css`
    color: ${LightColor.PrimaryDark};
  `,
  chekcbox: css`
    padding: 0px 0px 0px 8px;

    & .MuiSvgIcon-root {
      font-size: 16px;
    }
  `,
};

const CustomCheckbox = (p: CheckboxProps) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          icon={<CheckBoxRoundedIcon />}
          checkedIcon={<CheckBoxRoundedIcon />}
          css={sx.chekcbox}
          {...p}
        />
      }
      label={
        <Typography variant="h4" ml="6px" lineHeight={1}>
          데이터 영구 삭제에 동의합니다.
        </Typography>
      }
    />
  );
};

type DescriptionProps = {
  text: string;
  highlightText: string;
};
const Description = ({ text, highlightText }: DescriptionProps) => {
  return (
    <div css={sx.descriptWrapper}>
      <Image
        width="12px"
        height="12px"
        src="/img/more/secession/icon-x.svg"
        alt=""
      />
      <Typography variant="h4" sx={{}}>
        {text} <span css={sx.span}>{highlightText}</span>
      </Typography>
    </div>
  );
};
