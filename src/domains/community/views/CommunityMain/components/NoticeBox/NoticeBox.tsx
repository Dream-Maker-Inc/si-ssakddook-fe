import { RoutePath } from "@/constants/Path";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import HeartIcon from "@/img/community/icon-heart.svg";

export const NoticeBox = () => {
  const router = useRouter();
  const handleBoxClick = () => {
    router.push(RoutePath.Life);
  };
  return (
    <div css={sx.noticeContainer} onClick={handleBoxClick}>
      <Typography variant="body1" color="rgba(90, 136, 53, 0.6)">
        {"썩은 잎을 잘라내는 일,\n"}
        <span css={sx.span}>더 나은 내일을 함께 피우겠습니다.</span>
      </Typography>
      <Image width="20px" height="20px" src={HeartIcon} alt="" />
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
    word-break: keep-all;
    color: ${LightColor.PrimaryDark};
  `,
};
