import { RoutePath } from "@/constants/Path";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

type DiaryTabProps = {
  title: string;
  writingState: DiaryTabStateProps;
};

type DiaryTabStateProps = {
  isWritingState?: boolean;
  onSubmitClick: () => void;
  onEditlick: () => void;
  onRestate: () => void;
};

export const DiaryTab = ({ title, writingState }: DiaryTabProps) => {
  const router = useRouter();
  //modal
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const moveToDiaryPage = () => {
    router.push(RoutePath.Diary);
  };
  const moveToDiaryUpdatePage = () => {
    handleModalClose();
    writingState.onRestate();
  };

  return (
    <div css={sx.tabContainer}>
      <div css={sx.tabWrapper}>
        <DiaryPrevButton
          onClick={
            writingState.isWritingState ? handleModalOpen : moveToDiaryPage
          }
        />
        <Typography variant="h2" ml="12px">
          {title}
        </Typography>
      </div>
      {writingState.isWritingState ? (
        <IconButton onClick={writingState.onSubmitClick}>
          <Image width="24px" height="24px" src="/img/icon-submit.svg" alt="" />
        </IconButton>
      ) : (
        <IconButton onClick={writingState.onEditlick}>
          <Image
            width="24px"
            height="24px"
            src="/img/diary/icon-edit.svg"
            alt=""
          />
        </IconButton>
      )}
      <DiaryModal
        key={"modal"}
        isOpen={modalOpen}
        onClose={handleModalClose}
        onContinue={moveToDiaryUpdatePage}
      />
    </div>
  );
};

const sx = {
  tabContainer: css`
    position: absolute;
    width: 100%;
    max-width: 1000px;

    height: 50px;
    left: 0px;
    top: 0px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 16px;

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  `,

  tabWrapper: css`
    display: flex;
    align-items: center;
  `,

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

type TDiaryPrevButton = {
  onClick: () => void;
};
const DiaryPrevButton = ({ onClick }: TDiaryPrevButton) => {
  return (
    <IconButton onClick={onClick}>
      <Image
        width="24px"
        height="24px"
        src="/img/arrowIcon/prev-icon.svg"
        alt=""
      />
    </IconButton>
  );
};

type DiaryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
};

const DiaryModal = ({ isOpen, onClose, onContinue }: DiaryModalProps) => {
  return (
    <Modal open={isOpen}>
      <Box css={sx.modalBox}>
        <Typography variant="h4">
          입력 중인 데이터가 삭제됩니다. <br />
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
