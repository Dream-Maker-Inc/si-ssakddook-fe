import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";

export const CategorySelection = () => {
  return (
    <div css={sx.selectionContainer}>
      <div css={sx.outer}>
        <Image
          width="20px"
          height="20px"
          src="/img/selection/icon-category.svg"
          alt=""
        />
        <Typography
          variant="body1"
          color={LightColor.Gray600}
          ml={"10px"}
          width="100%"
        >
          카테고리를 선택해 주세요.
        </Typography>
        <IconButton>
          <Image
            width="24px"
            height="24px"
            src="/img/arrowIcon/icon-arrow-down.svg"
            alt=""
          />
        </IconButton>
      </div>
    </div>
  );
};

const sx = {
  selectionContainer: css`
    width: 100%;
    height: 40px;

    padding: 0 16px;

    border-bottom: 1px solid ${LightColor.Gray500};
  `,

  outer: css`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
  `,
};
