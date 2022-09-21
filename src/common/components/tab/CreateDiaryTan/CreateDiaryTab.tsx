import { RoutePath } from "@/constants/Path";
import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { PrevModal } from "../../modal/PrevModal/PrevModal";

type CreateDiaryTabProps = {
  title: string;
  writingState: CreateDiaryTabStateProps;
};

type CreateDiaryTabStateProps = {
  isWritingState?: boolean;
  onSubmitClick: () => void;
  onEditlick: () => void;
  onRestate: () => void;
};

export const CreateDiaryTab = ({
  title,
  writingState,
}: CreateDiaryTabProps) => {
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
      <IconButton onClick={writingState.onSubmitClick}>
        <Image width="24px" height="24px" src="/img/icon-submit.svg" alt="" />
      </IconButton>
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
