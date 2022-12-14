import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { BoardPrevButton } from "../../button/BoardPrevButton";
import { PrevModal } from "../../modal/PrevModal/PrevModal";
import SubmitIcon from "@/img/icon-submit.svg";
import SubmitDisabledIcon from "@/img/icon-submit-disabled.svg";

type WritingTabProps = {
  title?: string;
  onActive?: boolean;
  // 나중에 필수로 변경
  onClick?: () => void;
};

export const WritingTab = ({
  title = "커뮤니티",
  onActive = false,
  onClick,
}: WritingTabProps) => {
  const router = useRouter();
  const moveToBackPage = () => {
    router.back();
  };
  //modal
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <div css={sx.tabContainer}>
      <div css={sx.tabWrapper}>
        <BoardPrevButton onClick={handleModalOpen} />
        <Typography variant="h2" ml="4px">
          {title}
        </Typography>
      </div>

      {onActive ? (
        <IconButton onClick={onClick}>
          <Image width="24px" height="24px" src={SubmitIcon} alt="" />
        </IconButton>
      ) : (
        <div css={sx.disabledButton}>
          <Image width="24px" height="24px" src={SubmitDisabledIcon} alt="" />
        </div>
      )}

      <PrevModal
        key={"modal"}
        isOpen={modalOpen}
        onClose={handleModalClose}
        onContinue={moveToBackPage}
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
    padding: 0 8px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  `,
  tabWrapper: css`
    display: flex;
    align-items: center;
  `,

  disabledButton: css`
    width: 40px;
    height: 40px;
    padding: 8px;
  `,
};
