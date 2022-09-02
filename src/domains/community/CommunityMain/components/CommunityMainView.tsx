import { BoardItem } from "@/common/components/board/BoardItem";
import { FloatingButton } from "@/common/components/button/FloatingButton";
import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { CommunityTab } from "@/common/components/tab/CommunityTab";

import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { CommunityBox } from "./CommunityBox/CommunityBox";
import { NoticeBox } from "./NoticeBox";
import { useCommunityMainView } from "./useCommunityMainView";

export const CommunityMainView = () => {
  const { boxData, boardData } = useCommunityMainView();
  return (
    <AppbarLayout>
      <CommunityTab />
      <div css={sx.root}>
        <div css={sx.container}>
          <NoticeBox />
          <div css={sx.boxContainer}>
            {boxData.map((it, index) => (
              <CommunityBox key={index} img={it.imgSrc} content={it.content} />
            ))}
          </div>
          <div>
            <div css={sx.recentContentTitle}>
              <Typography variant="h3" color="black">
                최근 게시글
              </Typography>
              <Link href="/main">
                <div css={sx.more}>
                  <Typography variant="h5" fontSize="8px">
                    더보기
                  </Typography>
                  <Image
                    width="11px"
                    height="11px"
                    src="/img/arrowIcon/icon-arrow-right-small.svg"
                    alt=""
                  />
                </div>
              </Link>
            </div>

            {boardData.map((it, index) => (
              <BoardItem
                key={index}
                title={it.title}
                date={it.date}
                nickname={it.nickname}
                category={it.category}
                like={it.like}
                comments={it.comments}
              />
            ))}
          </div>
        </div>
        <FloatingButton />
      </div>
    </AppbarLayout>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
    padding: 16px;

    position: relative;

    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
  container: css`
    width: 100%;
    height: 100%;
  `,
  boxContainer: css`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 7px;
    column-gap: 7px;

    margin-bottom: 30px;
  `,

  recentContentTitle: css`
    width: 100%;
    display: flex;
    justify-content: space-between;

    padding-bottom: 9px;
    border-bottom: 1px solid ${LightColor.Gray500};
  `,

  more: css`
    width: 49px;
    height: 20px;

    background-color: ${LightColor.Gray500};
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  `,
};
