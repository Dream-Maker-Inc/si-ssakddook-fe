import { RoutePath } from "@/constants/Path";
import { css } from "@emotion/react";
import Image from "next/image";
import { IconButton } from "@mui/material";
import { useRecoilValue } from "recoil";
import { NavigationAtom } from "@/recoil/Navigation/Navigation.atom";
import MainUnselected from "@/img/bottomNavigation/inActive/icon-home.svg";
import MainSelected from "@/img/bottomNavigation/active/icon-home-active.svg";
import ChatUnselected from "@/img/bottomNavigation/inActive/icon-chat.svg";
import ChatSelected from "@/img/bottomNavigation/active/icon-chat-active.svg";
import CommunityUnselected from "@/img/bottomNavigation/inActive/icon-bamboo.svg";
import CommunitySelected from "@/img/bottomNavigation/active/icon-bamboo-active.svg";
import DiaryUnselected from "@/img/bottomNavigation/inActive/icon-diary.svg";
import DiarySelected from "@/img/bottomNavigation/active/icon-diary-active.svg";
import MoreUnselected from "@/img/bottomNavigation/inActive/icon-more.svg";
import MoreSelected from "@/img/bottomNavigation/active/icon-more-active.svg";

type DefaultBottomNavigationProps = {
  onPageChange: (e: string) => void;
};

export const DefaultBottomNavigation = ({
  onPageChange,
}: DefaultBottomNavigationProps) => {
  const navigation = useRecoilValue(NavigationAtom);

  const main = RoutePath.Main;
  const chat = RoutePath.Chat;
  const community = RoutePath.Community;
  const diary = RoutePath.Diary;
  const more = RoutePath.More;

  const navigationItems = [
    {
      routingAddress: main,
      unselected: MainUnselected,
      selected: MainSelected,
    },
    {
      routingAddress: chat,
      unselected: ChatUnselected,
      selected: ChatSelected,
    },
    {
      routingAddress: community,
      unselected: CommunityUnselected,
      selected: CommunitySelected,
    },
    {
      routingAddress: diary,

      unselected: DiaryUnselected,
      selected: DiarySelected,
    },
    {
      routingAddress: more,
      unselected: MoreUnselected,
      selected: MoreSelected,
    },
  ];

  return (
    <div>
      <div css={styles.root}>
        {navigationItems.map((it, index) => (
          <div css={styles.link} key={index}>
            <IconButton onClick={() => onPageChange(it.routingAddress)}>
              <Image
                width="18px"
                height="18px'"
                src={
                  it.routingAddress === navigation ? it.selected : it.unselected
                }
                alt="navigation-icon"
              />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  root: css`
    width: 100%;
    height: 50px;

    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;

    box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.1);
  `,

  link: css`
    flex: 1;
    width: 100%;
    display: flex;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  `,
};
