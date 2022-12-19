import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Box, Modal, Typography } from "@mui/material";
import { useState } from "react";

export type CalendarNoticeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  text: string;
};

export const CalendarNoticeModal = ({
  isOpen,
  onClose,
  text,
}: CalendarNoticeModalProps) => {
  return (
    <Modal open={isOpen}>
      <Box css={sx.modalBox}>
        <Typography variant="h4">{text}</Typography>
        <div css={sx.modalButtonWrapper}>
          <Typography
            variant="h4"
            color={LightColor.Gray100}
            sx={{ cursor: "pointer" }}
            onClick={onClose}
          >
            닫기
          </Typography>
        </div>
      </Box>
    </Modal>
  );
};

const sx = {
  modalBox: css`
    width: 240px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 20px;
  `,
  modalButtonWrapper: css`
    display: flex;
    align-self: flex-end;
    gap: 10px;
  `,
};
