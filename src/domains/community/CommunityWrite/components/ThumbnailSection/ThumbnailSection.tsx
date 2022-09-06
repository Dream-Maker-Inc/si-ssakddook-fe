import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { IconButton } from "@mui/material";
import Image from "next/image";
import { ImageType } from "../../types/communityImage.type";

type ThumbnailSectionProps = {
  uploadImageList: ImageType[];
  isVisible: boolean;
  onDeleteClick: (index: number) => void;
};

export const ThumbnailSection = ({
  uploadImageList,
  isVisible,
  onDeleteClick,
}: ThumbnailSectionProps) => {
  return (
    <div css={sx.thumbnailSection(isVisible)}>
      {uploadImageList.map((it, index) => (
        <div css={sx.thumbnail} key={index}>
          <Image
            width="50px"
            height="50px"
            src={it.src}
            alt="thumbnail"
            css={sx.img}
          />
          <IconButton
            onClick={() => onDeleteClick(it.id)}
            css={sx.thumbnailCloseBtn}
          >
            <Image
              width="10px"
              height="10px"
              src="/img/community/icon-thumbnail-close.svg"
              alt=""
            />
          </IconButton>
        </div>
      ))}
    </div>
  );
};

const sx = {
  thumbnailSection: (isVisible: boolean) => css`
    width: 100%;
    height: 70px;
    padding: 0 16px;

    display: ${isVisible ? "flex" : "none"};
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
