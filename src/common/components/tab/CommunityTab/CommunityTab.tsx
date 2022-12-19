import { RoutePath } from "@/constants/Path";
import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import MainLogo from "@/img/main/logo.svg";
import SearchIcon from "@/img/tab/icon-search.svg";
import NotificationIcon from "@/img/tab/icon-notification.svg";
import { useSetRecoilState } from "recoil";
import { NavigationAtom } from "@/recoil/Navigation/Navigation.atom";

export const CommunityTab = () => {
  const router = useRouter();
  const setNavigation = useSetRecoilState(NavigationAtom);

  const onMainView = () => {
    setNavigation(RoutePath.Main);
    router.push(RoutePath.Main);
  };

  const onMyClick = () => {
    router.push(RoutePath.MyArticle);
  };

  const onSearch = () => {
    router.push(RoutePath.CommunitySearch);
  };

  return (
    <div>
      <div css={sx.container}>
        <div css={sx.appbarContainer}>
          <IconButton onClick={onMainView}>
            <Image width="24px" height="16px" src={MainLogo} alt="logo" />
          </IconButton>
          <Typography variant="h2" ml="4px" sx={{ flexGrow: 1 }}>
            커뮤니티
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
      </div>
    </div>
  );
};

const sx = {
  container: css`
    position: absolute;
    width: 100%;
    height: 50px;

    top: 0;
    left: 0;
  `,

  appbarContainer: css`
    width: 100%;
    height: 100%;
    padding: 0 8px;
    background-color: white;
    box-shadow: 0px 1px 1px rgb(0 0 0 / 10%);

    display: flex;
    align-items: center;
  `,

  buttonWrapper: css`
    display: flex;
    align-items: center;
  `,
};
