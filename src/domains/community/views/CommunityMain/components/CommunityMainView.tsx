import { FloatingButton } from "@/common/components/button/FloatingButton";
import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { CommunityTab } from "@/common/components/tab/CommunityTab";
import { css } from "@emotion/react";
import { CommunityBox } from "./CommunityBox/CommunityBox";
import { NoticeBox } from "./NoticeBox";
import { CommunityBoardTab } from "./CommunityBoardTab";
import { useCommunityMainView } from "./useCommunityMainView";
import { RecentBoardList } from "./RecentBoardList";
import { HotBoardList } from "./HotBoardList";

export const CommunityMainView = () => {
  const { boxData } = useCommunityMainView();

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
          <CommunityBoardTab
            firstTabInfo={{
              title: "최근 게시글",
              children: <RecentBoardList />,
            }}
            secondTabInfo={{
              title: "인기글",
              children: <HotBoardList />,
            }}
          />
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
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
  `,
};
