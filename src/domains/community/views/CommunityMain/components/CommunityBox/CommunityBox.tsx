import { css } from "@emotion/react";
import { LightColor } from "@/themes/Color";
import { Button, IconButton, Stack, Typography } from '@mui/material';
import Image from "next/image";
import { RoutePath } from "@/constants/Path";
import { useRouter } from "next/router";

type CommunityBoxProps = {
  img: string;
  hoverImg?: string;
  content: string;
};

export const CommunityBox = ({ img, content }: CommunityBoxProps) => {
  const router = useRouter();
  const handleViewCategory = () => {
    router.push({
      pathname: RoutePath.CommunityList,
      query: { category: content },
    });
  };
  return (
    <Button css={sx.root} onClick={handleViewCategory}>
      <div css={sx.categoryContainer}>
        <Image width="24px" height="24px" src={img} alt="" />
        <Typography variant="h4" color={LightColor.Gray100} css={sx.text}>
          {content}
        </Typography>
      </div>
    </Button>
  );
};

const sx = {
  root: css`
    width: initial;
    height: initial;
  `,
  categoryContainer: css`
    width: 100%;
    background-color: ${LightColor.Gray500};
    border-radius: 8px;
  
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 16px;
    cursor: pointer;
  `,
  text: css`
    margin-top: 16px;
    word-break: break-word;
    white-space: nowrap;
  `,
};
