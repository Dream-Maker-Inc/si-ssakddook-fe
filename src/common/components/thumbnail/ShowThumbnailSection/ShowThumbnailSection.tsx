import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import Image from "next/image";

type ThumbnailSectionProps = {
  uploadImageList: string[];
  isVisible: boolean;
};

export const ShowThumbnailSection = ({
  uploadImageList,
  isVisible,
}: ThumbnailSectionProps) => {
  return (
    <div css={sx.thumbnailSection(isVisible)}>
      {uploadImageList?.map((it, index) => (
        <div css={sx.thumbnail} key={index}>
          <Image
            width="50px"
            height="50px"
            src={it}
            alt="thumbnail"
            css={sx.img}
          />
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
};
