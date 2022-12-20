import { RoutePath } from "@/constants/Path";
import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { BoardPrevButton } from "../../button/BoardPrevButton";
import SearchIcon from "@/img/tab/icon-search.svg";

export const CommunityWithSearchTab = () => {
  const router = useRouter();

  const onMoreView = () => {
    router.push(RoutePath.Main);
  };

  const onMyClick = () => {
    router.push({
      pathname: RoutePath.MyArticle,
      query: { category: "recent" },
    });
  };

  const onSearch = () => {
    router.push(RoutePath.CommunitySearch);
  };

  return (
    <div css={sx.tabContainer}>
      <BoardPrevButton onClick={onMoreView} />
      <Typography variant="h2" ml="4px" sx={{ flexGrow: 1 }}>
        {"최근 게시글"}
      </Typography>
      <div css={sx.buttonWrapper}>
        <IconButton onClick={onSearch}>
          <Image width="16px" height="16px" src={SearchIcon} alt="" />
        </IconButton>
        <IconButton onClick={onMyClick}>
          <Typography variant="h2">MY</Typography>
        </IconButton>
      </div>
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
    padding: 0 8px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  `,

  buttonWrapper: css`
    display: flex;
    align-items: center;
  `,
};
