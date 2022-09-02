import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { PrevModal } from "../../modal/PrevModal/PrevModal";

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
    router.back();
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
      <PrevModal
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
