import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Box, IconButton, Modal, Typography } from "@mui/material";

export type ChatModalProps = {
  isOpen: boolean;
  title: string;
  continueText: string;
  onClose: () => void;
  onContinue: () => void;
};

export const ChatModal = ({
  isOpen,
  title,
  continueText,
  onClose,
  onContinue,
}: ChatModalProps) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box css={sx.modalBox}>
        <Typography variant="h4">{title}</Typography>
        <div css={sx.modalButtonWrapper}>
          <Typography
            variant="h4"
            color={LightColor.Gray100}
            sx={{ cursor: "pointer" }}
            onClick={onClose}
          >
            취소
          </Typography>

          <Typography
            variant="h4"
            color={LightColor.PrimaryDark}
            sx={{ cursor: "pointer" }}
            onClick={onContinue}
          >
            {continueText}
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
    z-index: 99;
  `,

  modalButtonWrapper: css`
    display: flex;
    align-self: flex-end;
    gap: 10px;
  `,
};
