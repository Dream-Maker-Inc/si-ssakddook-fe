import { BoardItem } from "@/common/components/board/BoardItem";
import { FloatingButton } from "@/common/components/button/FloatingButton";
import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { CircularLoading } from "@/common/components/progress/CircularProgress/CircularLoading";
import { CommunityTab } from "@/common/components/tab/CommunityTab";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { CommunityBox } from "./CommunityBox/CommunityBox";
import { NoticeBox } from "./NoticeBox";
import { useCommunityMainView } from "./useCommunityMainView";
import ArrowRightSamllIcon from "@/img/arrowIcon/icon-arrow-right-small.svg";

export const CommunityMainView = () => {
  const { boxData, result, fetchState, onRecentView } = useCommunityMainView();

  if (fetchState.isLoading) return <CircularLoading />;
  if (fetchState.isError) return <div></div>;

  return (
    <AppbarLayout>
      <CommunityTab />
      <div css={sx.root}>
        <div css={sx.container}>
          <NoticeBox />

          <div css={sx.boxContainer}>
            {boxData!!.map((it, index) => (
              <CommunityBox
                key={index}
                img={it.imgSrc}
                content={it.content}
                queryString={it.queryString}
              />
            ))}
          </div>
          <div>
            <div css={sx.recentContentTitle}>
              <Typography variant="h2" color="black">
                최근 게시글
              </Typography>
              <div css={sx.more} onClick={onRecentView}>
                <Typography variant="h4">더보기</Typography>
                <Image
                  width="11px"
                  height="11px"
                  src={ArrowRightSamllIcon}
                  alt=""
                />
              </div>
            </div>
            {!result ||
              result.map((it, index) => (
                <BoardItem
                  key={index}
                  postId={it.id}
                  title={it.title}
                  date={it.date}
                  nicknameOrTitle={it.nickname}
                  category={it.category}
                  like={it.likedCount}
                  comments={it.commentCount}
                />
              ))}
          </div>
        </div>
        <FloatingButton category="" />
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
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;
  `,

  recentContentTitle: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 9px;
    border-bottom: 1px solid ${LightColor.Gray500};
  `,

  more: css`
    width: 60px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    padding-left: 2px;
    background-color: ${LightColor.Gray500};
    border-radius: 12px;
    cursor: pointer;
  `,
};
