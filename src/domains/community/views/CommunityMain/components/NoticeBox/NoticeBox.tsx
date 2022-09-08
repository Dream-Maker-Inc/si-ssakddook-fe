import { RoutePath } from "@/constants/Path";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

export const NoticeBox = () => {
  const router = useRouter();
  const handleBoxClick = () => {
    router.push(RoutePath.Life);
  };
  return (
    <div css={sx.noticeContainer} onClick={handleBoxClick}>
      <Typography variant="body1" color="rgba(90, 136, 53, 0.6)">
        운영자가 추천하는 취미!
        <span css={sx.span}> 싹둑 라이프와 함께하세요.</span>
      </Typography>
      <Image
        width="20px"
        height="20px"
        src="/img/community/icon-heart.svg"
        alt=""
      />
    </div>
  );
};

const sx = {
  noticeContainer: css`
    width: 100%;
    height: 52px;
    background-color: rgba(90, 136, 53, 0.2);

    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 16px;
    margin-bottom: 16px;

    cursor: pointer;
  `,
  span: css`
    color: ${LightColor.PrimaryDark};
  `,
};
