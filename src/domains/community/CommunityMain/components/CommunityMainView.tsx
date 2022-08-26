import { FloatingButton } from "@/common/components/button/FloatingButton";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Fab, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { CommunityBox } from "./CommunityBox/CommunityBox";
import { NoticeBox } from "./NoticeBox";
import { useCommunityMainView } from "./useCommunityMainView";

export const CommunityMainView = () => {
  const { boxData } = useCommunityMainView();
  return (
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
          <div css={sx.item}>
            <div css={sx.rowWrapper}>
              <Typography variant="body2" color="black">
                고민 상담해 드립니다.
              </Typography>
              <Typography fontSize="8px" color={LightColor.Gray100}>
                3일전
              </Typography>
            </div>
            <div css={sx.rowWrapper}>
              <Typography fontSize="8px" color={LightColor.Gray100}>
                고독한 강아지{" · "}직장 폭력
              </Typography>

              <div css={sx.chatWrapper}>
                <div css={sx.wrapper}>
                  <Image
                    width="10px"
                    height="10px"
                    src="/img/icon-chat-heart.svg"
                    alt=""
                  />
                  <Typography fontSize="8px" color={LightColor.Gray100}>
                    1.2만
                  </Typography>
                </div>
                <div css={sx.wrapper}>
                  <Image
                    width="10px"
                    height="10px"
                    src="/img/icon-chat-comment.svg"
                    alt=""
                  />
                  <Typography fontSize="8px" color={LightColor.Gray100}>
                    1.2만
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div css={sx.item}>
            <div css={sx.rowWrapper}>
              <Typography variant="body2" color="black">
                고민 상담해 드립니다.
              </Typography>
              <Typography fontSize="8px" color={LightColor.Gray100}>
                3일전
              </Typography>
            </div>
            <div css={sx.rowWrapper}>
              <Typography fontSize="8px" color={LightColor.Gray100}>
                고독한 강아지{" · "}직장 폭력
              </Typography>

              <div css={sx.chatWrapper}>
                <div css={sx.wrapper}>
                  <Image
                    width="10px"
                    height="10px"
                    src="/img/icon-chat-heart.svg"
                    alt=""
                  />
                  <Typography fontSize="8px" color={LightColor.Gray100}>
                    1.2만
                  </Typography>
                </div>
                <div css={sx.wrapper}>
                  <Image
                    width="10px"
                    height="10px"
                    src="/img/icon-chat-comment.svg"
                    alt=""
                  />
                  <Typography fontSize="8px" color={LightColor.Gray100}>
                    1.2만
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div css={sx.item}>
            <div css={sx.rowWrapper}>
              <Typography variant="body2" color="black">
                고민 상담해 드립니다.
              </Typography>
              <Typography fontSize="8px" color={LightColor.Gray100}>
                3일전
              </Typography>
            </div>
            <div css={sx.rowWrapper}>
              <Typography fontSize="8px" color={LightColor.Gray100}>
                고독한 강아지{" · "}직장 폭력
              </Typography>

              <div css={sx.chatWrapper}>
                <div css={sx.wrapper}>
                  <Image
                    width="10px"
                    height="10px"
                    src="/img/icon-chat-heart.svg"
                    alt=""
                  />
                  <Typography fontSize="8px" color={LightColor.Gray100}>
                    1.2만
                  </Typography>
                </div>
                <div css={sx.wrapper}>
                  <Image
                    width="10px"
                    height="10px"
                    src="/img/icon-chat-comment.svg"
                    alt=""
                  />
                  <Typography fontSize="8px" color={LightColor.Gray100}>
                    1.2만
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div css={sx.item}>
            <div css={sx.rowWrapper}>
              <Typography variant="body2" color="black">
                고민 상담해 드립니다.
              </Typography>
              <Typography fontSize="8px" color={LightColor.Gray100}>
                3일전
              </Typography>
            </div>
            <div css={sx.rowWrapper}>
              <Typography fontSize="8px" color={LightColor.Gray100}>
                고독한 강아지{" · "}직장 폭력
              </Typography>

              <div css={sx.chatWrapper}>
                <div css={sx.wrapper}>
                  <Image
                    width="10px"
                    height="10px"
                    src="/img/icon-chat-heart.svg"
                    alt=""
                  />
                  <Typography fontSize="8px" color={LightColor.Gray100}>
                    1.2만
                  </Typography>
                </div>
                <div css={sx.wrapper}>
                  <Image
                    width="10px"
                    height="10px"
                    src="/img/icon-chat-comment.svg"
                    alt=""
                  />
                  <Typography fontSize="8px" color={LightColor.Gray100}>
                    1.2만
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div css={sx.item}>
            <div css={sx.rowWrapper}>
              <Typography variant="body2" color="black">
                고민 상담해 드립니다.
              </Typography>
              <Typography fontSize="8px" color={LightColor.Gray100}>
                3일전
              </Typography>
            </div>
            <div css={sx.rowWrapper}>
              <Typography fontSize="8px" color={LightColor.Gray100}>
                고독한 강아지{" · "}직장 폭력
              </Typography>

              <div css={sx.chatWrapper}>
                <div css={sx.wrapper}>
                  <Image
                    width="10px"
                    height="10px"
                    src="/img/icon-chat-heart.svg"
                    alt=""
                  />
                  <Typography fontSize="8px" color={LightColor.Gray100}>
                    1.2만
                  </Typography>
                </div>
                <div css={sx.wrapper}>
                  <Image
                    width="10px"
                    height="10px"
                    src="/img/icon-chat-comment.svg"
                    alt=""
                  />
                  <Typography fontSize="8px" color={LightColor.Gray100}>
                    1.2만
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FloatingButton />
    </div>
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

  item: css`
    width: 100%;
    height: 52px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    border-bottom: 1px solid ${LightColor.Gray500};
  `,
  rowWrapper: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,

  chatWrapper: css`
    display: flex;
    gap: 10px;
  `,
  wrapper: css`
    display: flex;
    align-items: center;
    gap: 2px;
  `,
};
