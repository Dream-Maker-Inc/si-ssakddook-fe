import { css } from "@emotion/react";
import { LightColor } from "@/themes/Color";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import { RoutePath } from "@/constants/Path";
import { useRouter } from "next/router";

type CommunityBoxProps = {
  img: string;
  hoverImg?: string;
  content: string;
  queryString: string;
};

export const CommunityBox = ({
  img,
  content,
  queryString,
}: CommunityBoxProps) => {
  const router = useRouter();
  const handleViewCategory = () => {
    router.push({
      pathname: RoutePath.CommunityList,
      query: { category: queryString },
    });
  };
  return (
    <Button css={sx.root} onClick={handleViewCategory}>
      <div css={sx.categoryContainer}>
        <div css={sx.imageWrapper}>
          <Image width="16px" height="16px" src={img} alt="" />
        </div>
        <div css={sx.textWrapper}>
          <Typography
            variant="h4"
            lineHeight={1.3}
            color={LightColor.Gray100}
            css={sx.text}
          >
            {content}
          </Typography>
        </div>
      </div>
    </Button>
  );
};

const sx = {
  root: css`
    width: initial;
    height: initial;
    min-width: 10px;
  `,
  categoryContainer: css`
    width: 100%;
    height: 100%;
    background-color: ${LightColor.Gray500};
    border-radius: 12px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
  `,
  imageWrapper: css`
    display: flex;
    align-items: center;
  `,
  textWrapper: css`
    width: 100%;
    max-width: 60px;
    height: 28px;
    text-align: center;
    margin-top: 8px;
  `,

  text: css`
    width: 100%;
    height: 100%;
    word-break: keep-all;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  button: css`
    height: unset;
    min-height: unset;
    width: unset;
    min-width: unset;
    padding: 0;
  `,
};
