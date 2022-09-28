import { css } from "@emotion/react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { FormTitleWithDesc } from "../FormTitleWithDesc";
import { FormTitleWithDescProps } from "../FormTitleWithDesc/FormTitleWithDesc";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import { useAgreement } from "../../hooks/useServiceArticle";
import { useState } from "react";
import { LightColor } from "@/themes/Color";
import Image from "next/image";

type AgreementArticleProps = {
  titleProps: FormTitleWithDescProps;
};

export const AgreementArticle = ({ titleProps }: AgreementArticleProps) => {
  const { result, checkedItemHandler } = useAgreement();

  return (
    <div css={sx.container}>
      <FormTitleWithDesc
        title={titleProps.title}
        desc={titleProps.desc}
        marginBottom={"12px"}
      />
      <div css={sx.checkboxWrapper}>
        {result?.map((it, index) => (
          <CheckBox
            key={index}
            label={"에 동의합니다."}
            value={it.id}
            hightlightText={it.title}
            necessary={it.isRequired}
            content={it.content}
            checkedItemHandler={checkedItemHandler}
          />
        ))}
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  `,
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
    color: ${LightColor.PrimaryDark};
  `,

  checkboxWrapper: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,

  modal: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;

    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }

    background-color: white;
    border: 1px solid ${LightColor.Gray500};

    padding: 16px 0;
  `,

  modalHr: css`
    width: 100%;
    height: 1px;
    background-color: ${LightColor.Gray500};
    margin: 16px 0;
  `,

  modalTitleWrapper: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 16px;
  `,
};

type CustomCheckBoxProps = {
  value: number;
  label: string;
  hightlightText: string;
  necessary: boolean;
  content: string;
  checkedItemHandler: (value: number, checked: any) => void;
};

const CheckBox = ({
  value,
  label,
  hightlightText,
  necessary = true,
  content,
  checkedItemHandler,
}: CustomCheckBoxProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = (value: number, checked: any) => {
    setIsChecked(!isChecked);
    checkedItemHandler(value, checked);
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxRoundedIcon />}
            checkedIcon={<CheckBoxRoundedIcon />}
            required={necessary ? true : false}
            value={value}
            name="termsIds"
            css={sx.chekcbox}
            checked={isChecked}
            onChange={(e) => checkHandler(value, e.target.checked)}
          />
        }
        label={
          <Typography
            variant="h4"
            ml="10px"
            sx={{ cursor: "unset" }}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            {necessary ? "[필수]" : "[선택]"}{" "}
            <a css={sx.span} onClick={handleOpen}>
              {hightlightText}
            </a>
            {label}
          </Typography>
        }
      />
      <TermsContentModal open={open} onClose={handleClose} content={content} />
    </div>
  );
};

type TermsContentModalProps = {
  open: boolean;
  onClose: () => void;
  content: string;
};

const TermsContentModal = ({
  open,
  onClose,
  content,
}: TermsContentModalProps) => {
  return (
    <div>
      <Modal open={open} onClose={onClose} css={sx.root}>
        <Box css={sx.modal}>
          <div css={sx.modalTitleWrapper}>
            <Typography variant="h2" color={LightColor.TextMain}>
              이용약관
            </Typography>
            <IconButton onClick={onClose}>
              <Image
                width="24px"
                height="24px"
                src="/img/close/icon-close.svg"
                alt="close"
              />
            </IconButton>
          </div>
          <div css={sx.modalHr}></div>
          <Typography
            variant="h4"
            color={LightColor.TextMain}
            sx={{ padding: "0 16px" }}
          >
            {content}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
