import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";

type DefaultTabProps = {
  category: string;
};

export const PlainTab = ({ category }: DefaultTabProps) => {
  return (
    <div css={sx.tabContainer}>
      <IconButton>
        <Image width="24px" height="16px" src="/img/main/logo.svg" alt="logo" />
      </IconButton>
      <Typography variant="h2" lineHeight="1" ml="12px">
        {category}
      </Typography>
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

    padding: 0 16px;

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  `,
};
