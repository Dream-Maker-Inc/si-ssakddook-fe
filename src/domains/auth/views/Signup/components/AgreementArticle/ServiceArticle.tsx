import { css } from "@emotion/react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Modal,
  Typography,
} from "@mui/material";
import { FormTitleWithDesc } from "../FormTitleWithDesc";
import { FormTitleWithDescProps } from "../FormTitleWithDesc/FormTitleWithDesc";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import { useAgreement } from "../../hooks/useAgreement";
import { useState } from "react";
import { LightColor } from "@/themes/Color";

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
    width: 400px;
    background-color: white;
    border: 1px solid ${LightColor.Gray500};
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {content}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
