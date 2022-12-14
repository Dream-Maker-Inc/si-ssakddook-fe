import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import LogoImg from "@/img/main/logo.svg";
import AddCHatIconImg from "@/img/tab/icon-add-chat.svg";
import { useRouter } from "next/router";
import { RoutePath } from "@/constants/Path";
import { useSetRecoilState } from "recoil";
import { NavigationAtom } from "@/recoil/Navigation/Navigation.atom";

export const ChatMainTab = () => {
  const router = useRouter();
  const setNavigation = useSetRecoilState(NavigationAtom);
  const onClick = () => {
    router.push(RoutePath.ChatCreate);
  };
  const onMainView = () => {
    setNavigation(RoutePath.Main);
    router.push(RoutePath.Main);
  };

  return (
    <div css={sx.tabContainer}>
      <div css={sx.wrapper}>
        <IconButton onClick={onMainView}>
          <Image width="24px" height="16px" src={LogoImg} alt="logo" />
        </IconButton>
        <Typography variant="h2" lineHeight="1" ml="4px">
          채팅
        </Typography>
      </div>
      <div>
        <IconButton onClick={onClick}>
          <Image width="18px" height="18px" src={AddCHatIconImg} alt="" />
        </IconButton>
      </div>
    </div>
  );
};

const sx = {
  tabContainer: css`
    width: 100%;
    height: 50px;
    position: absolute;
    left: 0px;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  `,
  wrapper: css`
    display: flex;
    align-items: center;
  `,
};
