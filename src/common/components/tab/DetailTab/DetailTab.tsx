import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { css } from "@emotion/react";
import { IconButton, Popover, Typography } from "@mui/material";
import Image from "next/image";
import { BoardPrevButton } from "../../button/BoardPrevButton";
import { useDetailTab } from "./useDetailTan";
import EtcIcon from "@/img/tab/icon-etc.svg";

type DetailTabProps = { postId: number; writerId: number };

export const DetailTab = ({ postId, writerId }: DetailTabProps) => {
  const myId = LocalStorage.getItem("id");
  const { popoverState, onEdit, onDelete } = useDetailTab(postId);

  return (
    <div css={sx.tabContainer}>
      <div css={sx.tabWrapper}>
        <BoardPrevButton />
        <Typography variant="h2" ml="4px">
          커뮤니티
        </Typography>
      </div>
      {myId == writerId + "" ? (
        <div>
          <IconButton onClick={popoverState.onOpen}>
            <Image width="24px" height="24px" src={EtcIcon} alt="" />
          </IconButton>
          <Popover
            open={popoverState.isOpen}
            anchorEl={popoverState.anchor}
            onClose={popoverState.onClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <div css={sx.popoverContainer}>
              <IconButton onClick={onEdit}>
                <Typography variant="h4">수정하기</Typography>
              </IconButton>
              <IconButton onClick={onDelete}>
                <Typography variant="h4">삭제하기</Typography>
              </IconButton>
            </div>
          </Popover>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

const sx = {
  tabContainer: css`
    position: absolute;
    width: 100%;
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

  popoverContainer: css`
    width: 100px;
    padding: 4px 2px;
  `,
};
