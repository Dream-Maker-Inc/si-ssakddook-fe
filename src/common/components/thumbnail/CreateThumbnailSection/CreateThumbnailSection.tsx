import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { IconButton } from "@mui/material";
import Image from "next/image";
import ThumbnailIcon from "@/img/community/icon-thumbnail-close.svg";

type ThumbnailSectionProps = {
  uploadImage: string;
  onDeleteClick: () => void;
};

export const CreateThumbnailSection = ({
  uploadImage,
  onDeleteClick,
}: ThumbnailSectionProps) => {
  return (
    <div css={sx.thumbnailSection}>
      <div css={sx.thumbnail}>
        <Image
          width="50px"
          height="50px"
          src={uploadImage}
          alt="thumbnail"
          css={sx.img}
        />
        <IconButton onClick={() => onDeleteClick()} css={sx.thumbnailCloseBtn}>
          <Image width="10px" height="10px" src={ThumbnailIcon} alt="" />
        </IconButton>
      </div>
    </div>
  );
};

const sx = {
  thumbnailSection: css`
    width: 100%;
    height: 70px;
    padding: 0 16px;

    display: flex;
    align-items: center;
    gap: 10px;
    position: absolute;
    left: 0;
    bottom: 40px;
    border-top: 1px solid ${LightColor.Gray500};
  `,

  thumbnail: css`
    width: 50px;
    height: 50px;
    background-color: ${LightColor.Gray500};
    border-radius: 8px;
    position: relative;
  `,

  img: css`
    border-radius: 8px;
  `,

  thumbnailCloseBtn: css`
    position: absolute;
    top: 5px;
    right: 5px;
  `,
};
