import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { BoardPrevButton } from "../../button/BoardPrevButton";
import { PrevModal } from "../../modal/PrevModal/PrevModal";

type WritingTabProps = {
  title?: string;
};

export const WritingTab = ({ title = "커뮤니티" }: WritingTabProps) => {
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
        <Typography variant="h2" ml="12px">
          {title}
        </Typography>
      </div>
      <IconButton>
        <Image width="24px" height="24px" src="/img/icon-submit.svg" alt="" />
      </IconButton>
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

    padding: 0 16px;

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  `,

  tabWrapper: css`
    display: flex;
    align-items: center;
  `,
};
