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
import { useState } from "react";
import { LightColor } from "@/themes/Color";
import Image from "next/image";
import { TermsItemsResponse } from "@/data/apis/terms/terms.dto";
import IconClose from "@/img/close/icon-close.svg";

type AgreementArticleProps = {
  titleProps: FormTitleWithDescProps;
  result: TermsItemsResponse;
  checkedHandler: (value: number, checked: any) => void;
};

export const AgreementArticle = ({
  titleProps,
  result,
  checkedHandler,
}: AgreementArticleProps) => {
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
            checkedItemHandler={checkedHandler}
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

  modalContainer: css`
    width: 100%;
    height: 100%;
  `,
  modalHeader: css`
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;

    background-color: white;

    z-index: 99;
  `,

  modalHr: css`
    width: 100%;
    height: 1px;
    background-color: ${LightColor.Gray500};
  `,

  modalTitleWrapper: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 16px;
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
          <div css={sx.modalContainer}>
            <div css={sx.modalHeader}>
              <div css={sx.modalTitleWrapper}>
                <Typography variant="h2" color={LightColor.TextMain}>
                  이용약관
                </Typography>
                <IconButton onClick={onClose}>
                  <Image
                    width="24px"
                    height="24px"
                    src={IconClose}
                    alt="close"
                  />
                </IconButton>
              </div>
              <div css={sx.modalHr}></div>
            </div>
            <Typography
              variant="h4"
              color={LightColor.TextMain}
              sx={{ marginTop: 2, padding: "50px 16px 0 16px", lineHeight: 2 }}
            >
              {content}
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
