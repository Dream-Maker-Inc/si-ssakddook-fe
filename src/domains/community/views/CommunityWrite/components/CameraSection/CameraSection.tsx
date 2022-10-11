import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import Image from "next/image";
import CameraIcon from "@/img/community/icon-camera.svg";

type CameraSectionProps = {
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CameraSection = ({ onUpload }: CameraSectionProps) => {
  return (
    <div css={sx.cameraSection}>
      <input
        type="file"
        id="board-img-upload"
        name="avatar"
        accept="image/png, image/jpeg"
        css={sx.cameraInput}
        onChange={onUpload}
      />
      <label htmlFor="board-img-upload">
        <Image width="24px" height="24px" src={CameraIcon} alt="" />
      </label>
    </div>
  );
};

const sx = {
  cameraSection: css`
    width: 100%;
    height: 40px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    bottom: 0;
    border-top: 1px solid ${LightColor.Gray500};
  `,

  cameraInput: css`
    display: none;
  `,
};
