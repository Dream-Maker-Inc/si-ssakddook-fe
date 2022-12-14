import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { ClickBoxProps } from "../../types/MoreType.type";
import IconArrowRight from "@/img/arrowIcon/icon-arrow-right.svg";

export const ClickBox = ({
  title,
  desc,
  iconSrc,
  nextButtonState = true,
  onClick,
}: ClickBoxProps) => {
  return (
    <div css={sx.root} onClick={onClick}>
      <div css={sx.container}>
        <div>
          <Image width="18px" height="18px" src={iconSrc} alt="" />
        </div>
        <div css={sx.textWrapper}>
          <Typography variant="h3" color={"black"}>
            {title}
          </Typography>
          <Typography variant="h4" color={LightColor.Gray100}>
            {desc}
          </Typography>
        </div>
      </div>
      {nextButtonState && (
        <div css={sx.arrow}>
          <Image width="24px" height="24px" src={IconArrowRight} alt="" />
        </div>
      )}
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 72px;
    padding: 18px;
    border-bottom: 1px solid ${LightColor.Gray500};

    position: relative;

    cursor: pointer;
  `,
  container: css`
    display: flex;
    gap: 10px;
  `,

  textWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,

  arrow: css`
    position: absolute;
    top: 50%;
    right: 18px;
    transform: translateY(-50%);
  `,
};
