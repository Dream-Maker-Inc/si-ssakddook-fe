import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Box, Modal, Typography } from "@mui/material";

export type PrevModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
};

export const PrevModal = ({ isOpen, onClose, onContinue }: PrevModalProps) => {
  return (
    <Modal open={isOpen}>
      <Box css={sx.modalBox}>
        <Typography variant="h4">
          입력 중인 데이터가 삭제됩니다.
          <br />
          계속하시겠어요?
        </Typography>
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
            계속하기
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
