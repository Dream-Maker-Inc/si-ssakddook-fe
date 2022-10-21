import { RoutePath } from "@/constants/Path";
import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import EditIcon from "@/img/icon-edit.svg";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";

type FloatingButtonProps = {
  isCategoryListView?: boolean;
  category: string;
};

export const FloatingButton = ({
  isCategoryListView = false,
  category,
}: FloatingButtonProps) => {
  const router = useRouter();
  const onWrite = () => {
    router.push({
      pathname: RoutePath.CommunityWrite,
      query: { category: category },
    });
  };

  return (
    <IconButton onClick={onWrite}>
      <div css={sx.container(isCategoryListView)}>
        <Image width="24px" height="24px" src={EditIcon} alt="" />
      </div>
    </IconButton>
  );
};

const sx = {
  container: (isCategoryListView: boolean) => css`
    position: fixed;
    right: 16px;
    bottom: ${isCategoryListView ? "16px" : "66px"};

    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #dee7d7;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 50px;

    z-index: 99;
    cursor: pointer;
  `,
};
