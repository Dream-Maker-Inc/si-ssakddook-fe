import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import Image from "next/image";
import { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

type ThumbnailSectionProps = {
  uploadImageList: string[];
  isVisible: boolean;
};

export const ShowThumbnailSection = ({
  uploadImageList,
  isVisible,
}: ThumbnailSectionProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div css={sx.thumbnailSection(isVisible)}>
      {uploadImageList?.map((it, index) => (
        <div css={sx.thumbnail} onClick={() => openImageViewer(index)}>
          <Image
            width="50px"
            height="50px"
            src={it}
            alt="thumbnail"
            css={sx.img}
          />
        </div>
      ))}
      {isViewerOpen && (
        <ImageViewer
          src={uploadImageList}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
        />
      )}
    </div>
  );
};

const sx = {
  thumbnailSection: (isVisible: boolean) => css`
    width: 100%;
    height: 70px;

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
