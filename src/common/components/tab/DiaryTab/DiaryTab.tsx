import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { PrevModal } from "../../modal/PrevModal/PrevModal";
import SubmitIcon from "@/img/icon-submit.svg";
import EditIcon from "@/img/diary/icon-edit.svg";
import PrevButtno from "@/img/arrowIcon/prev-icon.svg";
import { RoutePath } from "@/constants/Path";

type DiaryTabProps = {
  title: string;
  writingState: DiaryTabStateProps;
};

type DiaryTabStateProps = {
  isWritingState?: boolean;
  onSubmit: () => void;
  onEdit: () => void;
  onRestate: () => void;
};

export const DiaryTab = ({ title, writingState }: DiaryTabProps) => {
  const router = useRouter();

  //modal
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const moveToDiaryPage = () => {
    router.replace(RoutePath.Main);
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
        <Typography variant="h2" ml="4px">
          {title}
        </Typography>
      </div>
      {writingState.isWritingState ? (
        <IconButton onClick={writingState.onSubmit}>
          <Image width="24px" height="24px" src={SubmitIcon} alt="" />
        </IconButton>
      ) : (
        <IconButton onClick={writingState.onEdit}>
          <Image width="24px" height="24px" src={EditIcon} alt="" />
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

    padding-right: 16px;
    padding-left: 8px;

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
      <Image width="24px" height="24px" src={PrevButtno} alt="" />
    </IconButton>
  );
};
