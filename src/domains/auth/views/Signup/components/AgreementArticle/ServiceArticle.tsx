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
import { useAgreement } from "../../hooks/useAgreement";
import { useState } from "react";
import { LightColor } from "@/themes/Color";
import Image from "next/image";

type AgreementArticleProps = {
  titleProps: FormTitleWithDescProps;
};

export const AgreementArticle = ({ titleProps }: AgreementArticleProps) => {
  const { result } = useAgreement();

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
            hightlightText={it.title}
            necessary={it.isRequired}
            content={it.content}
          />
        ))}
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
  label: string;
  hightlightText: string;
  necessary: boolean;
  content: string;
};

const CheckBox = ({
  label,
  hightlightText,
  necessary = true,
  content,
}: CustomCheckBoxProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxRoundedIcon />}
            checkedIcon={<CheckBoxRoundedIcon />}
            required={necessary ? true : false}
            css={sx.chekcbox}
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
      <Modal open={open} onClose={onClose}>
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
