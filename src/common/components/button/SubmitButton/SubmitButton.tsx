import Image from "next/image";
import { css } from "@emotion/react";
import { IconButton } from "@mui/material";
import IconSubmit from "@/img/icon-submit.svg";
import IconDisabledSubmit from "@/img/icon-submit-disabled.svg";

type TSubmitButton = {
  disabled: boolean;
  onSubmit: () => void;
};
export const SubmitButton = ({ onSubmit, disabled }: TSubmitButton) => {
  return (
    <div css={sx.img}>
      {disabled ? (
        <div>
          <Image width="24px" height="24px" src={IconDisabledSubmit} alt="" />
        </div>
      ) : (
        <IconButton onClick={onSubmit}>
          <Image width="24px" height="24px" src={IconSubmit} alt="" />
        </IconButton>
      )}
    </div>
  );
};

const sx = {
  img: css`
    position: absolute;
    top: 0;
    right: 0;
  `,
};
