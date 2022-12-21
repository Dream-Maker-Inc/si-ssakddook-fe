import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Box, Modal, Typography } from "@mui/material";

export type LifeAlarmModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
};

export const LifeAlarmModal = ({
  isOpen,
  onClose,
  onContinue,
}: LifeAlarmModalProps) => {
  return (
    <Modal open={isOpen}>
      <Box css={sx.modalBox}>
        <Typography variant="h4">
          ‘싹둑’에서 광고성 정보 알림을 보내드릴 예정이에요.
          <br />
          <br />
          라이프 콘텐츠 알림 수신 시 회원님의 기기로 관련 푸시 메시지가 발송될
          예정입니다. 관련 내용은 프로모션 정보 수신 동의 약관에서 확인할 수
          있어요.
          <br />
          <br />앱 푸시에 수신 동의하시겠어요?
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
    height: 240px;
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
